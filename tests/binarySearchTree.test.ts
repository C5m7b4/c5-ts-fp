import { BinarySearchTree } from "../src";

describe("binarySearchTree", () => {
  function comparator(a, b) {
    if (a < b) return -1;

    if (a > b) return 1;

    return 0;
  }

  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree<number>(comparator);
  });
  test("pre order", () => {
    bst.insert(5);

    bst.insert(2);
    bst.insert(3);
    bst.insert(1);

    bst.insert(7);
    bst.insert(6);
    bst.insert(8);

    const preOrder = bst.preOrderTraversal(bst.head);
    expect(preOrder).toEqual([5, 2, 1, 3, 7, 6, 8]);
  });
  test("inorder", () => {
    bst.insert(5);

    bst.insert(2);
    bst.insert(3);
    bst.insert(1);

    bst.insert(7);
    bst.insert(6);
    bst.insert(8);
    const result = bst.inOrderTraversal(bst.head);
    expect(result).toEqual([1, 2, 3, 5, 6, 7, 8]);
  });
  test("postorder", () => {
    bst.insert(5);

    bst.insert(2);
    bst.insert(3);
    bst.insert(1);

    bst.insert(7);
    bst.insert(6);
    bst.insert(8);
    const result = bst.postOrderTraversal(bst.head);
    expect(result).toEqual([1, 3, 2, 6, 8, 7, 5]);
  });
  test("search", () => {
    const result = bst.search(6);
    expect(result).toBeNull();
    bst.insert(5);

    bst.insert(2);
    bst.insert(3);
    bst.insert(1);

    bst.insert(7);
    bst.insert(6);
    bst.insert(8);
    const result1 = bst.search(6);
    expect(result1).toEqual({ data: 6 });

    const result2 = bst.search(9);
    expect(result2).toBeNull();

    const result3 = bst.search(0);
    expect(result3).toBeNull();
  });
});
