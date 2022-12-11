import { BinaryNode } from "../types";

export const compareBinaryTries = <T>(
  a: BinaryNode<T> | null,
  b: BinaryNode<T> | null
): boolean => {
  if (a === null && b === null) {
    return true;
  }

  // if (a === null || b === null) {
  //   return false;
  // }

  if (a?.value !== b?.value) {
    return false;
  }

  return (
    compareBinaryTries(a?.left || null, b?.left || null) &&
    compareBinaryTries(a?.right || null, b?.right || null)
  );
};
