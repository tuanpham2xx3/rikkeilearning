import { useSearchParams } from 'react-router-dom';

const courses = [
  'React cơ bản',
  'React TypeScript',
  'JavaScript nâng cao',
  'HTML CSS nền tảng',
  'NodeJS cơ bản',
  'Quản lý state với Context API',
];

function CourseList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') ?? '';

  const filteredCourses = courses.filter((course) =>
    course.toLowerCase().includes(keyword.toLowerCase()),
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextKeyword = event.target.value;

    if (!nextKeyword.trim()) {
      setSearchParams({});
      return;
    }

    setSearchParams({ keyword: nextKeyword });
  };

  return (
    <section className="course-box">
      <h1>Danh sách khóa học</h1>

      <input
        type="text"
        value={keyword}
        onChange={handleSearchChange}
        placeholder="Nhập từ khóa tìm kiếm"
      />

      <ul>
        {filteredCourses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>

      {filteredCourses.length === 0 && <p className="empty">Không tìm thấy khóa học phù hợp.</p>}
    </section>
  );
}

export default CourseList;
