//Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

// async function addTwoPromises<T>(promise1: Promise<T>, promise2: Promise<T>): Promise<T> {

// }
// const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));

// const value = promise1.then(async value => value).catch(err => console.log(err));

// console.log(value);

// const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
// console.log(promise2);

const myFun = async () => {
  const myPromise = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });
  return myPromise;
};

let str;

str = myFun()
  .then(value => {
    console.log(value, "no way");
  })
  .then(res => res)
  .catch(err => console.log(err));

console.log(str);
