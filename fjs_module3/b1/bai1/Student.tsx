import { useEffect, useState } from "react";

interface typeStudent {
  id: number;
  name: string;
  age: number;
  phone: string;
}

export default function Student() {
  const [studentList, setStudentList] = useState<typeStudent[]>(
    JSON.parse(localStorage.getItem("studentList") ?? "[]"),
  );
  const [searchText, setSearchText] = useState("");

  function addStudent() {
    let newStudent: typeStudent = {
      id: Date.now(),
      name: prompt("nhập tên") as any,
      age: prompt("nhập tuổi") as any,
      phone: prompt("nhập số điện thoại") as any,
    };

    setStudentList([...studentList, newStudent]);
  }

  useEffect(() => {
    localStorage.setItem("studentList", JSON.stringify(studentList));
  }, [studentList]);

  return (
    <>
      <button
        onClick={() => {
          addStudent();
        }}
      >
        Thêm
      </button>
      <input
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        type="text"
        placeholder="Tìm theo tên"
      />

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>SĐT</th>
            <th>Công cụ</th>
          </tr>
        </thead>

        <tbody>
          {studentList
            .filter((stF) => stF.name.includes(searchText))
            .map((us) => (
              <tr key={us.id}>
                <td>{us.id}</td>
                <td>{us.name}</td>
                <td>{us.age}</td>
                <td>{us.phone}</td>

                <td>
                  <button
                    onClick={() => {
                      if (confirm("Chắc không?")) {
                        setStudentList(
                          studentList.filter((usF) => usF.id !== us.id),
                        );
                      }
                    }}
                  >
                    Xóa
                  </button>

                  <button
                    onClick={() => {
                      const editStudent: typeStudent = {
                        id: us.id,
                        name: prompt("Nhập tên", us.name) as any,
                        age: +(prompt("Nhập tuổi", us.age.toString()) as any),
                        phone: prompt("Nhập SĐT", us.phone) as any,
                      };

                      setStudentList(
                        studentList.map((usM) => {
                          if (usM.id === us.id) {
                            return editStudent;
                          }

                          return usM;
                        }),
                      );
                    }}
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export { Student };
