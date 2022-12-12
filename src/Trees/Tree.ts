// type TreeNode<T> = {
//   value: T;
//   children: TreeNode<T>[];
// };

import { isThisTypeNode } from "typescript";

export class Tree<T> {
  public length: number;
  public value?: T;
  public children?: T[];

  constructor(value: T) {
    this.length = 1;
    this.value = value;
    this.children = [];
  }

  insertChild(value: T) {
    const newTree = new Tree<T>(value);
    // @ts-ignore
    this.children?.push(newTree);
    this.length++;
    return newTree;
  }

  removeChild(value: any, property?: keyof T): T | null {
    for (let i = 0; i < this.length; i++) {
      if (this.children && this.children.length > 0) {
        const child = this.children[i] as T;
        if (property) {
          // @ts-ignore
          if (child.value[property] === value) {
            this.length--;
            return child;
          }
        } else {
          // @ts-ignore
          if (child.value === value) {
            this.length--;
            return child;
          }
        }
      } else {
        return null;
      }
    }
    return null;
  }

  // contains(searchValue: any) {}

  // static traverse(tree: Tree<T>, func = console.log) {}

  // find(tree: Tree<T>, value: any) {}

  // insert(parentTree: Tree<T>, value: T) {

  // }

  // remove(value: T) {}
}
