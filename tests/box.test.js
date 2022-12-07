import { Box } from "../src";
import { data } from "./data";

describe("box", () => {
  test("should get all items between 2 and 3 dollars from data", () => {
    const items = Box(data)
      .map((x) => x.filter((i) => i.dept === 1))
      .map((x) => x.filter((i) => i.vendor === 1))
      .map((x) => x.filter((i) => i.category === 1))
      .map((x) => x.filter((i) => i.price > 2.0))
      .map((x) => x.filter((i) => i.price < 3.0))
      .fold((x) => x);

    expect(items).toEqual([
      {
        category: 1,
        dept: 1,
        description: "pepsi",
        id: 2,
        price: 2.45,
        upc: "2",
        vendor: 1,
      },
      {
        category: 1,
        dept: 1,
        description: "mt dew",
        id: 3,
        price: 2.65,
        upc: "3",
        vendor: 1,
      },
    ]);
  });

  test("should get all items between 2 and 3 dollars from data", () => {
    const items = Box(data)
      .map((x) => x.filter((i) => i.dept === 1))
      .map((x) => x.filter((i) => i.vendor === 1))
      .map((x) => x.filter((i) => i.category === 1))
      .map((x) => x.filter((i) => i.price > 2.0))
      .map((x) => x.filter((i) => i.price < 3.0))
      .chain((x) => x);

    expect(items).toEqual([
      {
        category: 1,
        dept: 1,
        description: "pepsi",
        id: 2,
        price: 2.45,
        upc: "2",
        vendor: 1,
      },
      {
        category: 1,
        dept: 1,
        description: "mt dew",
        id: 3,
        price: 2.65,
        upc: "3",
        vendor: 1,
      },
    ]);
  });
});
