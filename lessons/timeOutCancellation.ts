// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of t, fn should be called with args passed as parameters unless cancelFn was invoked before the delay of t milliseconds elapses, specifically at cancelT ms. In that case, fn should never be called.

// function cancellable(fn: Function, args: number[], t: number): Function {
//   return () => {
//     csetTimeout(() => {
//       return fn(...args);
//     }, t);
//   };
// }

// const fn = (x: number) => x * 5;
// const args: number[] = [2];
// const t: number = 20;
// const cancelT: number = 50;

// // const cancel = cancellable((x: number) => x * 5, [2], 20); // fn(2) called at t=20ms
// const cancel = cancellable(fn, args, t); // fn(2) called at t=20ms
// const hay = setTimeout(cancel, cancelT);
// // console.log(hay);

// function cancellable(fn: Function, args: any[], t: number): Function {
//   return () => {
//     const id = setTimeout(() => {
//         const result = fn(...args);
//         return [{time: t, return: result}]
//     }, t);
//       console.log(id)
//   };
// }

// console.log(cancellable(fn, args, t)());

type CancelFunction = () => void;

function executeWithDelay<T>(fn: (...args: any[]) => T, args: any[], t: number): [Promise<T>, CancelFunction] {
  let timerId: NodeJS.Timeout | null = null;
  let isCanceled = false;

  const cancelFn: CancelFunction = () => {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
      isCanceled = true;
    }
  };

  const promise = new Promise<T>((resolve, reject) => {
    timerId = setTimeout(() => {
      if (!isCanceled) {
        try {
          const result = fn(...args);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }
    }, t);
  });

  return [promise, cancelFn];
}

const [promise, cancelFn] = executeWithDelay((x: number, y: number) => x + y, [2, 3], 2000);

promise
  .then((result) => {
    console.log("Result:", result); // This will be called after 2 seconds if not canceled
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const cancellable = cancelFn
// To cancel the execution before the delay:
// cancelFn();
