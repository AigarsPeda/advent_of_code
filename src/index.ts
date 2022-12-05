import path from "path";
import getDayThreePartOne from "./days/dayThree/getdayThreePartOne";
import getDayThreePartTwo from "./days/dayThree/getDayThreePartTwo";
import readFile from "./utils/readFile";

// const filePath = path.join(__dirname, "./days/dayOne/dayOne.txt");
const filePath = path.join(__dirname, "./days/dayThree/dayThree.txt");

console.log("Hello world!!!!");

const program = async () => {
  const data = await readFile(filePath);
  const partOne = getDayThreePartOne(data || "");
  const partTwo = getDayThreePartTwo(data || "");
  console.log("partOne", partOne);
  console.log("partTwo", partTwo);
};

program();
