import { BinaryNode } from "../types";

const walk = <T>(curr: BinaryNode<T> | null, path: T[]): T[] => {
  if (!curr) {
    return path;
  }

  // recurse
  // pre
  path.push(curr.value);
  // recurse
  walk(curr.left, path);
  walk(curr.right, path);
  // post

  return path;
};

export const PreOrderSearch = <T>(head: BinaryNode<T>): T[] => {
  return walk(head, []);
};
