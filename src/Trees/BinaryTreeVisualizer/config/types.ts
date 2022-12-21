export type CircleColorSettings = {
  borderColor: string;
  bgColor: string;
};

export type Theme = {
  radius: number;
  growthAndShrinkTimes: number;
  leafNodeSpacing: number;
  fontSize: number;
  lineHeight: number;
  textFont: string;
  strokeColor: string;
  colorArray: CircleColorSettings[];
};
