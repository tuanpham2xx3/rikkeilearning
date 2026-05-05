let chuyencan = Number(prompt("Nhập điểm chuyên cần (%) :"));
console.log(chuyencan);
let diem = Number(prompt("Nhập điểm trung bình :"));
console.log(diem);
const inputPaper = prompt("Có giấy phép đặc biệt không ? :");
const value = inputPaper?.trim().toLowerCase();

let havePaper;
if (inputPaper === "có") {
  havePaper = true;
} else if (value === "không") {
  havePaper = false;
} else {
  alert("Chỉ được nhập Có hoặc Không");
  throw new Error("Invalid boolean input");
}

if ((chuyencan > 80 && diem >= 5) || havePaper == true) {
  alert("Được phép thi");
} else {
  alert("Không được phép thi");
}
