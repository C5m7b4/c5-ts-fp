import { isValid } from "./isValid";

export type MoneyInput = string | number;

const formatMoney = (input: MoneyInput, includeDollarSign = true): string => {
  if (!isValid(input)) return "0.00";
  input = input.toString();
  const pos = input.indexOf(".");
  const left = input.substring(0, pos);
  let right = input.substring(pos + 1);
  if (right.length === 1) {
    right = right + "0";
  }
  if (right.length > 2) {
    right = right.substring(0, 2);
  }
  if (left.length === 0) {
    return `.${right}`;
  }
  if (includeDollarSign) {
    return `$${left}.${right}`;
  } else {
    return `${left}.${right}`;
  }
};

export type FormatDateType = string | Date;

const formatDate = (d: FormatDateType) => {
  if (typeof d === "undefined") return "";
  if (d === null) return "";
  if (Object.prototype.toString.call(d) == "[object Date]") {
    // @ts-ignore
    if (isNaN(d.getTime())) {
      return "";
    }
  }
  d = d.toString();
  const date = new Date(d);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return month + "/" + day + "/" + year;
};

export { formatMoney, formatDate };
