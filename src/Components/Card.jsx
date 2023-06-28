import { useState } from "react"
import { FaRegCopy } from "react-icons/fa"
import { AiOutlineArrowRight, AiFillLock } from "react-icons/ai"

function Card() {
  const [pwLength, setPwLength] = useState(1)

  const [password, setPassword] = useState("- - - - - -")
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

    return generatedPassword
  }

  return (
    <article className="generator-card">
      <div className="generator-pw">
        <h2 id="pwGenerated">
          <AiFillLock /> {password}
        </h2>
        <FaRegCopy />
      </div>
      <br />
      <form
        className="generator-specs"
        onSubmit={(e) => {
          e.preventDefault()
          setPassword(generatePassword(pwLength))
        }}
      >
        <div className="generator-info">
          <h3 id="charTxt">character length</h3>
          <h2 id="charLength">{pwLength}</h2>
        </div>
        <input
          type="range"
          name="pwLength"
          id="pwLength"
          step={1}
          min={1}
          max={20}
          value={pwLength}
          onChange={(e) => {
            setPwLength(e.target.value)
          }}
        />
        <section className="generator-optionContainer">
          <div className="option">
            <input
              type="checkbox"
              name=""
              id="lowerCase"
              className="generator-option"
              checked={useLowerCase}
              onChange={() => setUseLowerCase(!useLowerCase)}
            />
            <label htmlFor="lowerCase">include lowercase letters</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              name=""
              id="upperCase"
              className="generator-option"
              checked={useUpperCase}
              onChange={() => setUseUpperCase(!useUpperCase)}
            />
            <label htmlFor="upperCase">include uppercase letters</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              name=""
              id="numbers"
              className="generator-option"
              checked={useNumbers}
              onChange={() => setUseNumbers(!useNumbers)}
            />
            <label htmlFor="numbers">include numbers</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              name=""
              id="symbols"
              className="generator-option"
              checked={useSymbols}
              onChange={() => setUseSymbols(!useSymbols)}
            />
            <label htmlFor="symbols">include symbols</label>
          </div>
        </section>
        <section className="generator-strength">
          <h1>Strength</h1>
          <meter
            id="pwStrength-meter"
            min="0"
            max="20"
            low="8"
            high="14"
            optimum="20"
            value={pwLength}
          />
        </section>
        <button className="generator-generateBtn">
          Generate <AiOutlineArrowRight />
        </button>
      </form>
    </article>
  )
}

export default Card
