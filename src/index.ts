import path from "path";
// import getDayFourPartOne from "./days/dayFour/dayFourFirstPart";
import readFile from "./utils/readFile";
import bbox from "@turf/bbox";
import { writeFile } from "fs/promises";

const filePath = path.join(
  __dirname,
  "./days/planosanas_vienibas/planosanas_vienibas.json"
);
const outputFilePath = path.join(
  __dirname,
  "./days/planosanas_vienibas/planosanas_vienibas_formatted.json"
);

console.log("Hello world!!!!");

const program = async () => {
  const data = await readFile(filePath);
  const jsonData = JSON.parse(data || "");

  const newData = jsonData.features.map((feature: any) => {
    const { geometry, ...rest } = feature;
    const [minX, minY, maxX, maxY] = bbox({
      type: "Polygon",
      coordinates: geometry.rings,
    });
    return {
      ...rest,
      bbox: [minX, minY, maxX, maxY],
    };
  });
  await writeFile(
    outputFilePath,
    JSON.stringify({ features: newData }, null, 2)
  );
  console.log("newData", newData);
};

program();

// attributes: {
//   OBJECTID: 9619,
//   LVM_DISTRICT_CODE: '22222',
//   LVM_DISTRICT_NAME: 'Rendas',
//   LVM_FORESTRY_CODE: '2',
//   DISTRICTAREA: null,
//   MANAGER: '1967'
// },
// geometry: { rings: [Array] }
