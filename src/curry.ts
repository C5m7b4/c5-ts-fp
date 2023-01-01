export const curry = (f: Function) => {
  return function curried(...args: any[]) {
    if (args.length >= f.length) {
      return f(...args);
    } else {
      return (...args2: any) => curried(...args.concat(args2));
    }
  };
};
