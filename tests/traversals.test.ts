import { tree } from "./testTree";
import { PreOrderSearch } from "../src";
import { InOrderSearch } from "../src";
import { PostOrderSearch } from "../src";

describe("preOrderSearch", () => {
  test("should pre order a tree data structure", () => {
    expect(PreOrderSearch(tree)).toEqual([
      20, 10, 5, 7, 15, 50, 30, 29, 45, 100,
    ]);
  });
});

describe("inOrderSearch", () => {
  test("should perform an in order search of a tree data structure", () => {
    expect(InOrderSearch(tree)).toEqual([
      5, 7, 10, 15, 20, 29, 30, 45, 50, 100,
    ]);
  });
});

describe("postOrderSearch", () => {
  test("should perform post order search on a tree data structure", () => {
    expect(PostOrderSearch(tree)).toEqual([
      7, 5, 15, 10, 29, 45, 30, 100, 50, 20,
    ]);
  });
});
