// import * as themeTypes from '../../../src/Trees/BinaryTreeVisualizer/config/types'

import theme from "../../../src/Trees/BinaryTreeVisualizer/config/theme";
import {
  getCanvasHeightFromTreeHeight,
  getCanvasWidthFromMaxNodeSpacing,
  getMaxLeafNodesFromHeight,
  getXPositionFromGivenHorizontalNodePosition,
  getRequiredAndActualHeightAndWidth,
} from "../../../src/Trees/BinaryTreeVisualizer/utils/tree";

describe("Tree Utils test", () => {
  describe("getMaxLeafNodesFromHeight test", () => {
    test("should get max leaf nodes from height", () => {
      const mockTreeHeight = 12;
      const expectedResult = 2 ** 11;
      expect(getMaxLeafNodesFromHeight(mockTreeHeight)).toBe(expectedResult);
    });
  });

  describe("getCanvasWidthFromMaxNodeSpacing", () => {
    test("should get canvas width from the max leaf nodes", () => {
      const mockLeafNodes = 4;
      const expectedResult = 6 * theme.leafNodeSpacing;
      expect(getCanvasWidthFromMaxNodeSpacing(mockLeafNodes)).toBe(
        expectedResult
      );
    });
  });

  describe("getCanvasHeightFromTreeHeight", () => {
    test("should be able to get canvas height from tree height", () => {
      const mockTreeHeight = 12;
      const expectedResult = 12 * theme.lineHeight;
      expect(getCanvasHeightFromTreeHeight(mockTreeHeight)).toBe(
        expectedResult
      );
    });
  });

  describe("getXPositionFromGivenHorizontalNodePosition tests", () => {
    test(`should be able to get x position from given horizontal node position`, () => {
      const mockHorizontalNodePosition = 12;
      const expectedResult = 12 * theme.leafNodeSpacing;
      expect(
        getXPositionFromGivenHorizontalNodePosition(mockHorizontalNodePosition)
      ).toBe(expectedResult);
    });
  });

  describe("getRequiredAndActualHeightandWidth tests", () => {
    test(`should be able to get required and actual width and height 
    (when maxHeight and width is greater)`, () => {
      const mockMaxNodeSpacing = 12;
      const mockHeightOfTree = 10;
      const mockMaxHeigh = 1920;
      const mockMaxWidth = 1080;

      const {
        maxCanvasHeightRequired,
        maxCanvasWidthRequired,
        actualMaxHeight,
        actualMaxWidth,
      } = getRequiredAndActualHeightAndWidth(
        mockMaxNodeSpacing,
        mockHeightOfTree,
        mockMaxWidth,
        mockMaxHeigh
      );

      expect(maxCanvasHeightRequired).toBe(990);
      expect(maxCanvasWidthRequired).toBe(1050);
      expect(actualMaxHeight).toBe(1920);
      expect(actualMaxWidth).toBe(1080);
    });

    test(`should be able to get required and actual width and height 
    (when maxHeight and width is lesser)`, () => {
      const mockMaxNodeSpacing = 12;
      const mockHeightOfTree = 10;
      const mockMaxHeigh = 100;
      const mockMaxWidth = 200;

      const {
        maxCanvasHeightRequired,
        maxCanvasWidthRequired,
        actualMaxHeight,
        actualMaxWidth,
      } = getRequiredAndActualHeightAndWidth(
        mockMaxNodeSpacing,
        mockHeightOfTree,
        mockMaxWidth,
        mockMaxHeigh
      );

      expect(maxCanvasHeightRequired).toBe(990);
      expect(maxCanvasWidthRequired).toBe(1050);
      expect(actualMaxHeight).toBe(990);
      expect(actualMaxWidth).toBe(1050);
    });
  });
});
