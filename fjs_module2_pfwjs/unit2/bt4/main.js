let user = prompt("Nhập Username :");
console.log(user);
let pass = prompt("Nhập Password :");
console.log(pass);

const adminUser = "Tuan";
const adminPass = "2802";

if (adminUser == user && adminPass == pass) {
  alert("Đăng nhập thành công");
} else {
  alert("Không thể đăng nhập");
}
