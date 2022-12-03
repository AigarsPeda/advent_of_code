import fs from "fs";

import path from "path";

const filePath = path.join(__dirname, "./days/day1.txt");

console.log("Hello world!!!!");

fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
  if (!err) {
    console.log(data);
  } else {
    console.log(err);
  }
});
