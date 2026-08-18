import { Router } from 'express';
import { getPosts, getPostById, createPost, deletePost } from '../controllers/postController.js';
import { authenticate, authorize } from '../middlewares/auth.js';
import { uploadThumbnail } from '../middlewares/upload.js';

const router = Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', authenticate, uploadThumbnail, createPost);
router.delete('/:id', authenticate, authorize('admin'), deletePost);

export default router;
