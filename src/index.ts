import path from "path";
import getDayFourPartOne from "./days/dayFour/dayFourFirstPart";
import readFile from "./utils/readFile";

const filePath = path.join(__dirname, "./days/dayFour/dayFour.txt");

console.log("Hello world!!!!");

const program = async () => {
  const data = await readFile(filePath);
  const partOne = getDayFourPartOne(data || "");

  console.log("partOne", partOne);
};

program();
