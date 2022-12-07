import { primitiveType } from "../types";

export const binarySearch = <T>(
  haystack: T[],
  needle: keyof T,
  property?: primitiveType
): T | null => {
  let lo = 0;
  let hi = haystack.length;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v: T = haystack[m];

    if (property && v) {
      if (v[property as keyof T] === needle) {
        return v;
        // @ts-ignore
      } else if (v[property] > needle) {
        hi = m;
      } else {
        lo = m + 1;
      }
    } else {
      if (v === needle) {
        return v;
        // @ts-ignore
      } else if (v > needle) {
        hi = m;
      } else {
        lo = m + 1;
      }
    }
  } while (lo < hi);

  return null;
};
