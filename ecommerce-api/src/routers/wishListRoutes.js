import express from 'express';
import {
  getWhishLists,
  getWhishListById,
  getWhishListByCategory,
  createWhishList,
  updateWhishList,
  deleteWhishList,
} from '../controllers/whishListController.js';

const router = express.Router();

router.get('/whishLists', getWhishLists);
router.get('/whishLists/category/:idCategory', getWhishListByCategory);
router.get('/whishLists/:id', getWhishListById);
router.post('/whishLists', createWhishList);
router.put('/whishLists/:id', updateWhishList);
router.delete('/whishLists/:id', deleteWhishList);

export default router;