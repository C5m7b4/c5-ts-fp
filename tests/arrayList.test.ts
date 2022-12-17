import { ArrayList } from "../src";

describe("arraylist", () => {
  const range = (length) =>
    // eslint-disable-next-line prefer-spread
    Array.apply(null, { length: length }).map(Number.call, Number);

  const abcRange = (length) =>
    range(length).map((num) => String.fromCharCode(97 + num));
  let list;

  beforeEach(() => {
    list = new ArrayList();
  });
  test("constructor", () => {
    expect(list).toEqual(expect.any(ArrayList));
  });
  test("push", () => {
    abcRange(26).map((character) => list.push(character));
    expect(list.length).toEqual(26);
  });
  test("pop", () => {
    abcRange(13).map((character) => list.push(character));
    expect(list.length).toEqual(13);
    range(10).map(() => list.pop());
    expect(list.length).toEqual(3);
    expect(list.pop()).toEqual("c");
  });
  test("get", () => {
    list.push("first");
    expect(list.get(0)).toEqual("first");
    list.push("second");
    expect(list.get(1)).toEqual("second");
    expect(list.get(0)).toEqual("first");
    abcRange(26).map((character) => list.push(character));
    expect(list.get(27)).toEqual("z");
    expect(list.get(0)).toEqual("first");
    expect(list.get(9)).toEqual("h");
    list.pop();
    expect(list.get(list.length - 1)).toEqual("y");
  });

  test("delete", () => {
    abcRange(26).map((character) => list.push(character));
    list.delete(13);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual("m");
    expect(list.get(13)).toEqual("o");
    list.delete(0);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual("b");
  });
  test("should pop off an empty arraylist", () => {
    const newList = new ArrayList();
    newList.pop();
    expect(newList.length).toEqual(0);
  });
  test("should perform get on item that does not exist", () => {
    abcRange(26).map((c) => list.push(c));
    const result = list.get(50);
    expect(result).toBeNull();
  });
});
