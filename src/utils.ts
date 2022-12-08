const trace =
  <T>(label: string) =>
  (x: T[]): T[] => {
    console.log(`${label}: ${x.map((i) => JSON.stringify(i))}`);
    return x;
  };

const prop = (propName: any) => (obj: any) => obj[propName];

const append = (appendee: string) => (appendix: string) => appendix + appendee;

const swap = <T>(arr: T[], id: number): T[] => {
  const tmp = arr[id];
  arr[id] = arr[id + 1];
  arr[id + 1] = tmp;
  return arr;
};

export { trace, prop, append, swap };
