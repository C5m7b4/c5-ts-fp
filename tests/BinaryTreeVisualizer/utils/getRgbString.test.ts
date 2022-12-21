import getRgbString from "../../../src/Trees/BinaryTreeVisualizer/utils/getRgbString";

describe("getRgbString tests", () => {
  test("should be able to get rgb string", () => {
    const res = getRgbString(1, 2, 3);
    expect(res).toBe("rgb(1, 2, 3)");
  });
});
