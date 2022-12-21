import Circle from "../shapes/Circle";
import theme from "../config/theme";
import getRandomColor from "../utils/getRandomColor";

class BinaryTreeNode<T extends string | number> {
  value: T;
  nodeCircle: Circle;
  left?: BinaryTreeNode<T>;
  right?: BinaryTreeNode<T>;

  constructor(value: T) {
    this.value = value;
    this.nodeCircle = new Circle(`${value}`, theme.radius, getRandomColor());
  }

  setLeft(value: BinaryTreeNode<T>) {
    this.left = value;
  }

  setRight(value: BinaryTreeNode<T>) {
    this.right = value;
  }

  getHeight(): number {
    const leftHeight = this.left?.getHeight() || 0;
    const rightHeight = this.right?.getHeight() || 0;
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

export default BinaryTreeNode;
