export const BubbleSort = <T>(arr: T[]): T[] => {
  const a: T[] = Array.from(arr);

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        // we need to swap
        const tmp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = tmp;
      }
    }
  }

  return a;
};
