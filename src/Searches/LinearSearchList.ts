import { primitiveType } from "../types";

export const linearSearch = <T>(
  haystack: T[],
  needle: primitiveType,
  property?: keyof T
): T | null => {
  for (let i = 0; i < haystack.length; i++) {
    const item: T = haystack[i];
    if (property) {
      if (item[property] === needle) {
        return item;
      }
    } else {
      if (item === needle) {
        return item;
      }
    }
  }

  return null;
};
