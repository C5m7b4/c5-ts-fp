import { sum, curriedSum } from "../src/sum";

describe("sum", () => {
  test("should add two numbers", () => {
    expect(sum(1, 3)).toEqual(4);
  });
  test("should calculate curriesSum", () => {
    expect(curriedSum(4)(5)).toEqual(9);
  });
});
