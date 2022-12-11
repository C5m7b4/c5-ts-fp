import { tree, tree2 } from "./testTree";
import { compareBinaryTries } from "../src";

describe("compareBinaryTrees", () => {
  test("should compare two trees that are equal", () => {
    expect(compareBinaryTries(tree, tree)).toBeTruthy();
  });
  test("should compare two trees that are not equal", () => {
    expect(compareBinaryTries(tree, tree2)).toBeFalsy();
  });
});
