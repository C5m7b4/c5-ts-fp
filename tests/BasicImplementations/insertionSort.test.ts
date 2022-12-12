import { InsertionSort } from "../../SimpleImplementations/InsertionSort";

describe("insertion sort", () => {
  test("should sort an array of numbers", () => {
    const arr = [5, 2, 8, 4, 3, 1];
    expect(InsertionSort(arr)).toEqual([1, 2, 3, 4, 5, 8]);
  });
  test("should not mutate the original array", () => {
    const arr = [5, 2, 8, 4, 3, 1];
    expect(InsertionSort(arr)).toEqual([1, 2, 3, 4, 5, 8]);
    expect(arr).toEqual([5, 2, 8, 4, 3, 1]);
  });
});
