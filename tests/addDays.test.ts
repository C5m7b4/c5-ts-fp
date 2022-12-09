import { addDays, formatDate } from "../src";

describe("addDays", () => {
  test("should add days from string", () => {
    const newDate = addDays("1/1/2022", 5);
    expect(formatDate(newDate)).toEqual("1/6/2022");
  });
  test("should handle undefined", () => {
    // @ts-ignore
    const newDate = addDays("undefined", 5);
    const futureDate = addDays(new Date(), 5);
    expect(formatDate(newDate)).toEqual("");
  });
  test("should handle null", () => {
    // @ts-ignore
    const newDate = addDays(null, 5);
    const futureDate = addDays(new Date(), 5);
    expect(formatDate(newDate)).toEqual(formatDate(futureDate));
  });
});
