import { compose } from "../src";

const addOne = (x) => x.map((y) => y + 1);
const addTwo = (x) => x.map((y) => y + 2);
const addThree = (x) => x.map((y) => y + 1);

const arr = [1, 2, 3, 4, 5, 6];

describe("compose", () => {
  test("should return an array of composed numbers", () => {
    const result = compose(addOne, addTwo);
    expect(result(arr)).toEqual([4, 5, 6, 7, 8, 9]);
  });
});
