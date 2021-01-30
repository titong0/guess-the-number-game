import { useState, ChangeEventHandler } from "react";
import { genNumsForHints } from "../algorithms";
import NumberHint from "./NumberHint";

const Game: React.FC = () => {
  const [numberToGuess, setNumberToGuess] = useState("124");
  const [hintNumbers, setHintNumbers] = useState(genNumsForHints(1));
  const [userValue, setUserValue] = useState("");
  const addHint = (amount: number) => {
    for (let i = 0; i < amount; i++) {
      const newNum = genNumsForHints(1);
      const prevArray = [...hintNumbers];
      prevArray.push(...newNum);
      setHintNumbers(prevArray);
    }
  };
  const newNumber = (): void => {
    setNumberToGuess(genNumsForHints(1)[0]);
    setHintNumbers(genNumsForHints(1));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValue(e.target.value);
  };
  const validate = () => {
    if (userValue === numberToGuess) {
      alert("lolaso");
    }
  };
  return (
    <div className="game-container">
      {numberToGuess}
      <div className="hints-container">
        {hintNumbers.map((i, index) => {
          return (
            <NumberHint
              numberToGuess={numberToGuess}
              number={hintNumbers[index]}
            />
          );
        })}
      </div>
      <div className="game-options">
        <input
          type="text"
          placeholder="The number is"
          onChange={handleChange}
        />
        <input type="submit" value="Check!" onClick={validate} />

        <button onClick={() => newNumber()}>Generate new number</button>
        <button onClick={() => addHint(2)}>Get new hint</button>
      </div>
    </div>
  );
};

export default Game;
