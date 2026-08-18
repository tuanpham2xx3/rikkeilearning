import Employee from '../models/Employee.js';
import AppError from '../utils/AppError.js';

export const getEmployees = (req, res, next) => {
  try {
    const list = Employee.getAll();
    res.status(200).json({
      success: true,
      data: list
    });
  } catch (err) {
    next(err);
  }
};

export const getEmployeeById = (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = Employee.findById(id);
    if (!employee) {
      return next(new AppError(`Không tìm thấy nhân viên với ID ${id}`, 404));
    }
    res.status(200).json({
      success: true,
      data: employee
    });
  } catch (err) {
    next(err);
  }
};

export const createEmployee = (req, res, next) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return next(new AppError('Vui lòng cung cấp đầy đủ họ tên (name) và email', 400));
    }

    const existing = Employee.findByEmail(email);
    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'Email đã tồn tại'
      });
    }

    const newEmp = Employee.create({ name, email });
    res.status(201).json({
      success: true,
      message: 'Tạo nhân viên thành công',
      data: newEmp
    });
  } catch (err) {
    next(err);
  }
};

export const updateEmployeeAvatar = (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = Employee.findById(id);
    if (!employee) {
      return next(new AppError(`Không tìm thấy nhân viên với ID ${id}`, 404));
    }

    if (!req.file) {
      return next(new AppError('Vui lòng tải lên file ảnh qua trường "avatar"', 400));
    }

    const avatarUrl = `/uploads/${req.file.filename}`;
    const updated = Employee.updateAvatar(id, avatarUrl);

    res.status(200).json({
      success: true,
      message: 'Cập nhật ảnh đại diện thành công',
      data: updated
    });
  } catch (err) {
    next(err);
  }
};
