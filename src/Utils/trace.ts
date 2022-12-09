export const trace =
  <T>(label: string) =>
  (x: T[]): T[] => {
    console.log(`${label}: ${x.map((i) => JSON.stringify(i))}`);
    return x;
  };
