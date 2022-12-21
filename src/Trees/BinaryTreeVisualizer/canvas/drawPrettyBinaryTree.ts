import CanvasComponent from "./Canvas";
import theme from "../config/theme";
import { BinaryTreeNode } from "../tree";
import { Point } from "../types/Point";
import {
  getCanvasHeightFromTreeHeight,
  getRequiredAndActualHeightAndWidth,
  getXPositionFromGivenHorizontalNodePosition,
} from "../utils/tree";
import connectPointsWithBezierCurve from "../utils/connectPointsWithBezierCurve";
import { IndividualInputOptions, LeftAndRightSpacing } from "./types";

let animationFrameId: number;
let hoverColorId: string;
let spacingMap: Map<BinaryTreeNode<string | number>, LeftAndRightSpacing>;

function requestAnimationFrame(
  root: BinaryTreeNode<string | number>,
  canvasComponent: CanvasComponent,
  position: Point,
  highlightMode: boolean
) {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  animationFrameId = window.requestAnimationFrame(() => {
    canvasComponent.clearCanvas();
    const requireRedraw = recursivelyDrawNodes(
      root,
      canvasComponent,
      position,
      highlightMode
    );
    if (requireRedraw) {
      requestAnimationFrame(root, canvasComponent, position, highlightMode);
    }
  });
}

function drawSingleNode(
  node: BinaryTreeNode<string | number>,
  comp: CanvasComponent,
  position: Point,
  hightlightMode: boolean
) {
  const { x, y } = position;
  node.nodeCircle.setCoordinates(x, y);

  const colorId = node.nodeCircle.draw(comp);
  if (colorId === hoverColorId && hightlightMode) {
    return node.nodeCircle.grow();
  } else {
    return node.nodeCircle.restoreCircle();
  }
}

function recursivelyDrawNodes(
  root: BinaryTreeNode<string | number>,
  canvasComponent: CanvasComponent,
  position: Point,
  hightlightMode: boolean
): boolean {
  const { x: xPosition, y: yPosition } = position;

  let requireRedraw = drawSingleNode(
    root,
    canvasComponent,
    { x: xPosition, y: yPosition },
    hightlightMode
  );

  root.nodeCircle.setCoordinates(xPosition, yPosition);
  root.nodeCircle.draw(canvasComponent);

  const { left, right } = spacingMap.get(root)!;

  if (root.left) {
    const leftOfLeft = spacingMap.get(root.left)!.left;
    const childYPosition = yPosition + theme.lineHeight;
    const leftPosition = {
      x:
        xPosition -
        getXPositionFromGivenHorizontalNodePosition(left - leftOfLeft),
      y: childYPosition,
    };

    requireRedraw =
      recursivelyDrawNodes(
        root.left,
        canvasComponent,
        leftPosition,
        hightlightMode
      ) || requireRedraw;

    connectPointsWithBezierCurve(
      canvasComponent,
      {
        xStart: xPosition,
        xEnd: leftPosition.x,
      },
      {
        yStart: yPosition + root.nodeCircle.getRadius(),
        yEnd: childYPosition - root.left.nodeCircle.getRadius(),
      }
    );
  }

  //draw right child
  if (root.right) {
    const rightOfRight = spacingMap.get(root.right)!.right;
    const childYPosition = yPosition + theme.lineHeight;
    const rightPosition = {
      x:
        xPosition +
        getXPositionFromGivenHorizontalNodePosition(right - rightOfRight),
      y: childYPosition,
    };

    requireRedraw =
      recursivelyDrawNodes(
        root.right,
        canvasComponent,
        rightPosition,
        hightlightMode
      ) || requireRedraw;

    connectPointsWithBezierCurve(
      canvasComponent,
      {
        xStart: xPosition,
        xEnd: rightPosition.x,
      },
      {
        yStart: yPosition + root.nodeCircle.getRadius(),
        yEnd: childYPosition - root.right.nodeCircle.getRadius(),
      }
    );
  }

  return requireRedraw;
}

function calculateSpaceMapRecursively(
  root: BinaryTreeNode<string | number>
): number {
  const left = root.left ? calculateSpaceMapRecursively(root.left) + 0.5 : 0;
  const right = root.right ? calculateSpaceMapRecursively(root.right) + 0.5 : 0;
  spacingMap.set(root, { left, right });
  return left + right;
}

function drawPrettyBinaryTree(
  root: BinaryTreeNode<string | number>,
  canvasComponent: CanvasComponent,
  options: IndividualInputOptions
) {
  spacingMap = new Map();
  const maxNodeSpacing = calculateSpaceMapRecursively(root);
  const heightOfTree = root.getHeight();
  const { maxHeight, maxWidth, highlightMode } = options;

  const { maxCanvasWidthRequired, actualMaxHeight, actualMaxWidth } =
    getRequiredAndActualHeightAndWidth(
      maxNodeSpacing,
      heightOfTree,
      maxWidth,
      maxHeight
    );

  const left = spacingMap.get(root)!.left;
  const midPointInCanvas = actualMaxWidth / 2;
  const xStart = midPointInCanvas - maxCanvasWidthRequired / 2;

  canvasComponent.setMaxWidthAndHeight(actualMaxHeight, actualMaxWidth);

  canvasComponent.onHover((color) => {
    hoverColorId = color;
    requestAnimationFrame(
      root,
      canvasComponent,
      {
        x: xStart + getXPositionFromGivenHorizontalNodePosition(left + 1),
        y: getCanvasHeightFromTreeHeight(0.5),
      },
      Boolean(highlightMode)
    );
  });
}

export default drawPrettyBinaryTree;
