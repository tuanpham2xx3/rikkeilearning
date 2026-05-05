let a = Number(prompt("Nhập số A :"));
console.log(a);
let b = Number(prompt("Nhập số B :"));
console.log(b);
let pheptinh = prompt("Nhập phép tính + - * / :");
console.log(pheptinh);

let isValid;
if (pheptinh == "+" || pheptinh == "-" || pheptinh == "*") {
  isValid = true;
} else if (pheptinh == "/") {
  if (b != 0) {
    isValid = true;
  } else {
    alert("Không thể chia cho 0");
  }
} else {
  alert("Phép tính không hợp lệ");
  throw new Error("Nhập sai phép tính");
}

if (isValid == true) {
  var kq;
  if (pheptinh == "+") {
    kq = a + b;
    alert("Kết quả của " + a + " " + pheptinh + " " + b + " là: " + kq);
  } else if (pheptinh == "-") {
    kq = a - b;
    alert("Kết quả của " + a + " " + pheptinh + " " + b + " là: " + kq);
  } else if (pheptinh == "*") {
    kq = a * b;
    alert("Kết quả của " + a + " " + pheptinh + " " + b + " là: " + kq);
  } else if (pheptinh == "/") {
    kq = a / b;
    alert("Kết quả của " + a + " " + pheptinh + " " + b + " là: " + kq);
  }
}
