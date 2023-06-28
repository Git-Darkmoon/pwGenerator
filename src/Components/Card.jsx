import { useState } from "react"
import { FaRegCopy } from "react-icons/fa"
import { AiOutlineArrowRight, AiFillLock } from "react-icons/ai"
import { useGlobalContext } from "./Context"
import PwConfig from "./PwConfig"

function Card() {
  const [password, setPassword] = useState("- - - - - -")

  const { pwLength, saveToClipboard, generatePassword } = useGlobalContext()

  return (
    <article className="generator-card">
      <div className="generator-pw">
        <h2 id="pwGenerated">
          <AiFillLock /> {password}
        </h2>
        <FaRegCopy onClick={() => saveToClipboard(password)} />
      </div>
      <br />
      <form
        className="generator-specs"
        onSubmit={(e) => {
          e.preventDefault()
          setPassword(generatePassword(pwLength))
        }}
      >
        <PwConfig />
        <button className="generator-generateBtn">
          Generate <AiOutlineArrowRight />
        </button>
      </form>
    </article>
  )
}

export default Card
