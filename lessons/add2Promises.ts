//Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

interface IGeneric {
  value: number;
}

async function addTwoPromises<T extends IGeneric>(promise1: Promise<T>, promise2: Promise<T>): Promise<T> {
  return promise1.then(async value1 => {
    return promise2.then(async value2 => {
      return { value: value1.value + value2.value } as T;
    });
  });
}

const promise1 = new Promise<IGeneric>(resolve => setTimeout(() => resolve({ value: 2 }), 20));
const promise2 = new Promise<IGeneric>(resolve => setTimeout(() => resolve({ value: 5 }), 60));

const promise3 = new Promise<IGeneric>(resolve => setTimeout(() => resolve({ value: 10 }), 50));
const promise4 = new Promise<IGeneric>(resolve => setTimeout(() => resolve({ value: -12 }), 30));

const result = addTwoPromises(promise1, promise2);
const result2 = addTwoPromises(promise3, promise4);

result.then(val => console.log(val));
result2.then(val => console.log(val));
