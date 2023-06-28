import { useGlobalContext } from "./Context"

function PwOptions() {
  const {
    useLowerCase,
    useUpperCase,
    useNumbers,
    useSymbols,
    setUseLowerCase,
    setUseUpperCase,
    setUseNumbers,
    setUseSymbols,
  } = useGlobalContext()
  return (
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
  )
}

export default PwOptions
