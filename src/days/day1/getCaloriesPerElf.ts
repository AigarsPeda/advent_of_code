const getCaloriesPerElf = (fileInput: string) => {
  const caloriesArray = fileInput.split("\n");
  const elfCalories: number[] = [];

  let currentElf: number = 0;

  for (let i = 0; i < caloriesArray.length; i++) {
    const calories = caloriesArray[i];

    if (calories) {
      currentElf += parseInt(calories);
    }

    if (!calories) {
      elfCalories.push(currentElf);
      currentElf = 0;
    }
  }

  return elfCalories;
};

export default getCaloriesPerElf;
