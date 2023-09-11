let callCount: number = 0;

interface IObj {
  [key: string]: number;
}

const memoize = (fn: (...args: number[]) => number): ((...args: number[]) => number) => {
  const cache: IObj = {};

  return (...args) => {
    if (!args.length) {
      return callCount;
    }
    const key: string = JSON.stringify(args);
    if (key in cache) {
      return cache[`${key}`];
    }

    callCount += 1;
    const result: number = fn(...args);
    cache[`${key}`] = result;
    return result;
  };
};

const input: (a: number, b: number) => number = (a: number, b: number) => {
  return a - b;
};

const factorial: (n: number) => number = (n: number) => (n <= 1 ? 1 : n * factorial(n - 1));

const memoizedFn = memoize(input);
const memoizedFn2 = memoize(factorial);

console.log(memoizedFn()); // 0
console.log(memoizedFn(5, 3)); // 2
console.log(memoizedFn(4, 4)); // 0
console.log(memoizedFn(4, 4)); // 0
console.log(memoizedFn()); // 2

console.log("*************************************");

callCount = 0;
console.log(memoizedFn2()); // 0
console.log(memoizedFn2(3)); // 6
console.log(memoizedFn2(5)); // 120
console.log(memoizedFn2(4)); // 24
console.log(memoizedFn2()); // 3
console.log(memoizedFn2(3)); // 6
console.log(memoizedFn2()); // 3
