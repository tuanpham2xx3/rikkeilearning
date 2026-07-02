// // import type { typeStudent } from "./StudentManagement";

// export default function CreateStudentForm({
//   open,
//   useOpen,
//   addStudent,
// }: {
//   open: boolean;
//   useOpen: (value: boolean) => void;
//   addStudent: (newStudent: typeStudent) => void;
// }) {
//   return (
//     <>
//       {open && (
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();

//             const formData = new FormData(event.currentTarget);

//             const newStudent: typeStudent = {
//               id: Date.now(),
//               name: formData.get("studentName") as string,
//               age: +(formData.get("studentAge") as string),
//             };

//             console.log("Student mới:", newStudent);

//             addStudent(newStudent);

//             event.currentTarget.reset();

//             useOpen(false);
//           }}
//         >
//           <input name="studentName" placeholder="Nhập tên" />

//           <input name="studentAge" type="number" placeholder="Nhập tuổi" />

//           <button type="submit">Submit</button>
//         </form>
//       )}

//       <button
//         type="button"
//         onClick={() => {
//           useOpen(true);
//         }}
//       >
//         Hiện Form
//       </button>

//       <button
//         type="button"
//         onClick={() => {
//           useOpen(false);
//         }}
//       >
//         Ẩn Form
//       </button>
//     </>
//   );
// }
