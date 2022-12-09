import { Box, trace, prop, swap, isValid } from "../src";
import { append } from "../src";
import { data } from "./data";

describe("append", () => {
  test("should append two strings", () => {
    expect(append("thing")("some")).toEqual("something");
  });
});

describe("isValid", () => {
  test("should return false for undefined values", () => {
    // @ts-ignore
    expect(isValid(undefined)).toBeFalsy();
  });
  test("should return false for null", () => {
    // @ts-ignore
    expect(isValid(null)).toBeFalsy();
  });
  test("should return false for an empty object", () => {
    expect(isValid({})).toBeFalsy();
  });
  test("should return false for zero", () => {
    expect(isValid(0)).toBeFalsy();
  });
  test("should return false for an empty string", () => {
    expect(isValid("")).toBeFalsy();
  });
  test("should return true for a number that is not zero", () => {
    expect(isValid(5)).toBeTruthy();
  });
  test("should return true for a valid string", () => {
    expect(isValid("hello")).toBeTruthy();
  });
  test("should return true for a valid object", () => {
    const obj = {
      id: 1,
      name: "mike",
    };
    expect(isValid(obj)).toBeTruthy();
  });
  test("should return true for an empty array", () => {
    expect(isValid([])).toBeTruthy();
  });
  test("should return true for an array with some values", () => {
    expect(isValid([1, 2, 3])).toBeTruthy();
  });
  test("should return true for a valid date", () => {
    const dte = new Date("1/1/2022");
    expect(isValid(dte)).toBeTruthy();
  });
});

describe("prop", () => {
  test("should get a property from an object", () => {
    const obj = {
      id: 1,
      name: "mike",
    };
    expect(prop("name")(obj)).toEqual("mike");
  });
});

describe("swap", () => {
  test("should swap two items in an array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = swap(arr, 2);
    expect(result).toEqual([1, 2, 4, 3, 5]);
  });
});

describe("trace", () => {
  test("should log out results", () => {
    const items = Box(data)
      .map((x) => x.filter((i) => i.dept === 1))
      .map((x) => trace("after dept")(x))
      .map((x) => x.filter((i) => i.vendor === 1))
      .map((x) => x.filter((i) => i.category === 1))
      .map((x) => x.filter((i) => i.price > 2.0))
      .map((x) => x.filter((i) => i.price < 3.0))
      .fold((x) => x);

    expect(items).toEqual([
      {
        category: 1,
        dept: 1,
        description: "pepsi",
        id: 2,
        price: 2.45,
        upc: "2",
        vendor: 1,
      },
      {
        category: 1,
        dept: 1,
        description: "mt dew",
        id: 3,
        price: 2.65,
        upc: "3",
        vendor: 1,
      },
    ]);
  });
});
