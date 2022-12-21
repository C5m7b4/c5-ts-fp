import { VisualizationType } from "../enums/VisualizationType";

export type HorizontalStartAndEndInput = {
  xStart: number;
  xEnd: number;
};

export type VerticalStartAndEndInput = {
  yStart: number;
  yEnd: number;
};

export type LeftAndRightSpacing = {
  left: number;
  right: number;
};

export type IndividualInputOptions = {
  maxWidth: number;
  maxHeight: number;
  highlightMode?: boolean;
};

export type MainInputOptions = {
  type: VisualizationType;
  maxWidth: number;
  maxHeight: number;
};

export type GetColorCallback = (color: string) => any;

export type PathArray = Array<"left" | "right">;
