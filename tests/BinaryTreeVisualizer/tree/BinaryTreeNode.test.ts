import BinaryTreeNode from "../../../src/Trees/BinaryTreeVisualizer/tree/BinaryTreeNode";

describe("Binary Tree Node tests", () => {
  const mockRootValue = 5;
  const mockLeftChildValue = 6;
  const mockRightChildValue = 7;

  test("should initialize a proper binary node", () => {
    const binaryTreeNode = new BinaryTreeNode<number>(mockRootValue);

    expect(binaryTreeNode.value).toBe(mockRootValue);
    expect(binaryTreeNode.getHeight()).toBe(1);
    expect(binaryTreeNode.left).toBeUndefined();
    expect(binaryTreeNode.right).toBeUndefined();
    expect(binaryTreeNode.nodeCircle).toBeTruthy();
  });
  test("should be able to add a left child", () => {
    const binaryTreeNode = new BinaryTreeNode<number>(mockRootValue);
    binaryTreeNode.setLeft(new BinaryTreeNode(mockLeftChildValue));

    expect(binaryTreeNode.value).toBe(mockRootValue);
    expect(binaryTreeNode.getHeight()).toBe(2);
    expect(binaryTreeNode.left?.value).toBe(mockLeftChildValue);
    expect(binaryTreeNode.right).toBeUndefined();
    expect(binaryTreeNode.nodeCircle).toBeTruthy();
  });

  test("should be able to add a right child", () => {
    const binaryTreeNode = new BinaryTreeNode<number>(mockRootValue);
    binaryTreeNode.setRight(new BinaryTreeNode(mockRightChildValue));

    expect(binaryTreeNode.value).toBe(mockRootValue);
    expect(binaryTreeNode.getHeight()).toBe(2);
    expect(binaryTreeNode.right?.value).toBe(mockRightChildValue);
    expect(binaryTreeNode.left).toBeUndefined();
    expect(binaryTreeNode.nodeCircle).toBeTruthy();
  });
});
