export const sum = (a: number, b: number): number => {
  return a + b;
};

export const curriedSum =
  (a: number) =>
  (b: number): number => {
    return a + b;
  };
