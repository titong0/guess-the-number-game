import { stringify } from "querystring";

const compareNumbers = (
  numberToGuess: string,
  generatedNumber: string
): string => {
  const toGuessDigits = numberToGuess.split("");
  const generatedDigits = generatedNumber.split("");

  let correctPlace = 0;
  let correctButMisplaced = 0;

  for (let digit of generatedDigits) {
    if (toGuessDigits.includes(digit)) {
      if (toGuessDigits.indexOf(digit) === generatedDigits.indexOf(digit)) {
        correctPlace++;
      } else {
        correctButMisplaced++;
      }
    }
  }
  const hint = `${correctPlace} numbers are correct and 
  ${correctButMisplaced} numbers are correct but in the wrong place.`;

  return hint ? hint : "no numbers are correct";
};

const genNumsForHints = (amountOfHints: number): string[] => {
  const hints = new Set<string>();

  while (hints.size < amountOfHints) {
    let currentNum = new Set<string>();
    while (currentNum.size < 3) {
      currentNum.add(genRandom(1, 9).toString());
    }
    hints.add([...currentNum].join(""));
  }

  return [...hints];
};

const genRandom = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export { compareNumbers, genNumsForHints };
