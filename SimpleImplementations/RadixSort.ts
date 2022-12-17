const getDigit = (number: number, place: number, longestNumber: number) => {
  const string = number.toString();
  const size = string.length;
  const mod = longestNumber - size;
  return string[place - mod] || 0;
};

const getLongestNumber = (array: number[]): number => {
  let longest = 0;
  for (let i = 0; i < array.length; i++) {
    const currentLength = array[i].toString().length;
    longest = currentLength > longest ? currentLength : longest;
  }
  return longest;
};

export const RadixSort = (arr: number[]): number[] => {
  const a = Array.from(arr);

  // find longest number
  const longestNumber: number = getLongestNumber(a);

  // create how many buckets you need
  // @ts-ignore
  const buckets = new Array(10).fill().map(() => []);

  // for loop for how many iterations you need to do
  // enqueue numbers into their buckets
  for (let i = longestNumber - 1; i >= 0; i--) {
    while (a.length) {
      const current = a.shift();
      // @ts-ignore
      buckets[getDigit(current, i, longestNumber)].push(current);
    }
    // for loop for each bucket
    // dequeue all the results

    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        // @ts-ignore
        a.push(buckets[j].shift());
      }
    }
  }

  return a;
};
