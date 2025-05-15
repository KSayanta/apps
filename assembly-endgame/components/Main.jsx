import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { getFarewellText, getRandomWord, languages } from "../../src/utils";
import "./Main.css";

export default function Main() {
  // State
  const [currWord, setCurrWord] = useState(() => getRandomWord());
  const [guessedArr, setGuessedArr] = useState([]);
  const [farewellText, setFarewellText] = useState("");

  // Static
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // Derived
  const wrongCount = guessedArr.filter(
    guess => !currWord.includes(guess)
  ).length;

  const isGameWon = currWord
    .split("")
    .every(letter => guessedArr.includes(letter));

  const guessLeft = languages.length - 1;
  const isGameLost = wrongCount >= guessLeft;
  const isGameOver = isGameWon || isGameLost;
  const lastLetter = guessedArr[guessedArr.length - 1];

  const isLastGuessWrong =
    lastLetter && !currWord.includes(guessedArr[guessedArr.length - 1]);

  // Side Effect
  useEffect(() => {
    if (wrongCount > 0) {
      const language = languages[wrongCount - 1].name;
      setFarewellText(getFarewellText(language));
    }
  }, [wrongCount]);

  // Handler Functions
  function handleGuessed(e) {
    const letter = e.currentTarget.value;
    setGuessedArr(prevGuessedArr =>
      prevGuessedArr.includes(letter)
        ? prevGuessedArr
        : [...prevGuessedArr, letter]
    );
  }

  function handleReset() {
    setFarewellText("");
    setGuessedArr([]);
    setCurrWord(getRandomWord());
  }

  // Functional Component
  const ChipSet = function () {
    return languages.map((item, idx) => (
      <span
        key={nanoid()}
        className={idx < wrongCount ? "lost" : ""}
        style={{ color: item.color, backgroundColor: item.backgroundColor }}
      >
        {item.name}
      </span>
    ));
  };

  const Result = function () {
    if (!isGameOver)
      return Array.from(currWord).map((letter, idx) => (
        <span key={idx}>{guessedArr.includes(letter) ? letter : ""}</span>
      ));

    return Array.from(currWord).map((letter, idx) => {
      const status = guessedArr.includes(letter);
      return (
        <span key={idx} data-status={status}>
          {letter}
        </span>
      );
    });
  };

  const Keys = function () {
    return Array.from(alphabet).map(key => {
      let dataStatus = "";
      let disabled = isGameOver;

      if (guessedArr.includes(key) && currWord.includes(key)) {
        dataStatus = true;
        disabled = true;
      } else if (guessedArr.includes(key)) {
        dataStatus = false;
        disabled = true;
      }

      return (
        <button
          key={key}
          value={key}
          className="btn"
          data-status={dataStatus}
          disabled={disabled}
          aria-disabled={disabled}
          onClick={handleGuessed}
        >
          {key}
        </button>
      );
    });
  };

  const Feedback = function () {
    if (!isGameOver) {
      if (isLastGuessWrong)
        return <h2 className="farewell anim-slide-down">{farewellText}</h2>;

      return <h2>&nbsp;</h2>;
    }

    if (isGameWon) return <h2 className="won">🎉 You Win! 🎉</h2>;
    else return <h2 className="lost">Game Over!</h2>;
  };

  return (
    <main className="main wrapper wrapper--flex">
      <p className="instructions">
        Guess the word in under eight attempts to keep the programming world
        safe from Assembly!
      </p>

      <section aria-live="polite" role="status" className="feedback">
        <Feedback />
      </section>

      <section className="canvas">
        <div className="chipset-wrapper">
          <ChipSet />
        </div>

        <div className="result-wrapper">
          <Result />
        </div>
      </section>

      <section className="input-wrapper">
        <Keys />
      </section>

      {isGameOver && (
        <button className="btn btn-cta" onClick={handleReset}>
          New Game
        </button>
      )}

      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
    </main>
  );
}
