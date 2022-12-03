import path from "path";
import readFile from "./utils/readFile";

// const filePath = path.join(__dirname, "./days/dayOne/dayOne.txt");
const filePath = path.join(__dirname, "./days/dayTwo/dayTwo.txt");

const scoreOpp: { [key: string]: string } = {
  // opponent
  A: "X", // Rock
  B: "Y", // Paper
  C: "Z", // Scissors
};

const scoreYou: { [key: string]: number } = {
  // you
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3, // Scissors
};

const outCome: { [key: string]: number } = {
  win: 6,
  draw: 3,
  lost: 0,
};

console.log("Hello world!!!!");

const program = async () => {
  const data = await readFile(filePath);

  const games = data?.split("\n");
  let score = 0;

  if (!games) return;

  for (let i = 0; i < games.length; i++) {
    const element = games[i];
    const [away, you] = element.split(" ");

    // draw
    if (scoreOpp[away] === you) {
      console.log("draw", away, you);
      console.log("score", outCome.draw + scoreYou[you]);
      score += outCome.draw + scoreYou[you];
    }

    // lost
    if (away === "A" && you === "Z") {
      score += outCome.lost + scoreYou[you];
    }

    // lost
    if (away === "C" && you === "Y") {
      score += outCome.lost + scoreYou[you];
    }

    // lost
    if (away === "B" && you === "X") {
      score += outCome.lost + scoreYou[you];
    }

    // A: 1, // Rock
    // B: 2, // Paper
    // C: 3, // Scissors

    // you
    // X: 1, // Rock
    // Y: 2, // Paper
    // Z: 3, // Scissors

    // Rock defeats Scissors
    // Scissors defeats Paper
    // Paper defeats Rock

    // win
    if (away === "C" && you === "X") {
      score += outCome.win + scoreYou[you];
    }

    // win
    if (away === "B" && you === "Z") {
      score += outCome.win + scoreYou[you];
    }

    // win
    if (away === "A" && you === "Y") {
      score += outCome.win + scoreYou[you];
    }
  }

  console.log("score", score);
};

program();
