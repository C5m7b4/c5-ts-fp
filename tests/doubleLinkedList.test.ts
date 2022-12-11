import { DoublyLinkedList } from "../src";

interface Person {
  id: number;
  name: string;
}

describe("doubleLinkedList", () => {
  test("should show links using only numbers", () => {
    const list = new DoublyLinkedList<number>();

    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(2)).toEqual(9);
    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);
    expect(list.removeAt(3)).toBeUndefined();

    list.clear();
    expect(list.length).toEqual(0);
    expect(list.head).toBeUndefined();
    expect(list.tail).toBeUndefined();

    list.append(5);
    list.prepend(2);

    expect(list.head?.value).toEqual(2);
    expect(list.tail?.value).toEqual(5);

    list.clear();
    list.prepend(2);
    expect(list.length).toEqual(1);
    expect(list.head?.value).toEqual(2);
    expect(list.tail?.value).toEqual(2);

    expect(() => list.insertAt(5, 2)).toThrow(
      "you are trying to insert at a position that is greater that the lists length"
    );

    list.insertAt(5, 1);
    expect(list.get(1)).toEqual(5);

    list.insertAt(7, 0);
    expect(list.head?.value).toEqual(7);
    expect(list.get(1)).toEqual(2);
    expect(list.tail?.value).toEqual(5);
    expect(list.length).toEqual(3);

    list.insertAt(9, 1);
    list.debug();
    expect(list.get(1)).toEqual(9);

    list.clear();

    list.append(5);
    list.append(7);
    list.debug();

    list.insertAt(9, 1);
    expect(list.get(1)).toEqual(9);

    list.remove(9);
    expect(list.get(1)).toEqual(7);

    list.remove(14);

    list.clear();

    list.remove(0);
    expect(list.head?.value).toBeUndefined();
    expect(list.tail?.value).toBeUndefined();

    list.append(5);
    expect(list.head?.value).toEqual(5);
    list.removeAt(0);
    expect(list.head?.value).toBeUndefined();
    expect(list.tail?.value).toBeUndefined();

    list.clear();
    list.append(1);
    list.append(2);
    list.removeAt(0);
    expect(list.length).toEqual(1);

    list.clear();
    list.append(1);
    list.append(2);
    list.removeAt(1);
    expect(list.length).toEqual(1);

    list.append(6);
    list.insertAt(4, 2);
    expect(list.length).toEqual(3);
  });
  test("should create lists of objects", () => {
    const list = new DoublyLinkedList<Person>();

    list.append({ id: 1, name: "mike" });
    list.append({ id: 2, name: "tommy" });
    list.append({ id: 3, name: "tj" });
    list.debug();

    expect(list.length).toEqual(3);
    expect(list.get(2)).toEqual({ id: 3, name: "tj" });

    list.clear();

    list.append({ id: 1, name: "mike" });

    list.append({ id: 3, name: "tj" });

    list.insertAt({ id: 2, name: "tommy" }, 1);
    expect(list.length).toEqual(3);
  });
});
