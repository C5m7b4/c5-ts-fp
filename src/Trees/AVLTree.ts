export class AVLTree<T> {
  root: T | null;

  constructor() {
    this.root = null;
  }

  add(value: T) {
    if (!this.root) {
      // @ts-ignore
      this.root = new AVLTreeNode(value);
    } else {
      // @ts-ignore
      this.root.add(value);
    }
  }

  toJson() {
    // return JSON.stringify(this.root.serialize(), null, 4);
    return JSON.stringify(this.root, null, 4);
  }

  toObject() {
    // return this.root.serialize();
    return this.root;
  }
}

export class AVLTreeNode<T> {
  left?: AVLTreeNode<T> | null;
  right?: AVLTreeNode<T> | null;
  value: T;
  height: number;

  constructor(
    value: T,
    left: AVLTreeNode<T> | null,
    right: AVLTreeNode<T> | null
  ) {
    this.left = left;
    this.right = right;
    this.value = value;
    this.height = 1;
  }

  add(value: T) {
    // decide to go left or right

    // find the correct place to add
    // make sure you update the heights
    if (value < this.value) {
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new AVLTreeNode(value, null, null);
      }
      if (!this.right || this.right?.height < this.left?.height) {
        this.height = this.left.height + 1;
      }
    }
    // question all these type guards
    // go right
    else {
      // go right
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new AVLTreeNode(value, null, null);
      }

      if (!this.left || this.right.height > this.left.height) {
        //not sure why this is not complaining but the one above is
        this.height = this.right.height + 1;
      }
    }

    this.balance();
  }

  balance() {
    // ask is this node out of balance
    // if  not out of balance, do nothing
    // if it is not balanced, do I need to single or double rotate
    // if single, just call rotate on self
    // if double, call rotate on child and self
    const rightHeight = this.right ? this.right.height : 0;
    const leftHeight = this.left ? this.left.height : 0;

    if (leftHeight > rightHeight + 1) {
      const leftRightHeight = this.left?.right ? this.left?.right?.height : 0;
      const leftLeftHeight = this.left?.left ? this.left?.left?.height : 0;

      if (leftRightHeight > leftLeftHeight) {
        this.left?.rotateRR();
      }

      this.rotateLL();
    } else if (rightHeight > leftHeight + 1) {
      const rightRightHeight = this.right?.right ? this.right.right.height : 0;
      const rightLeftHeight = this.right?.left ? this.right?.left.height : 0;

      if (rightLeftHeight > rightRightHeight) {
        this.right?.rotateLL();
      }

      this.rotateRR();
    }
  }

  rotateRR() {
    // call this if the right child is heavy
    const valueBefore = this.value;
    const leftBefore = this.left;
    // @ts-ignore
    this.value = this.right?.value;
    this.left = this.right;
    this.right = this.right?.right;
    // @ts-ignore
    this.left.right = this.left?.left;
    // @ts-ignore
    this.left.left = leftBefore;
    // @ts-ignore
    this.left.value = valueBefore;
    this.left?.updateInNewLocation();
    this.updateInNewLocation();
  }

  rotateLL() {
    // call this if the left child is heavy
    const valueBefore = this.value;
    const rightBefore = this.right;
    // @ts-ignore
    this.value = this.left?.value;
    this.right = this.left;
    this.left = this.left?.left;
    // @ts-ignore
    this.right.left = this.right?.right;
    // @ts-ignore
    this.right.right = rightBefore;
    // @ts-ignore
    this.right.value = valueBefore;
    this.right?.updateInNewLocation();
    this.updateInNewLocation();
  }

  updateInNewLocation() {
    // calculate the new height
    if (!this.right && !this.left) {
      this.height = 1;
    } else if (
      !this.right ||
      // @ts-ignore
      (this.left && this.right.height < this.left.height)
    ) {
      // @ts-ignore
      this.height = this.left.height + 1;
    } else {
      // @ts-ignore
      this.height = this.right.height + 1;
    }
  }
}
