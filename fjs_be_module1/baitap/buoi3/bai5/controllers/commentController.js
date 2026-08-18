import Comment from '../models/Comment.js';
import Post from '../models/Post.js';
import AppError from '../utils/AppError.js';

export const createComment = (req, res, next) => {
  try {
    const { postId, text, author } = req.body;

    if (!postId || !text) {
      return next(new AppError('Mã bài viết (postId) và nội dung bình luận (text) là bắt buộc', 400));
    }

    // Kiểm tra tính toàn vẹn quan hệ: bài viết phải tồn tại
    const post = Post.findById(postId);
    if (!post) {
      return next(new AppError(`Không tìm thấy bài viết #${postId} để bình luận`, 404));
    }

    const newComment = Comment.create({ postId, text, author });
    res.status(201).json({
      success: true,
      message: 'Thêm bình luận thành công',
      data: newComment
    });
  } catch (err) {
    next(err);
  }
};
