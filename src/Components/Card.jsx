import { FaRegCopy } from "react-icons/fa"

function Card() {
  return (
    <article className="generator-card">
      <div className="generator-pw">
        <h2 id="pwGenerated"> ---------</h2>
        <FaRegCopy />
      </div>
      <br />
      <div className="generator-specs">
        <div className="generator-info">
          <h3 id="charTxt">character lenght</h3>
          <h2 id="charLength">1</h2>
        </div>
        <input
          type="range"
          name="pwLength"
          id="pwLength"
          step={1}
          min={1}
          max={20}
        />
        <section className="generator-optionContainer">
          <div className="option">
            <input
              type="checkbox"
              name=""
              id="lowerCase"
              className="generator-option"
            />
            <label htmlFor="lowerCase">include lowercase letters</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              name=""
              id="upperCase"
              className="generator-option"
            />
            <label htmlFor="upperCase">include uppercase letters</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              name=""
              id="numbers"
              className="generator-option"
            />
            <label htmlFor="numbers">include numbers</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              name=""
              id="symbols"
              className="generator-option"
            />
            <label htmlFor="symbols">include symbols</label>
          </div>
        </section>
        <section className="generator-strength">
          <h1>Strength</h1>
          <meter
            id="fuel"
            min="0"
            max="10"
            low="3"
            high="6"
            optimum="8"
            value="6"
          />
        </section>
        <button className="generator-generateBtn">Generate </button>
      </div>
    </article>
  )
}

export default Card
