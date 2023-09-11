//Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
  let total: number = 0;
  return promise1
    .then(value => {
      total = value;
      return promise2;
    })
    .then(res => {
      total += res;
      return total;
    });
}

const promise1 = new Promise<number>(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise<number>(resolve => setTimeout(() => resolve(5), 60));

const promise3 = new Promise<number>(resolve => setTimeout(() => resolve(10), 50));
const promise4 = new Promise<number>(resolve => setTimeout(() => resolve(-12), 30));

const result = addTwoPromises(promise1, promise2);
const result2 = addTwoPromises(promise3, promise4);
result.then(val => console.log(val));
result2.then(val => console.log(val));
