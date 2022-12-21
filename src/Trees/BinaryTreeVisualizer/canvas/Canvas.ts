import ColorGenerator from "../helpers/ColorGenerator";
import getRgbString from "../utils/getRgbString";
import { GetColorCallback } from "./types";

class CanvasComponent {
  private $el: HTMLCanvasElement;
  private $hitEl: HTMLCanvasElement;
  private colorGenerator: ColorGenerator;
  private currentHoveringColor = "";
  private onHoverCB?: (event: MouseEvent) => void;
  private onClickCB?: (event: MouseEvent) => void;

  constructor($el: HTMLCanvasElement) {
    const $hitEl = document.createElement("canvas");

    this.$el = $el;
    this.$hitEl = $hitEl;
    this.colorGenerator = new ColorGenerator();
  }

  clearCanvas() {
    const { height, width } = this.$el;
    this.getContext().clearRect(0, 0, width, height);
  }

  setMaxWidthAndHeight(height: number, width: number) {
    this.$hitEl.height = this.$el.height = height;
    this.$hitEl.width = this.$el.width = width;
  }

  getHitContext(): CanvasRenderingContext2D {
    const ctx = this.$hitEl.getContext("2d");
    if (!ctx) {
      throw new Error("Cannot get 2d context");
      // console.log("Cannot get 2d context");
      // // @ts-ignore
      // return;
    }
    return ctx;
  }

  getContext(): CanvasRenderingContext2D {
    const ctx = this.$el.getContext("2d");
    if (!ctx) {
      throw new Error("Cannot get 2d context");
      // console.log("Cannot get 2d context");
      // // @ts-ignore
      // return;
    }
    return ctx;
  }

  getNextColor() {
    return this.colorGenerator.getNextColor();
  }

  onHover(cb: GetColorCallback) {
    if (this.onHoverCB) {
      this.$el.removeEventListener("mousemove", this.onHoverCB);
    }

    this.onHoverCB = (event: MouseEvent) => {
      const { pageX, pageY } = event;
      const { data: pixel } = this.getHitContext().getImageData(
        pageX - this.$el.offsetLeft,
        pageY - this.$el.offsetTop,
        1,
        1
      );

      const color = getRgbString(pixel[0], pixel[1], pixel[2]);
      if (this.currentHoveringColor !== color) {
        this.currentHoveringColor = color;
        cb(color);
      }
    };
    this.$el.addEventListener("mousemove", this.onHoverCB);
  }

  onClick(cb: GetColorCallback) {
    if (this.onClickCB) {
      this.$el.removeEventListener("click", this.onClickCB);
    }

    this.onClickCB = (event: MouseEvent) => {
      const { pageX, pageY } = event;
      console.log(pageX, pageY);
      const { data: pixel } = this.getHitContext().getImageData(
        pageX - this.$el.offsetLeft,
        pageY - this.$el.offsetTop,
        1,
        1
      );
      cb(getRgbString(pixel[0], pixel[1], pixel[2]));
    };
    this.$el.addEventListener("click", this.onClickCB);
  }
}

export default CanvasComponent;
