let posts = [
  { id: 1, title: 'Hướng dẫn Node.js và Express', content: 'Nội dung bài viết về Express MVC...', thumbnailUrl: null },
  { id: 2, title: 'Thiết kế RESTful API chuẩn quốc tế', content: 'Nội dung hướng dẫn thiết kế REST API...', thumbnailUrl: null }
];

let nextId = 3;

export const getAll = () => {
  return [...posts];
};

export const findById = (id) => {
  return posts.find((p) => p.id === Number(id));
};

export const create = (data) => {
  const newPost = {
    id: nextId++,
    title: data.title,
    content: data.content,
    thumbnailUrl: data.thumbnailUrl || null
  };
  posts.push(newPost);
  return newPost;
};

export const deleteById = (id) => {
  const index = posts.findIndex((p) => p.id === Number(id));
  if (index !== -1) {
    const deleted = posts.splice(index, 1);
    return deleted[0];
  }
  return null;
};

export default {
  getAll,
  findById,
  create,
  deleteById
};
