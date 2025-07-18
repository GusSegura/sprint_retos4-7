import express from 'express';
import {
  getReviews,
  getReviewById,
  getReviewByCategory,
  createReview,
  updateReview,
  deleteReview,
} from '../controllers/reviewController.js';

const router = express.Router();

router.get('/reviews', getReviews);
router.get('/reviews/category/:idCategory', getReviewByCategory);
router.get('/reviews/:id', getReviewById);
router.post('/reviews', createReview);
router.put('/reviews/:id', updateReview);
router.delete('/reviews/:id', deleteReview);

export default router;