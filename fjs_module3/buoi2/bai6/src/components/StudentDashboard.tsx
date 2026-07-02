import { useCallback, useMemo, useState, type ChangeEvent } from 'react';
import { createStudents } from '../data/students';
import StudentTable from './StudentTable';

const students = createStudents(5000);

function StudentDashboard() {
  const [keyword, setKeyword] = useState('');
  const [courseFilter, setCourseFilter] = useState('all');
  const [checked, setChecked] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(null);

  const filteredStudents = useMemo(() => {
    console.log('Đang tính toán lại danh sách 5.000 học viên');

    const normalizedKeyword = keyword.trim().toLowerCase();

    return students.filter((student) => {
      const matchedKeyword =
        student.name.toLowerCase().includes(normalizedKeyword) ||
        student.course.toLowerCase().includes(normalizedKeyword);
      const matchedCourse = courseFilter === 'all' || student.course === courseFilter;

      return matchedKeyword && matchedCourse;
    });
  }, [keyword, courseFilter]);

  const visibleStudents = useMemo(() => {
    return filteredStudents.slice(0, 100);
  }, [filteredStudents]);

  const handleKeywordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }, []);

  const handleCourseChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setCourseFilter(event.target.value);
  }, []);

  const handleSelectStudent = useCallback((studentId: number) => {
    setSelectedStudentId(studentId);
  }, []);

  const handleToggleChecked = useCallback(() => {
    setChecked((currentChecked) => !currentChecked);
  }, []);

  return (
    <section className="dashboard">
      <div className="header">
        <div>
          <h1>Bảng điều khiển học viên</h1>
          <p>Đang hiển thị {filteredStudents.length} / 5.000 học viên</p>
        </div>
        <button onClick={handleToggleChecked}>
          {checked ? 'Đã kiểm tra' : 'Đánh dấu đã kiểm tra'}
        </button>
      </div>

      <div className="filters">
        <input
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="Tìm theo tên hoặc khóa học"
        />

        <select value={courseFilter} onChange={handleCourseChange}>
          <option value="all">Tất cả khóa học</option>
          <option value="React">React</option>
          <option value="TypeScript">TypeScript</option>
          <option value="NodeJS">NodeJS</option>
          <option value="HTML CSS">HTML CSS</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </div>

      {selectedStudentId && <p className="selected">Đang chọn học viên #{selectedStudentId}</p>}

      <div className="table-wrap">
        <StudentTable students={visibleStudents} onSelectStudent={handleSelectStudent} />
      </div>
    </section>
  );
}

export default StudentDashboard;
