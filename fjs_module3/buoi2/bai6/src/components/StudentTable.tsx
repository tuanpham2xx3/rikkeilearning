import { memo } from 'react';
import type { Student } from '../data/students';

type StudentTableProps = {
  students: Student[];
  onSelectStudent: (studentId: number) => void;
};

function StudentTable({ students, onSelectStudent }: StudentTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Họ tên</th>
          <th>Khóa học</th>
          <th>Trạng thái</th>
          <th>Điểm</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.course}</td>
            <td>{student.status === 'active' ? 'Đang học' : 'Tạm nghỉ'}</td>
            <td>{student.score}</td>
            <td>
              <button onClick={() => onSelectStudent(student.id)}>Xem</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default memo(StudentTable);
