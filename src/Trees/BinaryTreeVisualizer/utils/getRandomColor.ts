import { CircleColorSettings } from "../config/types";
import theme from "../config/theme";

function getRandomColor(): CircleColorSettings {
  const { colorArray } = theme;
  return colorArray[Math.floor(Math.random() * colorArray.length)];
}

export default getRandomColor;
