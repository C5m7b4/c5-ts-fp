import { Queue } from "../src";

describe("queue", () => {
  test("should return the correct size", () => {
    const queue = new Queue<string>();
    queue.enqueue("a");
    queue.enqueue("b");
    expect(queue.size()).toEqual(2);
  });
  test("should dequeue properly", () => {
    const queue = new Queue<string>();
    queue.enqueue("a");
    queue.dequeue();
    expect(queue.size()).toEqual(0);
  });
  test("should complain about too many items", () => {
    const queue = new Queue<string>(2);
    try {
      queue.enqueue("a");
      queue.enqueue("b");
      queue.enqueue("c");
      queue.enqueue("d");
    } catch (error) {}
    expect(queue.size()).toEqual(2);
  });
});
