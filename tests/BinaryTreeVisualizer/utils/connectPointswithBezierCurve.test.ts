/**
 * @jest-environment jsdom
 */
import CanvasComponent from "../../../src/Trees/BinaryTreeVisualizer/canvas/Canvas";
import connectPointsWithBezierCurve from "../../../src/Trees/BinaryTreeVisualizer/utils/connectPointsWithBezierCurve";
import BezierCurve from "../../../src/Trees/BinaryTreeVisualizer/strokes/BezierCurve";

jest.mock("../../../src/Trees/BinaryTreeVisualizer/strokes/BezierCurve");

describe("connectPointsWithBezierCurve tests", () => {
  const mockCanvas = document.createElement("canvas");
  const mockWidth = 1920;
  const mockHeight = 1080;
  const mockCanvasComponent = new CanvasComponent(mockCanvas);
  mockCanvasComponent.setMaxWidthAndHeight(mockHeight, mockWidth);
  const mockHorizontalConfig = {
    xStart: 100,
    xEnd: 200,
  };
  const mockVerticalConfig = {
    yStart: 200,
    yEnd: 300,
  };

  test("should be able to connect 2 points", () => {
    connectPointsWithBezierCurve(
      mockCanvasComponent,
      mockHorizontalConfig,
      mockVerticalConfig
    );

    expect(BezierCurve).toBeCalledTimes(1);
  });
});
