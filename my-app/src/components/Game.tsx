import { useState } from "react";
import { genNumber } from "../algorithms";
import NumberHint from "./NumberHint";

const Game: React.FC = () => {
  const [numberToGuess, setNumberToGuess] = useState(genNumber());
  const [hints, setHints] = useState([genNumber()]);
  const [userGuess, setUserGuess] = useState("");
  const [displayNumber, toggleDisplayNumber] = useState(false);

  const addHint = () => {
    let newNum = genNumber();
    while (true) {
      if (hints.includes(newNum)) {
        newNum = genNumber();
      } else break;
    }

    const prevArray = [...hints];
    prevArray.push(newNum);
    setHints(prevArray);
  };

  const newNumber = (): void => {
    setNumberToGuess(genNumber());
    setHints([genNumber()]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserGuess(e.target.value);
  };
  const validate = () => {
    if (userGuess === numberToGuess) {
      alert("correct");
      toggleDisplayNumber(true);
    } else {
      alert("incorrect");
    }
  };
  return (
    <div className="game-container">
      <div className="hints-container">
        {hints.map((i, index) => {
          return (
            <NumberHint
              key={hints[index]}
              numberToGuess={numberToGuess}
              number={hints[index]}
            />
          );
        })}
      </div>

      <button className="game-buttons" onClick={addHint}>
        +
      </button>

      <div className="game-options">
        <input
          className="game-buttons"
          type="text"
          placeholder="The number is"
          onChange={handleChange}
        />
        <button className="game-buttons" onClick={validate}>
          -{">"} 
        </button>
        <button className="game-buttons" onClick={newNumber}>
          New Game
        </button>
        <button
          className="game-buttons"
          onClick={() => toggleDisplayNumber(!displayNumber)}
        >
          Reveal number
        </button>
        {displayNumber ? (
          <div className="number-reveal">the number is {numberToGuess}</div>
        ) : (
          ""
        )}
        <br />
        <a
          href="https://github.com/titong0/guess-the-number-game"
          target="_blank"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Game;
