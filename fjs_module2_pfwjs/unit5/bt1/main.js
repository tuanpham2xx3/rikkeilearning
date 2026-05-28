var numbers = [1, 2, 3, 4, 5, 6];
let input = Number(prompt("Nhập số :"));

console.log(checkNumber(input));

function checkNumber(number) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === number) {
      return "Có ở vị trí " + i;
    }
  }
  return "Not found";
}
