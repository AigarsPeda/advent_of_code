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

const getGameScore = (data: string): number => {
  const games = data?.split("\n");
  let score = 0;

  if (!games) return score;

  for (let i = 0; i < games.length; i++) {
    const element = games[i];
    const [away, you] = element.split(" ");

    // draw
    if (scoreOpp[away] === you) {
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

  return score;
};

export default getGameScore;
