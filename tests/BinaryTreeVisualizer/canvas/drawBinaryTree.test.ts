/**
 * @jest-environment jsdom
 */
import drawBinaryTree from "../../../src/Trees/BinaryTreeVisualizer/canvas/drawBinaryTree";
import BinaryTreeNode from "../../../src/Trees/BinaryTreeVisualizer/tree/BinaryTreeNode";
import drawSimpleBinaryTree from "../../../src/Trees/BinaryTreeVisualizer/canvas/drawSimpleBinaryTree";
import drawPrettyBinaryTree from "../../../src/Trees/BinaryTreeVisualizer/canvas/drawPrettyBinaryTree";
import { VisualizationType } from "../../../src/Trees/BinaryTreeVisualizer/enums/VisualizationType";
import drawExpandableBinaryTree from "../../../src/Trees/BinaryTreeVisualizer/canvas/drawExpandableBinaryTree";

// make one change to get build to work
jest.mock(
  "../../../src/Trees/BinaryTreeVisualizer/canvas/drawSimpleBinaryTree"
);
jest.mock(
  "../../../src/Trees/BinaryTreeVisualizer/canvas/drawPrettyBinaryTree"
);
jest.mock(
  "../../../src/Trees/BinaryTreeVisualizer/canvas/drawExpandableBinaryTree"
);

describe("drawBinaryTree tests", () => {
  const mockBinaryTreeNode = new BinaryTreeNode<number>(30);
  const mockCanvas = document.createElement("canvas");
  const mockMaxWidth = 1920;
  const mockMaxHeight = 1080;

  test("should be able to draw a simple binary tree", () => {
    drawBinaryTree(mockBinaryTreeNode, mockCanvas);
    expect(drawSimpleBinaryTree).toBeCalled();
  });

  test("should be able to draw a pretty binary tree", () => {
    drawBinaryTree(mockBinaryTreeNode, mockCanvas, {
      type: VisualizationType.PRETTY,
      maxHeight: mockMaxHeight,
      maxWidth: mockMaxWidth,
    });
    expect(drawPrettyBinaryTree).toBeCalled();
  });

  test("should be able to draw expandable tree", () => {
    drawBinaryTree(mockBinaryTreeNode, mockCanvas, {
      type: VisualizationType.EXPANDABLE,
    });
    expect(drawExpandableBinaryTree).toBeCalled();
  });

  test("should be able to draw highlight tree", () => {
    drawBinaryTree(mockBinaryTreeNode, mockCanvas, {
      type: VisualizationType.HIGHLIGHT,
    });
    expect(drawPrettyBinaryTree).toBeCalled();
  });
});
