async function sleep(millis: number): Promise<number> {
  return new Promise(async resolve => setTimeout(() => resolve(millis), millis));
}

let t = Date.now();
sleep(100).then(val => {
  console.log(val);
  console.log(Date.now() - t); // 100
});
