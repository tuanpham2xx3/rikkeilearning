let salary = Number(prompt("Nhập số tiền lương (Triệu):"));
console.log(salary);
let age = Number(prompt("Nhập số tuổi:"));
console.log(age);
const input = prompt("Có nợ xấu không ? (yes/no) :");
const value = input?.trim().toLowerCase();

let haveBad;
if (input === "yes") {
  haveBad = true;
} else if (value === "no") {
  haveBad = false;
} else {
  alert("Chỉ được nhập Yes hoặc No");
  throw new Error("Invalid boolean input");
}

if (salary > 15 && age > 17 && age < 61 && haveBad == false) {
  alert("Được phép vay");
} else {
  alert("Không được phép vay");
}
