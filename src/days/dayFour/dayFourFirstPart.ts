// In how many assignment pairs does one range fully contain the other?
const getDayFourPartOne = (input: string) => {
  const ranges = input
    .split(`\n`)
    .filter((line) => line.trim().length > 0)
    .map((line) => {
      const split = line.split(",").map((range) => {
        const [min, max] = range.split("-").map((number) => parseInt(number));
        return { min, max };
      });

      return {
        minA: split[0].min,
        maxA: split[0].max,
        minB: split[1].min,
        maxB: split[1].max,
      };
    });

  let count = 0;
  let secondCount = ranges.length;

  for (let i = 0; i < ranges.length; i++) {
    const obj = ranges[i];

    if (
      (obj.minA >= obj.minB && obj.maxA <= obj.maxB) ||
      (obj.minB >= obj.minA && obj.maxB <= obj.maxA)
    ) {
      count++;
    }

    if (obj.maxA < obj.minB || obj.maxB < obj.minA) {
      secondCount--;
    }
  }

  return { count, secondCount };
};

export default getDayFourPartOne;
