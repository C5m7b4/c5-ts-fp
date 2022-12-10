import { BinaryNode } from "../types";

const walk = <T>(curr: BinaryNode<T> | null, path: T[]): T[] => {
  if (!curr) {
    return path;
  }

  // recurse
  // pre

  // recurse
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);
  // post

  return path;
};

export const InOrderSearch = <T>(head: BinaryNode<T>): T[] => {
  return walk(head, []);
};
