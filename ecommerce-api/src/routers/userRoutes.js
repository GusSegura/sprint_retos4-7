import express from 'express';
import {
  getUsers,
  getUserById,
  getUserByCategory,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/category/:idCategory', getUserByCategory);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;