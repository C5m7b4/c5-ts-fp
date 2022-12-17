export const MergeSort = <T>(arr: T[]): T[] => {
  const a = Array.from(arr);

  // base case
  if (a.length < 2) {
    return a;
  }
  // break into two smaller arrays
  const length = a.length;
  const middle = Math.floor(length / 2);
  const left = a.slice(0, middle);
  const right = a.slice(middle);

  const sortedLeft = MergeSort(left);
  const sortedRight = MergeSort(right);
  //call mergeSort on left and right

  // return the merge of left and right
  return merge(sortedLeft, sortedRight);
};

const merge = <T>(left: T[], right: T[]): T[] => {
  //return one sorted array
  const results = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  // @ts-ignore
  return results.concat(left, right);
};
