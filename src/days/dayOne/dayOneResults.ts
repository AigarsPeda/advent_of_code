import readFile from "../../utils/readFile";
import firstThreeElvesCaloriesSum from "./firstThreeElvesCalriesSum";
import getCaloriesPerElf from "./getCaloriesPerElf";

const dayOneResults = async (filePath: string) => {
  const data = await readFile(filePath);
  const elfCalories = getCaloriesPerElf(data || "");
  const totalCalories = firstThreeElvesCaloriesSum(elfCalories);

  return {
    elfWithMostCalories: elfCalories[0],
    totalCaloriesForFirstThreeElves: totalCalories,
  };
};

export default dayOneResults;
