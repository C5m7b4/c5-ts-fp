import { bubbleSort } from "../src";
import {
  data,
  dataByReverseId,
  dataByPriceAsc,
  dataByPriceDescending,
  dataByDescription,
  dataByDescriptionDescending,
  dataWithDates,
  dataWithDatesDescending,
  testFixData,
  testFixDataDesc,
} from "./data";

describe("bubbleSort", () => {
  test("should sort an array of numbers", () => {
    const arr = [6, 5, 4, 3, 2, 1];
    const result = bubbleSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("should sort number desending", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const result = bubbleSort(arr, false);
    expect(result).toEqual([6, 5, 4, 3, 2, 1]);
  });
  test("should sort by id descending order", () => {
    const result = bubbleSort(data, false, "id");
    expect(result).toEqual(dataByReverseId);
  });
  test("should sort by price ascending", () => {
    const result = bubbleSort(data, true, "price");
    expect(result).toEqual(dataByPriceAsc);
  });
  test("should sort by price descending", () => {
    const result = bubbleSort(data, false, "price");
    expect(result).toEqual(dataByPriceDescending);
  });
  test("should sort by description ascending", () => {
    const result = bubbleSort(data, true, "description");
    expect(result).toEqual(dataByDescription);
  });
  test("should sort by description descending", () => {
    const result = bubbleSort(data, false, "description");
    expect(result).toEqual(dataByDescriptionDescending);
  });
  test("should sort dates ascending", () => {
    const result = bubbleSort(dataWithDates, true, "expires", true);
    expect(result).toEqual(dataWithDates);
  });
  test("should sort dates descending", () => {
    const result = bubbleSort(dataWithDates, false, "expires", true);
    expect(result).toEqual(dataWithDatesDescending);
  });
  test("should sort numbers that are jumbled up", () => {
    const arr = [5, 2, 4, 1, 3];
    const result = bubbleSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  test("should sort jumbed numbers desending", () => {
    const arr = [5, 2, 4, 1, 3];
    const result = bubbleSort(arr, false);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });
  test("should sort test data descending", () => {
    const result = bubbleSort(testFixData, false, "category");
    expect(result).toEqual(testFixDataDesc);
  });
});
