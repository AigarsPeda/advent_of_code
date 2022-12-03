import path from "path";
import dayOneResults from "./days/dayOne/dayOneResults";

const filePath = path.join(__dirname, "./days/day1/dayOne.txt");

console.log("Hello world!!!!");

const program = async () => {
  const { elfWithMostCalories, totalCaloriesForFirstThreeElves } =
    await dayOneResults(filePath);

  console.log(elfWithMostCalories, totalCaloriesForFirstThreeElves);
};

program();
