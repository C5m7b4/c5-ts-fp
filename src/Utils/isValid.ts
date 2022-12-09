import { isValidType } from "../types";

export const isValid = (v: isValidType) => {
  if (typeof v === "undefined") return false;

  if (v === null) return false;

  if (Array.isArray(v)) return true;

  if (v instanceof Date) return true;

  if (typeof v === "string") {
    if (v.length === 0) return false;
  }

  if (typeof v === "object") {
    if (Object.keys(v).length === 0) return false;
  }

  if (typeof v === "number") {
    if (v === 0) return false;
  }

  return true;
};
