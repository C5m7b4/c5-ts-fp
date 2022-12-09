import { FormatDateType } from "./format";

const addDays = (date: FormatDateType, days: number) => {
  if (typeof date === "undefined" || date === null) {
    date = new Date();
  }

  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export { addDays };
