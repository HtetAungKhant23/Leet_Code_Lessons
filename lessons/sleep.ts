async function sleep(millis: number): Promise<number> {
  return await new Promise(resolve => setTimeout(() => resolve(millis), millis));
}

let time = Date.now();
sleep(100).then(val => {
  console.log(val);
  console.log(Date.now() - time); // 100
});
