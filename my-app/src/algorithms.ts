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

  return formatHint(correctPlace, correctButMisplaced);
};

// this generates a number with 3 diferent digits
const genNumber = (): string => {
  let currentNum = new Set();
  while (currentNum.size < 3) {
    currentNum.add(genRandom(1, 9).toString());
  }
  return [...currentNum].join("");
};

const genRandom = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const formatHint = (
  correctPlace: number,
  correctButMisplaced: number
): string => {
  let message = "";

  if (!correctPlace && !correctButMisplaced) {
    return "no numbers are correct";
  } else {
    if (correctPlace === 1) {
      message += `1 number is correct`;
    } else if (correctPlace > 1) {
      message += `${correctPlace} numbers are correct`;
    }
    if (correctButMisplaced === 1) {
      message += `1 number is misplaced`;
    } else if (correctButMisplaced > 1) {
      message += `${correctButMisplaced} numbers are misplaced`;
    }
  }
  return message;
};

export { compareNumbers, genNumber, genRandom };
