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
console.log(curriedAdd(5)(5));

// const compose =
//   (...fns) =>
//   (x) =>
//     fns.reduce((y, f) => f(y), x);

import { compose, DoublyLinkedList } from "../src";

const addOne = (x) => x.map((y) => y + 1);
const addTwo = (x) => x.map((y) => y + 2);

const arr = [1, 2, 3, 4, 5, 6];

const r = compose(addOne, addTwo);
console.log(r(arr));

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

console.log(items);

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

console.log(maybeData);

const maybeData1 = Maybe.just(null)
  .map((x) => x.filter((i) => i.dept === 32))
  .map((x) => x.filter((i) => i.price > 2))
  .map((x) => x.map((i) => ({ ...i, price: formatMoney(i.price) })))
  .extract();

console.log(maybeData1);

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
import { linearSearch } from "../src";
const found = linearSearch(arr1, 4);
console.log("found", found);

import { append } from "../src";
console.log(append("second")("first-"));

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

import { QuickSort } from "../src";

// const sortedDates = QuickSort(dataWithDates, true, "expires", true);
// console.log(sortedDates);

import { DoubleLinkedList } from "../src";

const list = new DoublyLinkedList();

list.append({ id: 1, name: "mike" });
list.append({ id: 2, name: "tommy" });
list.append({ id: 3, name: "tj" });

list.debug();

const n2 = list.get(2);
console.log(n2);

import { BreadthFirstSearch } from "../src";

const tree = {
  value: 20,
  right: {
    value: 50,
    right: {
      value: 100,
      right: null,
      left: null,
    },
    left: {
      value: 30,
      right: {
        value: 45,
        right: null,
        left: null,
      },
      left: {
        value: 29,
        right: null,
        left: null,
      },
    },
  },
  left: {
    value: 10,
    right: {
      value: 15,
      right: null,
      left: null,
    },
    left: {
      value: 5,
      right: {
        value: 7,
        right: null,
        left: null,
      },
      left: null,
    },
  },
};

debugger;
console.log(BreadthFirstSearch(tree, 7));
