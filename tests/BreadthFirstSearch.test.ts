import { tree } from "./testTree";
import { BreadthFirstSearch } from "../src";

describe("breadthFirstSearch", () => {
  test("bt bfs", () => {
    expect(BreadthFirstSearch(tree, 7)).toEqual({
      value: 7,
      left: null,
      right: null,
    });
    expect(BreadthFirstSearch(tree, 45)).toEqual({
      left: null,
      right: null,
      value: 45,
    });
    expect(BreadthFirstSearch(tree, 65)).toBeUndefined();
  });
});
