import Post from '../models/Post.js';
import Comment from '../models/Comment.js';
import AppError from '../utils/AppError.js';

export const getPosts = (req, res, next) => {
  try {
    const posts = Post.getAll();
    res.status(200).json({
      success: true,
      data: posts
    });
  } catch (err) {
    next(err);
  }
};

export const getPostById = (req, res, next) => {
  try {
    const { id } = req.params;
    const post = Post.findById(id);
    if (!post) {
      return next(new AppError(`Không tìm thấy bài viết #${id}`, 404));
    }

    const comments = Comment.findByPostId(id);
    res.status(200).json({
      success: true,
      data: {
        ...post,
        comments
      }
    });
  } catch (err) {
    next(err);
  }
};

export const createPost = (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return next(new AppError('Vui lòng nhập tiêu đề (title) và nội dung (content)', 400));
    }

    const thumbnailUrl = req.file ? `/uploads/${req.file.filename}` : null;
    const newPost = Post.create({ title, content, thumbnailUrl });

    res.status(201).json({
      success: true,
      message: 'Tạo bài viết thành công',
      data: newPost
    });
  } catch (err) {
    next(err);
  }
};

export const deletePost = (req, res, next) => {
  try {
    const { id } = req.params;
    const post = Post.findById(id);
    if (!post) {
      return next(new AppError(`Không tìm thấy bài viết #${id}`, 404));
    }

    // 1. Xóa bài viết
    Post.deleteById(id);

    // 2. Cascade Delete: Tự động xóa toàn bộ comments thuộc bài viết này
    const deletedCommentsCount = Comment.deleteByPostId(id);

    res.status(200).json({
      success: true,
      message: `Đã xóa bài viết #${id} và ${deletedCommentsCount} bình luận liên quan (Cascade Delete thành công)`
    });
  } catch (err) {
    next(err);
  }
};
