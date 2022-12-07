export const compose =
  <T>(...fns: Function[]) =>
  (x: T) =>
    fns.reduce((y, f) => f(y), x);
