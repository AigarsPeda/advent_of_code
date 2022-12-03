const firstThreeElvesCaloriesSum = (elfCalories: number[]): number => {
  // sort the array of elves calories
  elfCalories.sort((a, b) => b - a);

  // get the first tree elves total calories
  const firstThreeElves = elfCalories.slice(0, 3);

  // get the total calories of the first three elves
  const totalCalories = firstThreeElves.reduce((a, b) => a + b, 0);

  return totalCalories;
};

export default firstThreeElvesCaloriesSum;
