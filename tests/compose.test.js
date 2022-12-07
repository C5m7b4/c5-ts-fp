import { compose } from "../src";

const addOne = (x) => x.map((y) => y + 1);
const addTwo = (x) => x.map((y) => y + 2);
const addThree = (x) => x.map((y) => y + 3);

const arr = [1, 2, 3, 4, 5, 6];

describe("compose", () => {
  test("should return an array of composed numbers", () => {
    const result = compose(addOne, addTwo);
    expect(result(arr)).toEqual([4, 5, 6, 7, 8, 9]);
    const result1 = compose(addOne, addTwo, addThree);
    expect(result1(arr)).toEqual([7, 8, 9, 10, 11, 12]);
    const result2 = compose(addOne, addTwo)(arr);
    expect(result2).toEqual([4, 5, 6, 7, 8, 9]);
    const result3 = compose(addOne, addTwo, addThree)(arr);
    expect(result3).toEqual([7, 8, 9, 10, 11, 12]);
  });
});
