import WhishList from '../models/whishList.js' //'../models/whishList.js';

async function getWhishLists(req, res) {
  try {
    const whishLists = await WhishList.find().populate('category').sort({ name: 1 });
    res.json(whishLists);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function getWhishListById(req, res) {
  try {
    const id = req.params.id;
    const whishList = await WhishList.findById(id).populate('category');
    if (!whishList) {
      return res.status(404).json({ message: 'WhishList not found' });
    }
    res.json(whishList);
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function getWhishListByCategory(req, res) {
  try {
    const id = req.params.idCategory;
    const whishLists = await WhishList
      .find({ category: id })
      .populate('category')
      .sort({ name: 1 });
    if (whishLists.length === 0) {
      return res.status(404).json({ message: 'No whishLists found on this category' });
    }
    res.json(whishLists);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function createWhishList(req, res) {
  try {
    const { name, description, price, stock, imagesUrl, category } = req.body;

    if (!name || !description || !price || !stock || !imagesUrl || !category) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newWhishList = await WhishList.create({ name, description, price, stock, imagesUrl, category });
    res.status(201).json(newWhishList);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function updateWhishList(req, res) {
  try {
    const id = req.params.id;
    const { name, description, price, stock, imagesUrl, category } = req.body;

    if (!name || !description || !price || !stock || !imagesUrl || !category) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const updatedWhishList = await WhishList.findByIdAndUpdate(id,
      { name, description, price, stock, imagesUrl, category },
      { new: true },
    );

    if (!updatedWhishList) {
      return res.status(404).json({ message: 'WhishList not found' });
    }
    res.status(200).json(updatedWhishList);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function deleteWhishList(req, res) {
  try {
    const id = req.params.id;
    const deletedWhishList = await WhishList.findByIdAndDelete(id);
    if (!deletedWhishList) {
      return res.status(404).json({ message: 'WhishList not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error });
  }
}

export {
  getWhishLists,
  getWhishListById,
  getWhishListByCategory,
  createWhishList,
  updateWhishList,
  deleteWhishList,
}