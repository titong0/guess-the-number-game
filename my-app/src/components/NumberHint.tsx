import { compareNumbers } from "../algorithms";

export interface NumberHintProps {
  numberToGuess: string;
  number: string;
}
const Hint: React.FC<NumberHintProps> = ({ numberToGuess, number }) => {
  const [num1, num2, num3] = number.split("");

  return (
    <div className="number-hint">
      <div className="numbers">
        <div>{num1}</div>
        <div>{num2}</div>
        <div>{num3}</div>
      </div>
      <div className="number-info">{compareNumbers(numberToGuess, number)}</div>
    </div>
  );
};

export default Hint;
