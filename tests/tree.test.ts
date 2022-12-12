import { Tree } from "../src";

interface Person {
  id: number;
  name: string;
  age: number;
}

const person1: Person = { id: 1, name: "mike", age: 48 };
const person2: Person = { id: 2, name: "sally", age: 27 };
const person3: Person = { id: 3, name: "bill", age: 19 };

describe("tree", () => {
  test("should resemble a tree of numbers", () => {
    const myTree = new Tree(1);
    expect(myTree.value).toEqual(1);
    expect(myTree.length).toEqual(1);
  });
  test("should be able to insertChild", () => {
    const myTree = new Tree(1);
    const secondTree = myTree.insertChild(2);
    expect(myTree.value).toEqual(1);
    expect(myTree.length).toEqual(2);
    expect(myTree.children?.length).toEqual(1);
    if (myTree.children) {
      // @ts-ignore
      const childValue = myTree.children[0].value;
      expect(childValue).toEqual(2);
    }
  });
  test("should be able to remove items", () => {
    const myTree = new Tree(1);
    myTree.insertChild(2);
    myTree.insertChild(3);
    myTree.removeChild(3);
    expect(myTree.length).toEqual(2);
    myTree.removeChild(2);
    expect(myTree.length).toEqual(1);
  });
  test("should represent a tree of objects", () => {
    const myTree = new Tree(person1);
    expect(myTree.value).toEqual(person1);
    expect(myTree.length).toEqual(1);
    myTree.insertChild(person2);
    myTree.insertChild(person3);
    expect(myTree.length).toEqual(3);
    expect(myTree.children?.length).toEqual(2);
  });
  test("should be able to remove objects", () => {
    const myTree = new Tree(person1);
    myTree.insertChild(person2);
    myTree.insertChild(person3);
    expect(myTree.length).toEqual(3);
    myTree.removeChild(2, "id");
    expect(myTree.length).toEqual(2);

    // try to remove an item that is not there
    myTree.removeChild(5, "id");
  });
  test("should not blow up if we try to remove a child and there are no chilren", () => {
    const myTree = new Tree(person1);
    myTree.removeChild(2, "id");
    expect(myTree.length).toEqual(1);
  });
});
