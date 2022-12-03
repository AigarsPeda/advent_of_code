import path from "path";
import firstThreeElvesCaloriesSum from "./days/day1/firstThreeElvesCalriesSum";
import getCaloriesPerElf from "./days/day1/getCaloriesPerElf";
import readFile from "./utils/readFile";

const filePath = path.join(__dirname, "./days/day1/day1.txt");

console.log("Hello world!!!!");

const program = async () => {
  const data = await readFile(filePath);
  const elfCalories = getCaloriesPerElf(data || "");
  const totalCalories = firstThreeElvesCaloriesSum(elfCalories);

  console.log(elfCalories[0]);
  console.log(totalCalories);
};

program();
