import Review from '../models/review.js';

async function getReviews(req, res) {
  try {
    const reviews = await Review.find().populate('category').sort({ name: 1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function getReviewById(req, res) {
  try {
    const id = req.params.id;
    const review = await Review.findById(id).populate('category');
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function getReviewByCategory(req, res) {
  try {
    const id = req.params.idCategory;
    const reviews = await Review
      .find({ category: id })
      .populate('category')
      .sort({ name: 1 });
    if (reviews.length === 0) {
      return res.status(404).json({ message: 'No reviews found on this category' });
    }
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function createReview(req, res) {
  try {
    const { name, description, price, stock, imagesUrl, category } = req.body;

    if (!name || !description || !price || !stock || !imagesUrl || !category) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newReview = await Review.create({ name, description, price, stock, imagesUrl, category });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function updateReview(req, res) {
  try {
    const id = req.params.id;
    const { name, description, price, stock, imagesUrl, category } = req.body;

    if (!name || !description || !price || !stock || !imagesUrl || !category) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const updatedReview = await Review.findByIdAndUpdate(id,
      { name, description, price, stock, imagesUrl, category },
      { new: true },
    );

    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function deleteReview(req, res) {
  try {
    const id = req.params.id;
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error });
  }
}

export {
  getReviews,
  getReviewById,
  getReviewByCategory,
  createReview,
  updateReview,
  deleteReview,
}