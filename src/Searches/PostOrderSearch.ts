import { BinaryNode } from "../types";

const walk = <T>(curr: BinaryNode<T> | null, path: T[]): T[] => {
  if (!curr) {
    return path;
  }

  // recurse
  // pre

  // recurse
  walk(curr.left, path);
  walk(curr.right, path);

  // post
  path.push(curr.value);

  return path;
};

export const PostOrderSearch = <T>(head: BinaryNode<T>): T[] => {
  return walk(head, []);
};
