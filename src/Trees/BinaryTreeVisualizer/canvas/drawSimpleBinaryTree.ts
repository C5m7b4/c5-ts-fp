import CanvasComponent from "./Canvas";
import BinaryTreeNode from "../tree/BinaryTreeNode";
import theme from "../config/theme";
import {
  getCanvasHeightFromTreeHeight,
  getMaxLeafNodesFromHeight,
  getRequiredAndActualHeightAndWidth,
} from "../utils/tree";
import { HorizontalStartAndEndInput, IndividualInputOptions } from "./types";
import connectPointsWithBezierCurve from "../utils/connectPointsWithBezierCurve";

function recursivelyDrawNodes(
  root: BinaryTreeNode<string | number>,
  canvasComponent: CanvasComponent,
  currentLine: number,
  horizontalConfig: HorizontalStartAndEndInput
) {
  const { xStart, xEnd } = horizontalConfig;
  const xPosition = (xStart + xEnd) / 2;

  const yPosition = currentLine * theme.lineHeight;

  root.nodeCircle.setCoordinates(xPosition, yPosition);
  root.nodeCircle.draw(canvasComponent);

  if (root.left) {
    recursivelyDrawNodes(root.left, canvasComponent, currentLine + 1, {
      xStart,
      xEnd: xPosition,
    });
    connectPointsWithBezierCurve(
      canvasComponent,
      {
        xStart: xPosition,
        xEnd: (xStart + xPosition) / 2,
      },
      {
        yStart: yPosition + theme.radius,
        yEnd: getCanvasHeightFromTreeHeight(currentLine + 1) - theme.radius,
      }
    );
  }

  if (root.right) {
    recursivelyDrawNodes(root.right, canvasComponent, currentLine + 1, {
      xStart: xPosition,
      xEnd,
    });
    connectPointsWithBezierCurve(
      canvasComponent,
      {
        xStart: xPosition,
        xEnd: (xPosition + xEnd) / 2,
      },
      {
        yStart: yPosition + theme.radius,
        yEnd: getCanvasHeightFromTreeHeight(currentLine + 1) - theme.radius,
      }
    );
  }
}

function drawSimpleBinaryTree(
  root: BinaryTreeNode<string | number>,
  canvasComponent: CanvasComponent,
  options: IndividualInputOptions
) {
  const heightOfTree = root.getHeight();
  const maxNumberOfLeafNodes = getMaxLeafNodesFromHeight(heightOfTree);
  const { maxHeight, maxWidth } = options;

  const { maxCanvasWidthRequired, actualMaxHeight, actualMaxWidth } =
    getRequiredAndActualHeightAndWidth(
      maxNumberOfLeafNodes,
      heightOfTree,
      maxWidth,
      maxHeight
    );

  const midPointInCanvas = actualMaxWidth / 2;
  const xStart =
    midPointInCanvas - maxCanvasWidthRequired / 2 + theme.leafNodeSpacing;
  const xEnd =
    midPointInCanvas + maxCanvasWidthRequired / 2 - theme.leafNodeSpacing;

  canvasComponent.setMaxWidthAndHeight(actualMaxHeight, actualMaxWidth);

  recursivelyDrawNodes(root, canvasComponent, 0.5, { xStart, xEnd });
}

export default drawSimpleBinaryTree;
