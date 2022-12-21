import BinaryTreeNode from "./BinaryTreeNode";

class BinarySearchTreeNode<
  T extends string | number
> extends BinaryTreeNode<T> {
  left?: BinarySearchTreeNode<T>;
  right?: BinarySearchTreeNode<T>;

  setLeft(value: BinarySearchTreeNode<T>) {
    super.setLeft(value);
  }

  setRight(value: BinarySearchTreeNode<T>) {
    super.setRight(value);
  }

  insert(value: T) {
    if (value === this.value) {
      return;
    }

    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
        return;
      }
      this.setLeft(new BinarySearchTreeNode(value));
      return;
    }

    if (this.right) {
      this.right.insert(value);
      return;
    }
    this.setRight(new BinarySearchTreeNode(value));
  }

  findMinimum(): BinarySearchTreeNode<T> {
    if (this.left) {
      return this.left.findMinimum();
    }
    return this;
  }

  deleteThisNode(
    parent?: BinarySearchTreeNode<T>
  ): [BinarySearchTreeNode<T>?, BinarySearchTreeNode<T>?] {
    const childDirection = parent?.left === this ? "left" : "right";

    // case 1 delete leaf node
    if (!this.left && !this.right) {
      if (parent) {
        delete parent[childDirection];
      }
      return [this];
    }

    // case 2: delete when this is only one child
    if (this.left && !this.right) {
      if (parent) {
        parent[childDirection] = this.left;
      }
      return [this, this.left];
    } else if (this.right && !this.left) {
      if (parent) {
        parent[childDirection] = this.right;
      }
      return [this, this.right];
    }

    // case 3: there are 2 children

    // step 1: delete th in order successor
    const [deletedNode] = this.right!.delete(
      this.right!.findMinimum().value,
      this
    );

    deletedNode!.left = this.left;
    deletedNode!.right = this.right;
    if (parent) {
      parent[childDirection] = deletedNode;
    }
    return [this, deletedNode];
  }

  delete(
    value: T,
    parent?: BinarySearchTreeNode<T>
  ): [BinarySearchTreeNode<T>?, BinarySearchTreeNode<T>?] {
    // delete from left node
    if (value < this.value && this.left) {
      const [deletedNode] = this.left.delete(value, this);
      return [deletedNode, this];
    }

    // delete from right node
    if (value > this.value && this.right) {
      const [deletedNode] = this.right.delete(value, this);
      return [deletedNode, this];
    }

    /// delete the curent node
    if (this.value === value) {
      const res = this.deleteThisNode(parent);
      delete this.left;
      delete this.right;
      return res;
    }
    return [, this];
  }
}

export default BinarySearchTreeNode;
