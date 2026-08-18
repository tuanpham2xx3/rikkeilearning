let employees = [
  { id: 1, name: 'Tran Hoang Nam', email: 'nam.tran@company.vn', avatarUrl: null },
  { id: 2, name: 'Le Thi Huong', email: 'huong.le@company.vn', avatarUrl: null }
];

let nextId = 3;

export const getAll = () => {
  return [...employees];
};

export const findById = (id) => {
  return employees.find((emp) => emp.id === Number(id));
};

export const findByEmail = (email) => {
  return employees.find((emp) => emp.email.toLowerCase() === email.toLowerCase());
};

export const create = (data) => {
  const newEmp = {
    id: nextId++,
    name: data.name,
    email: data.email,
    avatarUrl: data.avatarUrl || null
  };
  employees.push(newEmp);
  return newEmp;
};

export const updateAvatar = (id, avatarUrl) => {
  const emp = employees.find((e) => e.id === Number(id));
  if (emp) {
    emp.avatarUrl = avatarUrl;
    return emp;
  }
  return null;
};

export default {
  getAll,
  findById,
  findByEmail,
  create,
  updateAvatar
};
