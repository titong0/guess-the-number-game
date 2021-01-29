import { useState } from "react";
import { compareNumbers, genNumsForHints } from "../algorithms";
import NumberHint from "./NumberHint";

const hintNumbers = genNumsForHints(7);

console.log(compareNumbers("124", "426"))

const Game: React.FC = () => {
  const [numberToGuess, setnumberToGuess] = useState("124");
  return (
    <div className="game-container">
      <h1>number is {numberToGuess}</h1>
      {hintNumbers.map((i, index) => {
        return (
          <NumberHint
            numberToGuess={numberToGuess}
            number={hintNumbers[index]}
          />
        );
      })}
    </div>
  );
};

export default Game;
