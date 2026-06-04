function sumAllNumber(...numbers) {
  const total = numbers.reduce(
    (sum, currentNumber) => (sum += currentNumber),
    0,
  );
  console.log("Tổng là: " + total);
  return total;
}

sumAllNumber(1, 2, 3);
sumAllNumber(67, 67, 36);
sumAllNumber(3, 3, 3, 3, 6, 6, 6, 6, 6);
