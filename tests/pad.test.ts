import { pad } from "../src";

describe("pad", () => {
  test("should handle numeric input", () => {
    expect(pad(9)).toEqual(9);
  });
  test("should handle string for desiredLength", () => {
    //@ts-ignore
    expect(pad("ss", "ss")).toEqual("ss");
  });
  test("should handle non string padChar", () => {
    expect(pad("ss", 5, 5)).toEqual("ss");
  });
  test("should handle left padding", () => {
    expect(pad("ss", 4, "0")).toEqual("00ss");
  });
  test("should handle pad right", () => {
    expect(pad("ss", 4, "0", "right")).toEqual("ss00");
  });
});
