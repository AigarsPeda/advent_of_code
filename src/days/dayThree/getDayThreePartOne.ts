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

const getDayThreePartOne = (date: string) => {
  const compartments = date
    .split(`\n`)
    .filter((line) => line.trim().length > 0)
    .map((line) => {
      const length = line.length;
      return {
        a: line.substring(0, length / 2),
        b: line.substring(length / 2, length),
      };
    });

  let character: string[] = [];

  for (let i = 0; i < compartments.length; i++) {
    const { a, b } = compartments[i];

    // fond all the characters that are the same in both a and b
    const sameCharacters = a
      .split("")
      .filter((character) => b.includes(character));

    character.push(sameCharacters[0]);
  }

  // find index of all the characters in allCharacters array and get sum of all the indexes
  return character
    .map((character) => allCharacters.indexOf(character))
    .reduce((a, b) => a + b + 1, 0);
};

export default getDayThreePartOne;
