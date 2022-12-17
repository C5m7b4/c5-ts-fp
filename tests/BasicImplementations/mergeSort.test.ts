import { MergeSort } from "../../SimpleImplementations/MergeSort";

describe("mergeSort", () => {
  test("should sort an array of numbers", () => {
    const arr = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    expect(MergeSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test("should not mutate the original array", () => {
    const arr = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    expect(MergeSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(arr).toEqual([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]);
  });
});
