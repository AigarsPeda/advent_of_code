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

const getSecondDayResult = (data: string) => {
  const games = data?.split("\n");
  let score = 0;

  if (!games) return;

  for (let i = 0; i < games.length; i++) {
    const element = games[i];
    const [away, you] = element.split(" ");

    // DRAW
    if (you === "Y") {
      if (away === "A") {
        score += outCome.draw + scoreYou.X;
      }

      if (away === "B") {
        score += outCome.draw + scoreYou.Y;
      }

      if (away === "C") {
        score += outCome.draw + scoreYou.Z;
      }
    }

    // LOSE
    if (you === "X") {
      if (away === "A") {
        score += scoreYou.Z + outCome.lost;
      }

      if (away === "B") {
        score += scoreYou.X + outCome.lost;
      }

      if (away === "C") {
        score += scoreYou.Y + outCome.lost;
      }
    }

    // WIN
    if (you === "Z") {
      if (away === "A") {
        score += scoreYou.Y + outCome.win;
      }

      if (away === "B") {
        score += scoreYou.Z + outCome.win;
      }

      if (away === "C") {
        score += scoreYou.X + outCome.win;
      }
    }
  }

  return score;
};

export default getSecondDayResult;
