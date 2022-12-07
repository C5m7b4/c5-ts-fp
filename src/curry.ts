export const curry = (f: Function) => {
  return function curried(...args: any[]) {
    if (args.length >= f.length) {
      return f.apply(null, args);
    } else {
      return (...args2: any) => curried.apply(null, args.concat(args2));
    }
  };
};
