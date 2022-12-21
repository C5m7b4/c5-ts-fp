import BinaryTreeNode from "../tree/BinaryTreeNode";
import { VisualizationType } from "../enums";
import drawSimpleBinaryTree from "./drawSimpleBinaryTree";

import { MainInputOptions } from "./types";
import CanvasComponent from "./Canvas";
import drawPrettyBinaryTree from "./drawPrettyBinaryTree";
import drawExpandableBinaryTree from "./drawExpandableBinaryTree";

const canvasMap: Map<HTMLCanvasElement, CanvasComponent> = new Map();

function drawBinaryTree(
  root: BinaryTreeNode<string | number>,
  canvasElement: HTMLCanvasElement,
  options: Partial<MainInputOptions> = {}
) {
  const {
    type = VisualizationType.SIMPLE,
    maxHeight = window.innerHeight,
    maxWidth = window.innerWidth,
  } = options;

  const canvasComponent =
    canvasMap.get(canvasElement) || new CanvasComponent(canvasElement);
  canvasMap.set(canvasElement, canvasComponent);

  switch (type) {
    case VisualizationType.PRETTY:
      drawPrettyBinaryTree(root, canvasComponent, {
        maxHeight,
        maxWidth,
      });
      break;
    case VisualizationType.EXPANDABLE:
      drawExpandableBinaryTree(root, canvasComponent, {
        maxHeight,
        maxWidth,
      });
      break;
    case VisualizationType.HIGHLIGHT:
      drawPrettyBinaryTree(root, canvasComponent, {
        maxHeight,
        maxWidth,
        highlightMode: true,
      });
      break;
    default:
      drawSimpleBinaryTree(root, canvasComponent, {
        maxHeight,
        maxWidth,
      });
      break;
  }
}

export default drawBinaryTree;
