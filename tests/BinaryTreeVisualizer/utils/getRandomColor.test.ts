import getRandomColor from "../../../src/Trees/BinaryTreeVisualizer/utils/getRandomColor";

describe("getRandomColor tests", () => {
  test("should get random color from color array", () => {
    const color = getRandomColor();
    expect(color).toStrictEqual({
      bgColor: "#fff2e0",
      borderColor: "#f56042",
    });
  });
});
