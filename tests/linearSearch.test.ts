import { linearSearch } from "../src";
import { data } from "./data";

describe("linearSearch", () => {
  test("should find a value in an array of numbers", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = linearSearch<number>(arr, 4);
    expect(result).toBeTruthy();
  });
  test("should not find a value in an array of numbers", () => {
    const arr = [1, 2, 4, 5, 6, 7];
    const result = linearSearch<number>(arr, 3);
    expect(result).toBeFalsy();
  });
  test("should find an object in an array of objects", () => {
    const result = linearSearch(data, 2, "id");
    expect(result).toBeDefined();
    expect(result).toEqual({
      id: 2,
      upc: "2",
      description: "pepsi",
      price: 2.45,
      dept: 1,
      category: 1,
      vendor: 1,
    });
  });
  test("expect not to find an object in an array of objects", () => {
    const result = linearSearch(data, 45, "id");
    expect(result).toBeNull();
  });
  test("expect to find a string in an array of strings", () => {
    const arr = ["one", "two", "three", "four"];
    const result = linearSearch(arr, "two");
    expect(result).toEqual("two");
  });
  test("shouldnt find a string in an array of strings", () => {
    const arr = ["one", "two", "three", "four"];
    const result = linearSearch(arr, "five");
    expect(result).toBeNull();
  });
});
