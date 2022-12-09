export const swap = <T>(arr: T[], id: number): T[] => {
  const tmp = arr[id];
  arr[id] = arr[id + 1];
  arr[id + 1] = tmp;
  return arr;
};
