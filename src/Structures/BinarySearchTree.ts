export class BinarySearchTreeNode<T> {
  data: T;
  left?: BinarySearchTreeNode<T>;
  right?: BinarySearchTreeNode<T>;

  constructor(data: T) {
    this.data = data;
  }
}

export class BinarySearchTree<T> {
  head?: BinarySearchTreeNode<T>;
  comparator: (a: T, B: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
  }

  insert(data: T): BinarySearchTreeNode<T> | null {
    if (!this.head) {
      this.head = new BinarySearchTreeNode(data);
      return this.head;
    }

    let current = this.head;

    while (true) {
      if (this.comparator(data, current.data) === 1) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new BinarySearchTreeNode(data);
          return current.right;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new BinarySearchTreeNode(data);
          return current.left;
        }
      }
    }
  }

  search(data: T): BinarySearchTreeNode<T> | null {
    if (!this.head) return null;

    let current = this.head;

    while (this.comparator(data, current.data) !== 0) {
      if (this.comparator(data, current.data) === 1) {
        if (!current.right) return null;

        current = current.right;
      } else {
        if (!current.left) return null;

        current = current.left;
      }
    }
    return current;
  }

  inOrderTraversal(
    node: BinarySearchTreeNode<T> | undefined,
    visited: Array<T> = []
  ): Array<T> {
    if (node) {
      this.inOrderTraversal(node.left, visited);
      visited.push(node.data);
      this.inOrderTraversal(node.right, visited);
    }
    return visited;
  }

  preOrderTraversal(
    node: BinarySearchTreeNode<T> | undefined,
    visited: Array<T> = []
  ): Array<T> {
    if (node) {
      visited.push(node.data);
      this.preOrderTraversal(node.left, visited);
      this.preOrderTraversal(node.right, visited);
    }
    return visited;
  }

  postOrderTraversal(
    node: BinarySearchTreeNode<T> | undefined,
    visited: Array<T> = []
  ): Array<T> {
    if (node) {
      this.postOrderTraversal(node.left, visited);
      this.postOrderTraversal(node.right, visited);
      visited.push(node.data);
    }
    return visited;
  }
}
