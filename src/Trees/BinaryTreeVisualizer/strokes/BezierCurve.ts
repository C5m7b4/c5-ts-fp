import { Point } from "../types/Point";

class BezierCurve {
  // x configs
  xStart: number;
  cp1x: number;
  cp2x: number;
  xEnd: number;

  // y configs
  yStart: number;
  cp1y: number;
  cp2y: number;
  yEnd: number;

  color: string;

  constructor(color: string, start: Point, cp1: Point, cp2: Point, end: Point) {
    const { x: xStart, y: yStart } = start;
    const { x: cp1x, y: cp1y } = cp1;
    const { x: cp2x, y: cp2y } = cp2;
    const { x: xEnd, y: yEnd } = end;

    this.color = color;
    this.xStart = xStart;
    this.yStart = yStart;
    this.cp1x = cp1x;
    this.cp1y = cp1y;
    this.cp2x = cp2x;
    this.cp2y = cp2y;
    this.xEnd = xEnd;
    this.yEnd = yEnd;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.xStart, this.yStart);
    ctx.strokeStyle = this.color;
    ctx.bezierCurveTo(
      this.cp1x,
      this.cp1y,
      this.cp2x,
      this.cp2y,
      this.xEnd,
      this.yEnd
    );
    ctx.stroke();
  }
}

export default BezierCurve;
