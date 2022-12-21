import theme, {
  setTheme,
} from "../../../src/Trees/BinaryTreeVisualizer/config/theme";

describe("theme tests", () => {
  test("should be able to set radius", () => {
    const mockValue = 30;
    setTheme({
      radius: mockValue,
    });

    expect(theme.radius).toBe(mockValue);
  });

  test("should be able to set leaf node spacing", () => {
    const mockValue = 200;
    setTheme({
      leafNodeSpacing: mockValue,
    });

    expect(theme.leafNodeSpacing).toBe(mockValue);
  });

  test("should be able to set line height", () => {
    const mockValue = 200;
    setTheme({
      lineHeight: mockValue,
    });

    expect(theme.lineHeight).toBe(mockValue);
  });

  test("should be able to set text font", () => {
    const mockValue = "mock-font";
    setTheme({
      textFont: mockValue,
    });

    expect(theme.textFont).toBe(mockValue);
  });

  test("should be able to set stroke color", () => {
    const mockValue = "mock-stroke-color";
    setTheme({
      strokeColor: mockValue,
    });

    expect(theme.strokeColor).toBe(mockValue);
  });

  test("should be able to set color array", () => {
    const mockValue = [
      { bgColor: "mock-color-1", borderColor: "mock-color-1" },
      { bgColor: "mock-color-2", borderColor: "mock-color-2" },
    ];
    setTheme({
      colorArray: mockValue,
    });

    expect(theme.colorArray).toStrictEqual(mockValue);
  });
});
