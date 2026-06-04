const studentList = [
  {
    id: 1,
    name: "Nguyen Van A",
    age: 18,
    gender: "male",
  },
  {
    id: 2,
    name: "Tran Thi B",
    age: 19,
    gender: "female",
  },
];

function logStudentList() {
  console.log("Danh sach sinh vien:", studentList);
}

function submitHandle(event) {
  event.preventDefault();

  const formEL = event.target;
  const data = getFormData(formEL.elements);

  const newStudent = {
    id: Number(data.id),
    name: data.name,
    age: Number(data.age),
    gender: data.gender,
  };

  studentList.push(newStudent);
  console.log("Them moi:", newStudent);
  console.log("Danh sach sinh vien:", studentList);

  formEL.reset();
}

function deleteStudent() {
  const id = Number(document.querySelector("[name='id']").value);
  const index = studentList.findIndex((student) => student.id === id);

  if (index === -1) {
    console.log("Khong tim thay sinh vien co id:", id);
    return;
  }

  const deletedStudent = studentList.splice(index, 1);
  console.log("Da xoa:", deletedStudent[0]);
  console.log("Danh sach sinh vien:", studentList);
}

function updateStudent() {
  const formEL = document.querySelector("form");
  const data = getFormData(formEL.elements);
  const id = Number(data.id);
  const index = studentList.findIndex((student) => student.id === id);

  if (index === -1) {
    console.log("Khong tim thay sinh vien co id:", id);
    return;
  }

  studentList[index] = {
    id,
    name: data.name,
    age: Number(data.age),
    gender: data.gender,
  };

  console.log("Da sua:", studentList[index]);
  console.log("Danh sach sinh vien:", studentList);
}
