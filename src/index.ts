import path from "path";
import getGameScore from "./days/dayTwo/firstPart";
import getSecondDayResult from "./days/dayTwo/secondDay";
import readFile from "./utils/readFile";

// const filePath = path.join(__dirname, "./days/dayOne/dayOne.txt");
const filePath = path.join(__dirname, "./days/dayTwo/dayTwo.txt");

console.log("Hello world!!!!");

const program = async () => {
  const data = await readFile(filePath);
  const score = getGameScore(data || "");
  const score2 = getSecondDayResult(data || "");

  console.log("second day:", score2);
  console.log("first day:", score);
};

program();
