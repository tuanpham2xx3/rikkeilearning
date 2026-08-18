import { Router } from 'express';
import { createComment } from '../controllers/commentController.js';
import { authenticate } from '../middlewares/auth.js';

const router = Router();

router.post('/', authenticate, createComment);

export default router;
