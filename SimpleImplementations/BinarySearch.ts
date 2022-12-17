export const BinarySearch = <T>(
  arr: T[],
  id: any,
  property: keyof T
): T | null => {
  let min = 0;
  let max = arr.length - 1;
  let index;
  let element;

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    element = arr[index];

    if (element[property] < id) {
      min = index + 1;
    } else if (element[property] > id) {
      max = index - 1;
    } else {
      return element;
    }
  }

  return null;
};
