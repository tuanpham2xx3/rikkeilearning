const n = Number(prompt("Nhap mot so nguyen: "));
let isPrime = true;

if (!Number.isInteger(n) || n < 2) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("La so nguyen to");
} else {
  console.log("Khong phai so nguyen to");
}
