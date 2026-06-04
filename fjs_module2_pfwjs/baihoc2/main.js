const student1 = {
  id: 0,
  name: "Nguyen Van Mot",
  age: 18,
  gender: "male",
};

const student2 = {
  id: 1,
  name: "Nguyen Thi Hai",
  age: 19,
  gender: "male",
};

let students = [student1, student2];
let nextId = students.length;

function viewStudents() {
  for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
  }
}

function addStudent() {
  const name = prompt("Nhap ten sinh vien:");
  const age = Number(prompt("Nhap tuoi sinh vien:"));
  const gender = prompt("Nhap gioi tinh sinh vien:");

  const newStudent = {
    id: nextId,
    name: name,
    age: age,
    gender: gender,
  };

  students.push(newStudent);
  nextId++;
  console.log("Da them sinh vien:", newStudent);
}

function deleteStudentById() {
  const id = Number(prompt("Nhap id sinh vien can xoa:"));

  const index = students.findIndex(function (student) {
    return student.id === id;
  });

  if (index === -1) {
    console.log("Khong tim thay sinh vien co id:", id);
    return;
  }

  const deletedStudent = students.splice(index, 1);
  console.log("Da xoa sinh vien:", deletedStudent[0]);
}
