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

import { compose } from "../src";

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
