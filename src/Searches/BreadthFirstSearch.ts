// this is made for binary trees
// hence the name Binary Tree Breadth First Search
// BTBFS

import { BinaryNode } from "../types";

export const BreadthFirstSearch = <T>(
  head: BinaryNode<T>,
  needle: T
): BinaryNode<T> | undefined => {
  const q = [head];

  while (q.length) {
    const curr = q.shift() as BinaryNode<T>;

    //search
    if (curr.value === needle) {
      return curr;
    }

    if (curr.left) {
      q.push(curr.left);
    }
    if (curr.right) {
      q.push(curr.right);
    }
  }
  return undefined;
};
