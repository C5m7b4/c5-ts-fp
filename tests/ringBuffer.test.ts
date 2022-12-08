import { RingBuffer } from "../src";

type Client = {
  id: number;
  name: string;
};

describe("ringbuffer", () => {
  test("should initialize", () => {
    const ring = new RingBuffer<number>(5);
    expect(ring).toEqual({ buffer: [], size: 5 });
  });
  test("should hold an empty array", () => {
    const ring = new RingBuffer<number>(5);
    expect(ring.toArray()).toEqual([]);
  });
  test("should hold one value", () => {
    const ring = new RingBuffer<number>(5);
    ring.add(10);
    expect(ring).toEqual({ buffer: [10], size: 5 });
  });
  test("should hold two values", () => {
    const ring = new RingBuffer<number>(5);
    ring.add(10);
    ring.add(20);
    expect(ring).toEqual({ buffer: [10, 20], size: 5 });
  });
  test("should hold three values", () => {
    const ring = new RingBuffer<number>(5);
    ring.add(10);
    ring.add(20);
    ring.add(30);
    expect(ring).toEqual({ buffer: [10, 20, 30], size: 5 });
  });
  test("should hold 4 values", () => {
    const ring = new RingBuffer<number>(5);
    ring.add(10);
    ring.add(20);
    ring.add(30);
    ring.add(40);
    expect(ring).toEqual({ buffer: [10, 20, 30, 40], size: 5 });
  });
  test("should hold 5 values", () => {
    const ring = new RingBuffer<number>(5);
    ring.add(10);
    ring.add(20);
    ring.add(30);
    ring.add(40);
    ring.add(50);
    expect(ring).toEqual({ buffer: [10, 20, 30, 40, 50], size: 5 });
  });
  test("should handle more values than the size of the ringbuffer", () => {
    const ring = new RingBuffer<number>(5);
    ring.add(10);
    ring.add(20);
    ring.add(30);
    ring.add(40);
    ring.add(50);
    ring.add(60);
    expect(ring).toEqual({ buffer: [20, 30, 40, 50, 60], size: 5 });
  });
  test("should wrap two times", () => {
    const ring = new RingBuffer<number>(5);
    ring.add(10);
    ring.add(20);
    ring.add(30);
    ring.add(40);
    ring.add(50);
    ring.add(60);
    ring.add(70);
    expect(ring).toEqual({ buffer: [30, 40, 50, 60, 70], size: 5 });
  });
  test("should accept in incoming array and wrap according to its size", () => {
    const ring = new RingBuffer<number>(5);
    ring.fromArray([12, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
    expect(ring).toEqual({
      buffer: [21, 22, 23, 24, 25],
      size: 5,
    });
  });
  test("should be able to return its size", () => {
    const ring = new RingBuffer<string>(5);
    expect(ring.getSize()).toEqual(5);
  });
  test("should accept an object", () => {
    const ring = new RingBuffer<Client>(5);
    ring.add({
      id: 1,
      name: "mike",
    });
    expect(ring).toEqual({ buffer: [{ id: 1, name: "mike" }], size: 5 });
  });
  test("should handle an array of clients", () => {
    const arr = [
      { id: 1, name: "mike" },
      { id: 2, name: "tommy" },
      { id: 3, name: "cody" },
      { id: 4, name: "tj" },
      { id: 5, name: "autumn" },
    ];
    const ring = new RingBuffer<Client>(5);
    ring.fromArray(arr);
    expect(ring).toEqual({
      buffer: [
        { id: 1, name: "mike" },
        { id: 2, name: "tommy" },
        { id: 3, name: "cody" },
        { id: 4, name: "tj" },
        { id: 5, name: "autumn" },
      ],
      size: 5,
    });
  });
});
