export const InsertionSort = <T>(arr: T[]): T[] => {
  const a = Array.from(arr);
  for (let i = 0; i < a.length; i++) {
    const numberToInsert = a[i];
    let j;
    for (j = i - 1; a[j] > numberToInsert && j >= 0; j--) {
      a[j + 1] = a[j];
    }

    a[j + 1] = numberToInsert;
  }

  return a;
};
