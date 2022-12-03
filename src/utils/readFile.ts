import fs from "fs";
import path from "path";

const readFile = async (filePath: string): Promise<string | undefined> => {
  try {
    return await fs.promises.readFile(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading file", error);
  }
};

export default readFile;
