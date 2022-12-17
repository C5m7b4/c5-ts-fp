import { RadixSort } from "../../SimpleImplementations/RadixSort";

describe("radix sort", () => {
  test("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];

    expect(RadixSort(nums)).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  test.skip("should sort 99 random numbers correcly", () => {
    const fill = 99;
    const nums = new Array(fill)
      // @ts-ignore
      .fill()
      .map(() => Math.floor(Math.random() * 500000));

    const ans = RadixSort(nums);
    console.log(ans);
    expect(ans).toEqual(nums.sort());
  });
});
