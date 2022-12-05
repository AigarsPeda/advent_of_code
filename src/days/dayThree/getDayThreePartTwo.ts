const lowerCaseAlphabeticCharactersArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCaseAlphabeticCharactersArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const allCharacters = [
  ...lowerCaseAlphabeticCharactersArray,
  ...upperCaseAlphabeticCharactersArray,
];

const getDayThreePartTwo = (date: string) => {
  const compartments = date
    .split(`\n`)
    .filter((line) => line.trim().length > 0);

  // split string array in chunks of 3
  const chunkedCompartments = chunk(compartments, 3);
  console.log("chunkedCompartments", chunkedCompartments);

  // find all same characters in each chunk
  const sameCharacters = chunkedCompartments.map((chunk) => {
    const sameCharacters = chunk[0].split("").filter((character) => {
      return chunk[1].includes(character) && chunk[2].includes(character);
    });

    return sameCharacters[0];
  });

  console.log("sameCharacters", sameCharacters);

  let sum = 0;

  for (let i = 0; i < sameCharacters.length; i++) {
    const char = sameCharacters[i];
    const index = allCharacters.indexOf(char);

    sum += index + 1;
  }

  return sum;
};

// find string index of character in allCharacters array and return the character at the same index

const chunk = (array: string[], size: number) => {
  const chunkedArray = [];
  let index = 0;

  while (index < array.length) {
    chunkedArray.push(array.slice(index, size + index));
    index += size;
  }

  return chunkedArray;
};

export default getDayThreePartTwo;
