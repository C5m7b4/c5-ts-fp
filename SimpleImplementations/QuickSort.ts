export const QuickSort = <T>(arr: T[]): T[] => {
  const a = Array.from(arr);
  // base case, array of length 0 or 1
  if (a.length <= 1) return a;

  //chose pivot
  const pivot = a[a.length - 1];

  //seperate left and right arrays
  const left = [];
  const right = [];

  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(a[i]);
    }
  }

  // call quicksort on left and right arrays
  const sortedLeft = QuickSort(left);
  const sortedRight = QuickSort(right);

  return sortedLeft.concat(pivot, sortedRight);
};
