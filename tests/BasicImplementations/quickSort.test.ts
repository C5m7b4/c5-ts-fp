import { QuickSort } from "../../SimpleImplementations/QuickSort";

describe("quickSort", () => {
  test("should sort an array of numbers", () => {
    const arr = [6, 3, 1, 7, 2, 5, 4];
    expect(QuickSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  test("should not mutate the original array", () => {
    const arr = [6, 3, 1, 7, 2, 5, 4];
    expect(QuickSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(arr).toEqual([6, 3, 1, 7, 2, 5, 4]);
  });
});
