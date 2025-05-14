import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import { languages } from "../../src/utils";
import "./Main.css";

export default function Main() {
  const [currWord, setCurrWord] = useState("react");

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const ChipSet = function () {
    return languages.map(item => (
      <span
        key={nanoid()}
        style={{ color: item.color, backgroundColor: item.backgroundColor }}
      >
        {item.name}
      </span>
    ));
  };

  const Result = function () {
    return Array.from(currWord).map(letter => (
      <span key={nanoid()}>{letter}</span>
    ));
  };

  const Keys = function () {
    return Array.from(alphabet).map(key => (
      <button key={key} className="btn">
        {key}
      </button>
    ));
  };

  return (
    <main className="main wrapper wrapper--flex">
      <p className="instructions">
        Guess the word in under eight attempts to keep the programming world
        safe from Assembly!
      </p>

      <section className="feedback">
        <h2>🎉 You Win! 🎉</h2>
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

      <button className="btn btn-cta">New Game</button>
    </main>
  );
}
