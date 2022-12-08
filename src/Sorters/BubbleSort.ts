import { swap } from "../utils";

export const bubbleSort = <T>(
  arr: T[],
  asc = true,
  property?: keyof T,
  isDate = false
): T[] => {
  if (property) {
    if (asc) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (
            isDate
              ? // @ts-ignore
                new Date(arr[j][property]) > new Date(arr[j + 1][property])
              : arr[j][property] > arr[j + 1][property]
          ) {
            swap(arr, j);
          }
        }
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (
            isDate
              ? // @ts-ignore
                new Date(arr[j][property]) < new Date(arr[j + 1][property])
              : arr[j][property] < arr[j + 1][property]
          ) {
            swap(arr, j);
          }
        }
      }
    }
  } else {
    if (asc) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            swap(arr, j);
          }
        }
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] < arr[j + 1]) {
            swap(arr, j);
          }
        }
      }
    }
  }

  return arr;
};
