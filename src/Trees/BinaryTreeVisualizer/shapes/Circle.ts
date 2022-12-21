import { CanvasComponent } from "../canvas";
import theme from "../config/theme";
import { CircleColorSettings } from "../config/types";
import { RadiusSettings } from "./types";

const growthRate = 0.3;

class Circle {
  private radiusSettings: RadiusSettings;
  private colorId = "";
  private colorSettings: CircleColorSettings;
  private value: string;
  private x = -1;
  private y = -1;

  constructor(
    value: string,
    radius: number,
    colorSettings: CircleColorSettings
  ) {
    this.value = value;
    this.colorSettings = colorSettings;
    this.radiusSettings = {
      currentRadius: radius,
      originalRadius: radius,
      maxRadius: radius * theme.growthAndShrinkTimes,
      minRadius: radius / theme.growthAndShrinkTimes,
    };
  }

  private drawCircle(
    ctx: CanvasRenderingContext2D,
    radius: number,
    color: string
  ) {
    const { x, y } = this;

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
  }

  private drawBorder(ctx: CanvasRenderingContext2D) {
    const {
      x,
      y,
      colorSettings,
      radiusSettings: { currentRadius: radius },
    } = this;
    const { borderColor } = colorSettings;

    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = borderColor;
    ctx.stroke();
  }

  private writeText(ctx: CanvasRenderingContext2D) {
    const { x, y, value, colorSettings } = this;
    const { borderColor } = colorSettings;

    const fontSize = `${theme.fontSize}pt`;
    const ySpacing = theme.fontSize / 2;

    ctx.fillStyle = borderColor;
    ctx.font = `${fontSize} ${theme.textFont}`;
    ctx.textAlign = "center";
    ctx.fillText(value, x, y + ySpacing);
  }

  getRadius() {
    const {
      radiusSettings: { currentRadius: radius },
    } = this;
    return radius;
  }

  grow(maxRadius = this.radiusSettings.maxRadius) {
    const {
      radiusSettings: { currentRadius },
    } = this;

    if (currentRadius < maxRadius) {
      const originalIncreasedRadius = currentRadius + growthRate;
      this.radiusSettings.currentRadius =
        originalIncreasedRadius > maxRadius
          ? maxRadius
          : originalIncreasedRadius;
      return true;
    }
    return false;
  }

  shrink(minRadius = this.radiusSettings.minRadius) {
    const {
      radiusSettings: { currentRadius },
    } = this;

    if (currentRadius > minRadius) {
      const originalDecreasedRadius = currentRadius - growthRate;
      this.radiusSettings.currentRadius =
        originalDecreasedRadius < minRadius
          ? minRadius
          : originalDecreasedRadius;
      return true;
    }
    return false;
  }

  restoreCircle() {
    const {
      radiusSettings: { currentRadius, originalRadius },
    } = this;

    if (currentRadius > originalRadius) {
      return this.shrink(originalRadius);
    }

    if (currentRadius < originalRadius) {
      return this.grow(originalRadius);
    }

    return false;
  }

  setColorId(colorId: string) {
    this.colorId = colorId;
  }

  setCoordinates(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw(comp: CanvasComponent) {
    const {
      radiusSettings: { currentRadius: radius },
      colorSettings: { bgColor },
    } = this;

    this.colorId = this.colorId ? this.colorId : comp.getNextColor();
    this.drawCircle(comp.getContext(), radius, bgColor);
    this.drawCircle(comp.getHitContext(), radius, this.colorId);

    this.drawBorder(comp.getContext());

    this.writeText(comp.getContext());

    return this.colorId;
  }
}

export default Circle;
