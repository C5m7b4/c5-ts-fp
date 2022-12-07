export const Box = <T>(x: T[]) => ({
  map: (f: Function) => Box(f(x)),
  inspect: `Box: ${JSON.stringify(x)}`,
  fold: (f: Function) => f(x),
  chain: (f: Function) => f(x),
});
