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
