class MyFilterClass<T> {
  arr: T[];
  constructor(arr: T[]) {
    this.arr = arr;
  }

  filter(fun: (param: T) => boolean): T[] {
    let result: T[] = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (fun(this.arr[i])) {
        result.push(this.arr[i]);
      }
    }
    return result;
  }
}

const arr1: number[] = [1, 34, 4, 2, 11];
const arr2: string[] = ["fall", "in", "love", "with", "typescript"];

const obj = new MyFilterClass(arr1);
const resArr1: number[] = obj.filter(item => item > 4);

const obj2 = new MyFilterClass(arr2);
const resArr2: string[] = obj2.filter(item => item.length > 3);

console.log(resArr1);
console.log(resArr2);
