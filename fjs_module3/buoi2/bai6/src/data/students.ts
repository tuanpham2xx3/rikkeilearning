export type Student = {
  id: number;
  name: string;
  course: string;
  status: 'active' | 'inactive';
  score: number;
};

const courses = ['React', 'TypeScript', 'NodeJS', 'HTML CSS', 'JavaScript'];

export function createStudents(total: number): Student[] {
  return Array.from({ length: total }, (_, index) => {
    const id = index + 1;
    const course = courses[index % courses.length];

    return {
      id,
      name: `Học viên ${id}`,
      course,
      status: id % 4 === 0 ? 'inactive' : 'active',
      score: 50 + (id % 51),
    };
  });
}
