import { Box } from "../../src";

export const data = [
  {
    id: 1,
    upc: "1",
    description: "coke",
    price: 1.0,
    dept: 1,
    category: 1,
    vendor: 1,
  },
  {
    id: 2,
    upc: "2",
    description: "pepsi",
    price: 2.45,
    dept: 1,
    category: 1,
    vendor: 1,
  },
  {
    id: 3,
    upc: "3",
    description: "mt dew",
    price: 2.65,
    dept: 1,
    category: 1,
    vendor: 1,
  },
  {
    id: 4,
    upc: "4",
    description: "dr pepper",
    price: 3.65,
    dept: 1,
    category: 1,
    vendor: 1,
  },
];

export const dataByReverseId = [
  {
    id: 4,
    upc: "4",
    description: "dr pepper",
    price: 3.65,
    dept: 1,
    category: 1,
    vendor: 1,
  },
  {
    id: 3,
    upc: "3",
    description: "mt dew",
    price: 2.65,
    dept: 1,
    category: 1,
    vendor: 1,
  },
  {
    id: 2,
    upc: "2",
    description: "pepsi",
    price: 2.45,
    dept: 1,
    category: 1,
    vendor: 1,
  },
  {
    id: 1,
    upc: "1",
    description: "coke",
    price: 1.0,
    dept: 1,
    category: 1,
    vendor: 1,
  },
];

export const dataByPriceAsc = [
  {
    id: 1,
    upc: "1",
    description: "coke",
    price: 1.0,
    dept: 1,
    category: 1,
    vendor: 1,
  },
  {
    id: 2,
    upc: "2",
    description: "pepsi",
    price: 2.45,
    dept: 1,
    category: 1,
    vendor: 1,
  },
  {
    id: 3,
    upc: "3",
    description: "mt dew",
    price: 2.65,
    dept: 1,
    category: 1,
    vendor: 1,
  },
  {
    id: 4,
    upc: "4",
    description: "dr pepper",
    price: 3.65,
    dept: 1,
    category: 1,
    vendor: 1,
  },
];

export const dataByPriceDescending = [
  {
    id: 4,
    upc: "4",
    description: "dr pepper",
    price: 3.65,
    dept: 1,
    category: 1,
    vendor: 1,
  },
  {
    id: 3,
    upc: "3",
    description: "mt dew",
    price: 2.65,
    dept: 1,
    category: 1,
    vendor: 1,
  },
  {
    id: 2,
    upc: "2",
    description: "pepsi",
    price: 2.45,
    dept: 1,
    category: 1,
    vendor: 1,
  },
  {
    id: 1,
    upc: "1",
    description: "coke",
    price: 1.0,
    dept: 1,
    category: 1,
    vendor: 1,
  },
];

export const dataByDescription = [
  {
    id: 1,
    upc: "1",
    description: "coke",
    price: 1.0,
    dept: 1,
    category: 1,
    vendor: 1,
  },
  {
    id: 4,
    upc: "4",
    description: "dr pepper",
    price: 3.65,
    dept: 1,
    category: 1,
    vendor: 1,
  },
  {
    id: 3,
    upc: "3",
    description: "mt dew",
    price: 2.65,
    dept: 1,
    category: 1,
    vendor: 1,
  },
  {
    id: 2,
    upc: "2",
    description: "pepsi",
    price: 2.45,
    dept: 1,
    category: 1,
    vendor: 1,
  },
];

const items = Box(data)
  .map((x) => x.filter((i) => i.dept === 1))
  .map((x) => x.filter((i) => i.vendor === 1))
  .map((x) => x.filter((i) => i.category === 1))
  .map((x) => x.filter((i) => i.price > 2.0))
  .map((x) => x.filter((i) => i.price < 3.0))
  .fold((x) => x);

console.log("box", items);

const addTwo = (a) => a + 2;
const addThree = (a) => a + 3;

const math = Box(1)
  .map(addTwo)
  .map(addThree)
  .fold((x) => x);

console.log("math", math);
