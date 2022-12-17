import { LinkedList } from "../src";

describe("linkedlist", () => {
  const range = (length) =>
    // eslint-disable-next-line prefer-spread
    Array.apply(null, { length: length }).map(Number.call, Number);
  const abcRange = (length) =>
    range(length).map((num) => String.fromCharCode(97 + num));
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("constructor", () => {
    expect(list).toEqual(expect.any(LinkedList));
  });

  test("push", () => {
    abcRange(26).map((c) => list.push(c));
    expect(list.length).toEqual(26);
  });

  test("pop", () => {
    list.push(1);
    console.log("length", list.length);
    list.pop();
    list.push(5);
    list.push(6);
    list.push(7);
    list.pop();
    expect(list.length).toEqual(2);
    list.find(8);
    expect(list.length).toEqual(2);
  });
  test("find", () => {
    const result = list.find(2);
    expect(result).toBeNull();
  });
  test("get", () => {
    list.push(1);
    list.push(2);
    const result1 = list.get(1);
    expect(result1).toEqual(2);
    const result2 = list.get(2);
    expect(result2).toBeNull();
  });
  test("delete", () => {
    const result1 = list.delete(0);
    expect(result1).toBeNull();
    const result2 = list.delete(5);
    expect(result2).toBeNull();
    expect(list.length).toEqual(0);
    list.push(1);
    list.push(2);
    list.push(3);
    const result3 = list.delete(1);
    expect(result3).toEqual(2);
  });
});
