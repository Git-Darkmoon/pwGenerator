/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"
import { toast } from "react-toastify"

const AppContext = createContext()

export function AppProvider({ children }) {
  const [pwLength, setPwLength] = useState(1)

  // const [securityScore, setSecurityScore] = useState(pwLength)

  const [useLowerCase, setUseLowerCase] = useState(false)
  const [useUpperCase, setUseUpperCase] = useState(false)
  const [useNumbers, setUseNumbers] = useState(false)
  const [useSymbols, setUseSymbols] = useState(false)

  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const symbols = `!@#$%^&*()_-+=[]{};:'",.<>/?|~"`

  function generatePassword(length) {
    let characters = ""

    if (useLowerCase) characters += lowerCase
    if (useUpperCase) characters += upperCase
    if (useNumbers) characters += numbers
    if (useSymbols) characters += symbols

    let generatedPassword = ""
    const passwordLength = length // Desired password length
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      generatedPassword += characters[randomIndex]
    }

    if (generatedPassword.includes("undefined")) {
      toast.error("No option selected !!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      return
    }
    return generatedPassword
  }

  function calcSecurityScore(length) {
    let score = length

    if (useLowerCase) score /= 0.75
    if (useUpperCase) score /= 0.75
    if (useNumbers) score *= 2
    if (useSymbols) score *= 3

    return score
  }

  async function saveToClipboard(pw) {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`${pw}`)
        toast.success(`Password copied to clipboard !`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      } catch (error) {
        toast.error("Error copying password")
      }
    } else {
      toast.error("Clipboard access not available")
    }
  }

  return (
    <AppContext.Provider
      value={{
        pwLength,
        setPwLength,
        saveToClipboard,
        generatePassword,
        setUseLowerCase,
        setUseUpperCase,
        setUseNumbers,
        setUseSymbols,
        calcSecurityScore,
        // securityScore,
        // setSecurityScore,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext)
}
