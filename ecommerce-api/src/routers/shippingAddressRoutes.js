import express from 'express';
import {
  getShippingAdresss,
  getShippingAdressById,
  getShippingAdressByCategory,
  createShippingAdress,
  updateShippingAdress,
  deleteShippingAdress,
} from '../controllers/shippingAdressController.js';

const router = express.Router();

router.get('/shippingAdresss', getShippingAdresss);
router.get('/shippingAdresss/category/:idCategory', getShippingAdressByCategory);
router.get('/shippingAdresss/:id', getShippingAdressById);
router.post('/shippingAdresss', createShippingAdress);
router.put('/shippingAdresss/:id', updateShippingAdress);
router.delete('/shippingAdresss/:id', deleteShippingAdress);

export default router;