import theme from "../config/theme";

export function getMaxLeafNodesFromHeight(treeHeight: number) {
  return 2 ** (treeHeight - 1);
}

export function getCanvasWidthFromMaxNodeSpacing(maxNodes: number) {
  return (maxNodes + 2) * theme.leafNodeSpacing;
}

export function getXPositionFromGivenHorizontalNodePosition(nodes: number) {
  return nodes * theme.leafNodeSpacing;
}

export function getCanvasHeightFromTreeHeight(treeHeight: number) {
  return treeHeight * theme.lineHeight;
}

export function getRequiredAndActualHeightAndWidth(
  maxNodeSpacing: number,
  heightOfTree: number,
  maxWidth: number,
  maxHeight: number
) {
  const maxCanvasWidthRequired =
    getCanvasWidthFromMaxNodeSpacing(maxNodeSpacing);
  const maxCanvasHeightRequired = getCanvasHeightFromTreeHeight(
    heightOfTree + 1
  );

  const actualMaxWidth =
    maxCanvasWidthRequired > maxWidth ? maxCanvasWidthRequired : maxWidth;
  const actualMaxHeight =
    maxCanvasHeightRequired > maxHeight ? maxCanvasHeightRequired : maxHeight;

  return {
    maxCanvasHeightRequired,
    maxCanvasWidthRequired,
    actualMaxHeight,
    actualMaxWidth,
  };
}
