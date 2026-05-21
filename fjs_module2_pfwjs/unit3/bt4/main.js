let i = 1;
let calc = 0;

while (i < 50) {
  if (i % 5 == 0) {
    i++;
    continue;
  }
  console.log(i);
  calc += i;
  if (calc > 200) {
    break;
  }
  i++;
}
console.log("Tong =", calc);
