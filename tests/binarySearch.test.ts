import { binarySearch } from "../src";
import { data } from "./data";

describe("binarySearch", () => {
  test("should find a value in an array of numbers", () => {
    const arr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    // @ts-ignore
    const result = binarySearch<number>(arr, 7);
    expect(result).toEqual(7);
  });
  test("should not find a number in an array of numbers", () => {
    const arr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    // @ts-ignore
    const result = binarySearch<number>(arr, 45);
    expect(result).toBeNull();
  });
  test("should find an object in an array of objects by its id", () => {
    // @ts-ignore
    const result = binarySearch(data, 2, "id");
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
  test("should return null if it cant find an object by its id", () => {
    // @ts-ignore
    const result = binarySearch(data, 45, "id");
    expect(result).toBeNull();
  });
  // we cant run this test until we are able to sort, because binary search only works on sorted data
  // and our descriptions are  not sorted
  // test("should be able to find an object by its description", () => {
  //   // @ts-ignore
  //   const result = binarySearch(data, "pepsi", "description");
  //   console.log("result", result);
  //   expect(result).toEqual({
  //     id: 2,
  //     upc: "2",
  //     description: "pepsi",
  //     price: 2.45,
  //     dept: 1,
  //     category: 1,
  //     vendor: 1,
  //   });
  // });
});
