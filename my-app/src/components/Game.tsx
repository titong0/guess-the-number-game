import { useState } from "react";
import { genNumber } from "../algorithms";
import Hint from "./NumberHint";

const Game: React.FC = () => {
  const [numberToGuess, setNumberToGuess] = useState(genNumber());
  const [hints, setHints] = useState([genNumber(), genNumber(), genNumber()]);
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
    setHints([genNumber(), genNumber(), genNumber()]);
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
      <span style={{fontSize: "1.5rem"}} >can you guess the combination?</span>

      <div className=" example numbers">
        <div>?</div>
        <div>?</div>
        <div>?</div>
      </div>
      <div className="hints-container">
        {hints.map((i, index) => {
          return (
            <Hint
              key={hints[index]}
              numberToGuess={numberToGuess}
              number={hints[index]}
            />
          );
        })}
      </div>
      <button className="game-buttons" onClick={addHint}>
        New Hint
      </button>
      <div className="game-options">
        <input
          className="game-buttons"
          type="text"
          placeholder="The number is"
          onChange={handleChange}
        />
        <button className="game-buttons" onClick={validate}>
          Check
        </button>
        <button className="game-buttons" onClick={newNumber}>
          New game
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
