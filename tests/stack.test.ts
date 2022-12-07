import { Stack } from "../src";

describe("stack", () => {
  test("should return proper size of the stack when 1 item is added", () => {
    const stack = new Stack<string>();
    stack.push("a");
    expect(stack.size()).toEqual(1);
    expect(stack.peek()).toEqual("a");
    stack.pop();
    expect(stack.size()).toEqual(0);
  });
  test("should test capacity", () => {
    const stack = new Stack<string>(2);
    try {
      stack.push("a");
      stack.push("b");
      stack.push("c");
    } catch (error) {}
    expect(stack.size()).toEqual(2);
  });
});
