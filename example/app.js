console.log("you are ready to start coding");

const curry = (f) => {
  return function curried(...args) {
    if (args.length >= f.length) {
      return f.apply(this, args);
    } else {
      return (...args2) => curried.apply(this, args.concat(args2));
    }
  };
};

const add = (a, b) => a + b;

const curriedAdd = curry(add);
// console.log(curriedAdd(5)(5));

// const compose =
//   (...fns) =>
//   (x) =>
//     fns.reduce((y, f) => f(y), x);

import { compose, DoublyLinkedList } from "../src";

const addOne = (x) => x.map((y) => y + 1);
const addTwo = (x) => x.map((y) => y + 2);

const arr = [1, 2, 3, 4, 5, 6];

const r = compose(addOne, addTwo);
// console.log(r(arr));

import { Box, trace } from "../src";
import { data } from "../tests/data";

// const trace = (label) => (x) => {
//   console.log(`label: ${label}: value: ${x.map((i) => JSON.stringify(i))}`);
//   return x;
// };

const items = Box(data)
  .map((x) => x.filter((i) => i.dept === 1))
  .map((x) => trace("after dept filter")(x))
  .map((x) => x.filter((i) => i.vendor === 1))
  .map((x) => x.filter((i) => i.category === 1))
  .map((x) => x.filter((i) => i.price > 2.0))
  .map((x) => x.filter((i) => i.price < 3.0))
  .fold((x) => x);

// console.log(items);

import { data as data1 } from "./data";
import { Maybe } from "../src";

export const formatMoney = (x) => {
  x = x.toString();
  const pos = x.indexOf(".");
  const left = x.substring(0, pos);
  let right = x.substring(pos + 1);
  if (right.length === 1) {
    right = right + "0";
  }
  return `${left}.${right}`;
};

const maybeData = Maybe.just(data1)
  .map((x) => x.filter((i) => i.dept === 32))
  .map((x) => x.filter((i) => i.price > 2))
  .map((x) => x.map((i) => ({ ...i, price: formatMoney(i.price) })))
  .extract();

// console.log(maybeData);

const maybeData1 = Maybe.just(null)
  .map((x) => x.filter((i) => i.dept === 32))
  .map((x) => x.filter((i) => i.price > 2))
  .map((x) => x.map((i) => ({ ...i, price: formatMoney(i.price) })))
  .extract();

// console.log(maybeData1);

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
import { linearSearch } from "../src";
const found = linearSearch(arr1, 4);
// console.log("found", found);

import { append } from "../src";
// console.log(append("second")("first-"));

export const dataWithDates = [
  {
    id: 1,
    expires: "1/1/2021",
  },
  {
    id: 2,
    expires: "7/3/2021",
  },
  {
    id: 3,
    expires: "5/1/2022",
  },
  {
    id: 4,
    expires: "7/1/2022",
  },
];

// import { QuickSort } from "../src";

// const sortedDates = QuickSort(dataWithDates, true, "expires", true);
// console.log(sortedDates);

import { DoubleLinkedList } from "../src";

const list = new DoublyLinkedList();

list.append({ id: 1, name: "mike" });

list.append({ id: 3, name: "tj" });

list.insertAt({ id: 2, name: "tommy" }, 1);

list.debug();

// const n2 = list.get(2);
// console.log(n2);

// import { BreadthFirstSearch } from "../src";

// const tree = {
//   value: 20,
//   right: {
//     value: 50,
//     right: {
//       value: 100,
//       right: null,
//       left: null,
//     },
//     left: {
//       value: 30,
//       right: {
//         value: 45,
//         right: null,
//         left: null,
//       },
//       left: {
//         value: 29,
//         right: null,
//         left: null,
//       },
//     },
//   },
//   left: {
//     value: 10,
//     right: {
//       value: 15,
//       right: null,
//       left: null,
//     },
//     left: {
//       value: 5,
//       right: {
//         value: 7,
//         right: null,
//         left: null,
//       },
//       left: null,
//     },
//   },
// };

// console.log(BreadthFirstSearch(tree, 7));

import { tree, tree2 } from "../tests/testTree";
import { compareBinaryTries } from "../src";

// console.log(compareBinaryTries(tree, tree2));

import { QuickSort } from "../SimpleImplementations/QuickSort";

const qsArr = [6, 3, 1, 7, 2, 5, 4];
// console.log(QuickSort(qsArr));

const nums = [
  20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34, 3000,
  3001, 1200, 633,
];
import { RadixSort } from "../SimpleImplementations/RadixSort";

const radixResult = RadixSort(nums);
// console.log(radixResult);

const fill = 99;
const nums1 = new Array(fill)
  // @ts-ignore
  .fill()
  .map(() => Math.floor(Math.random() * 500000));

// const ans = RadixSort(nums1);
// console.log(ans);
// console.log(nums1.sort());

import { LinkedList } from "../src";
const llist = new LinkedList();
llist.delete(0);
// llist.push(1);
// llist.find(0);
// llist.push(2);

// const llistResult = llist.get(1);
// console.log("result", llistResult);
// llist.push(3);
// llist.pop();
// console.log("length", llist.length);
// console.log("list", llist);

import { BinarySearchTree } from "../src";
function comparator(a, b) {
  if (a < b) return -1;

  if (a > b) return 1;

  return 0;
}

const bst = new BinarySearchTree(comparator);

bst.insert(5);

bst.insert(2);
bst.insert(3);
bst.insert(1);

bst.insert(7);
bst.insert(6);
bst.insert(8);

console.log("ostorder", bst.postOrderTraversal(bst.head));
console.log("bst", bst);
console.log("**************");
bst.preOrderTraversal(bst.head);
console.log("**************");
bst.postOrderTraversal(bst.head);

import { AVLTree } from "../src";

// const avlNums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
const avlTree = new AVLTree();
avlTree.add(4);
console.log(avlTree.toJson());
// avlNums.map((n) => avlTree.add(n));

// const treeObj = avlTree.toObject();
// console.log(treeObj);

// console.log(treeObj.value);

import {
  BinarySearchTreeNode,
  drawBinaryTree,
  VisualizationType,
} from "../src";

// const root = new BinaryTreeNode(100);
// const left = new BinaryTreeNode(50);
// const right = new BinaryTreeNode(50);
// const rightOfLeft = new BinaryTreeNode(75);
// root.setLeft(left);
// root.setRight(right);
// root.left.setRight(rightOfLeft);

const root = new BinarySearchTreeNode(100);
// root.insert(50);
// root.insert(75);
// root.insert(125);

[50, 145, 150, 130, 120, 140, 30, 70, 75].forEach((num) => root.insert(num));

drawBinaryTree(root, document.querySelector("canvas"), {
  type: VisualizationType.PRETTY,
});
console.log("root", root);
