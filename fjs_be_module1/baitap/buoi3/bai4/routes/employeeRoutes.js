import { Router } from 'express';
import {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployeeAvatar
} from '../controllers/employeeController.js';
import { uploadAvatar } from '../middlewares/upload.js';

const router = Router();

router.get('/', getEmployees);
router.post('/', createEmployee);
router.get('/:id', getEmployeeById);
router.post('/:id/avatar', uploadAvatar, updateEmployeeAvatar);

export default router;
