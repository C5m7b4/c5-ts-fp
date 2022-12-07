const trace =
  <T>(label: string) =>
  (x: T[]): T[] => {
    console.log(`${label}: ${x.map((i) => JSON.stringify(i))}`);
    return x;
  };

const prop = (propName: any) => (obj: any) => obj[propName];

const append = (appendee: string) => (appendix: string) => appendix + appendee;

export { trace, prop, append };