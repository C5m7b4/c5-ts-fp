import { BubbleSort } from "../../SimpleImplementations/BubbleSort";

describe("simple bubble sort", () => {
  test("should sort an array of numbers", () => {
    const arr = [5, 2, 8, 1, 6];
    expect(BubbleSort(arr)).toEqual([1, 2, 5, 6, 8]);
  });
  test("should not mutate the original array", () => {
    const arr = [5, 2, 8, 1, 6];
    BubbleSort(arr);
    expect(arr).toEqual([5, 2, 8, 1, 6]);
  });
});
