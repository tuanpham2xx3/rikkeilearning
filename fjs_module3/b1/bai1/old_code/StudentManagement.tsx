// import { useEffect, useState } from "react";
// import StudentRecord from "./StudentRecord";
// import CreateStudentForm from "./CreateStudentForm";

// export interface typeStudent {
//   id: number;
//   name: string;
//   age: number;
// }

// export default function StudentManagement() {
//   const [studentList, setStudentList] = useState<typeStudent[]>(
//     JSON.parse(localStorage.getItem("studentList") ?? "[]"),
//   );
//   const [open, useOpen] = useState(false);

//   function addStudent(newStudent: typeStudent) {
//     setStudentList([...studentList, newStudent]);
//   }

//   function deleteStudent(id: number) {
//     setStudentList(studentList.filter((stF) => stF.id !== id));
//   }

//   function updateStudent(us: typeStudent) {
//     const editStudent: typeStudent = {
//       id: us.id,
//       name: prompt("Nhập tên", us.name) as any,
//       age: +(prompt("Nhập tuổi", us.age.toString()) as any),
//     };

//     setStudentList(
//       studentList.map((stM) => {
//         if (stM.id === us.id) {
//           return editStudent;
//         }

//         return stM;
//       }),
//     );
//   }

//   useEffect(() => {
//     localStorage.setItem("studentList", JSON.stringify(studentList));
//   }, [studentList]);

//   return (
//     <>
//       <table border={1}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>NAME</th>
//             <th>AGE</th>
//             <th>TOOLS</th>
//           </tr>
//         </thead>

//         <tbody>
//           {studentList.map((student) => (
//             <StudentRecord
//               key={student.id}
//               student={student}
//               deleteStudent={deleteStudent}
//               updateStudent={updateStudent}
//             />
//           ))}
//         </tbody>
//       </table>
//       <CreateStudentForm
//         open={open}
//         useOpen={useOpen}
//         addStudent={addStudent}
//       />
//     </>
//   );
// }
