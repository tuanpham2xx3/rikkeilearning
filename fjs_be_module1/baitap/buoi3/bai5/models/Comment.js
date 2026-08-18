let comments = [
  { id: 1, postId: 1, author: 'HocVienA', text: 'Bài viết rất chi tiết!' },
  { id: 2, postId: 1, author: 'HocVienB', text: 'Cảm ơn tác giả nhiều.' },
  { id: 3, postId: 2, author: 'HocVienC', text: 'Mong có thêm bài về GraphQL.' }
];

let nextId = 4;

export const create = (data) => {
  const newComment = {
    id: nextId++,
    postId: Number(data.postId),
    author: data.author || 'Ẩn danh',
    text: data.text
  };
  comments.push(newComment);
  return newComment;
};

export const findByPostId = (postId) => {
  return comments.filter((c) => c.postId === Number(postId));
};

export const deleteByPostId = (postId) => {
  const initialLength = comments.length;
  comments = comments.filter((c) => c.postId !== Number(postId));
  return initialLength - comments.length; // Trả về số lượng comment đã xóa cascade
};

export default {
  create,
  findByPostId,
  deleteByPostId
};
