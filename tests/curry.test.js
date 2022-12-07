import { curry } from "../src";
import { sum } from "../src/sum";

describe("curry", () => {
  test("should run a curried function", () => {
    const curriedSum = curry(sum);
    expect(curriedSum(4)(5)).toEqual(9);
  });
});
