let min = 1;
let max = 100;
let nr = Math.floor(Math.random() * (max - min + 1)) + min;
let n;
let i = 0;

do {
  n = Number(prompt("Lượt " + (i + 1) + "/5 Đoán là số mấy?"));
  i++;
  if (n > nr) {
    alert("Số quá lớn Hãy thử số nhỏ hơn.");
  } else if (n < nr) {
    alert("Số quá nhỏ Hãy thử số lớn hơn.");
  } else {
    alert("Chính xác! Bạn đoán đúng sau " + i + " lượt.");
  }
} while (nr !== n && i < 5);

if (nr !== n) {
  alert("Hết lượt! Đáp án là: " + nr);
}
