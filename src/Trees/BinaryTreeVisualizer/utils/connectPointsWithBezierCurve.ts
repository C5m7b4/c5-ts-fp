import { CanvasComponent } from "../canvas";
import theme from "../config/theme";
import BezierCurve from "../strokes/BezierCurve";
import {
  HorizontalStartAndEndInput,
  VerticalStartAndEndInput,
} from "../canvas/types";

function connectPointsWithBezierCurve(
  canvasComponent: CanvasComponent,
  horizontalConfig: HorizontalStartAndEndInput,
  verticalConfig: VerticalStartAndEndInput
) {
  const { xStart, xEnd } = horizontalConfig;
  const { yStart, yEnd } = verticalConfig;
  const halfY = (yStart + yEnd) / 2;
  const halfX = (xStart + xEnd) / 2;

  const berzierCurve = new BezierCurve(
    theme.strokeColor,
    { x: xStart, y: yStart },
    { x: halfX, y: halfY },
    { x: xEnd, y: halfY },
    { x: xEnd, y: yEnd }
  );
  berzierCurve.draw(canvasComponent.getContext());
}

export default connectPointsWithBezierCurve;
