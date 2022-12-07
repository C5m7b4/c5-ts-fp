# c5-ts-fp

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/C5m7b4/c5-ts-fp/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/C5m7b4/c5-ts-fp/tree/master)
![CircleCI](https://img.shields.io/circleci/build/github/C5m7b4/c5-ts-fp/master?style=plastic)
![GitHub repo file count](https://img.shields.io/github/directory-file-count/c5m7b4/c5-ts-fp?style=plastic)
![GitHub](https://img.shields.io/github/license/c5m7b4/c5-ts-fp?style=plastic)
![GitHub package.json version](https://img.shields.io/github/package-json/v/c5m7b4/c5-ts-fp?style=plastic)
[![codecov](https://codecov.io/gh/C5m7b4/c5-ts-fp/branch/master/graph/badge.svg?token=eoy3bDqgts)](https://codecov.io/gh/C5m7b4/c5-ts-fp)

this is my small functional library for typescript.

here are the functions that I am covering so far

- [curry](#curry)
- [compose](#compose)
- [Box](#box)
- [trace](#trace)
- [prop](#prop)
- [append](#append)
- [Maybe](#maybe)
- [Stack](#stack)
- [Queue](#queue)
- [Linear Search](#linear-search)
- [Binary Search](#binary-search)

coming soon

- Task
- Either

## example usage

to install

```js
npm install c5-ts-fp
```

or

```js
yarn add c5-ts-fp
```

### curry

to use this function, we need to take a function that has an airity of more than on and condense it to consecutive functions:

```js
const add = (a, b) => a + b;

const curriedAdd = curry(add);
console.log(curriedAdd(5)(5));
```

### compose

to use this function, we need some helper functions that we can compose

```js
const addOne = (x) => x.map((y) => y + 1);
const addTwo = (x) => x.map((y) => y + 2);

const arr = [1, 2, 3, 4, 5, 6];

const r = compose(addOne, addTwo);
console.log(r(arr));
```

### Box

to us this function, we need an array of data that we can dynamically filter:

```js
const items = Box(data)
  .map((x) => x.filter((i) => i.dept === 1))
  .map((x) => x.filter((i) => i.vendor === 1))
  .map((x) => x.filter((i) => i.category === 1))
  .map((x) => x.filter((i) => i.price > 2.0))
  .map((x) => x.filter((i) => i.price < 3.0))
  .fold((x) => x);

console.log(items);
```

### trace

this is a useful function if you need to add logging into your monad

```js
const items = Box(data)
  .map((x) => x.filter((i) => i.dept === 1))
  .map((x) => trace("after dept filter")(x))
  .map((x) => x.filter((i) => i.vendor === 1))
  .map((x) => x.filter((i) => i.category === 1))
  .map((x) => x.filter((i) => i.price > 2.0))
  .map((x) => x.filter((i) => i.price < 3.0))
  .fold((x) => x);

console.log(items);
```

### prop

this function will extract a property out of an object

```js
const obj = {
  id: 1,
  name: 'mike'
}

console.log(prop('mike')(obj))
```

there is no need to curry this function because it is already a higher order function. it takes in a property name and returns a function that takes in an object and then returns the value of that property of that object.

### append

this simple function just appends one string to another

```js
console.log(append("second")("first-"));
```

there is no need to curry this function becuase it is also a higher order function

### maybe

lets look at an example of how we can use maybe. Im gonna add some test data so we can try out the maybe. you can see an example of this in the example application attached:

```js
const maybeData = Maybe.just(data1)
  .map((x) => x.filter((i) => i.dept === 32))
  .map((x) => x.filter((i) => i.price > 2))
  .map((x) => x.map((i) => ({ ...i, price: formatMoney(i.price) })))
  .extract();

console.log(maybeData);
```

even if the data passed in is null, the Maybe won't break.

### Stack

stack is a data structure that is LIFO (last in first out)
these are the methods

- push
- pop
- peek

### Queue

queue is a data struccture that is FIFO (first in first out)
these are the methods

- enqueue
- dequeue
- size

### Linear Search

once again, we are going to use our test data. we can also run this linear search on any array of numbers, dates, string, or objects. the syntax would look like this:

```js
const result = linearSearch(data, 2, "id");
```

### Binary Search

this can only work on data that is already sorted, so if you are searching by an already sorted id, this is perfect. if you are searching by description but you data is sorted by id, you will need to sort this data before you try to use a binary search

```js
const result = binarySearch(data, 2, "id");
```
