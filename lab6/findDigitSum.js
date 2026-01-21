function findDigitSum(n) {
  return new Promise((resolve, reject) => {
    if (!isNaN(n)) {
      let sum = 0;
      n = Math.abs(Number(n));
      while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
      }
      resolve(sum);
    } else {
      reject("Invalid");
    }
  });
}
async function findResult(n) {
  try {
    const result = await findDigitSum(n);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
findResult(123);
