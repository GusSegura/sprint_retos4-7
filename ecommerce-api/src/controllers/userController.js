import User from '../models/user.js';

async function getUsers(req, res) {
  try {
    const users = await User.find().populate('category').sort({ name: 1 });
    res.json(users);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function getUserById(req, res) {
  try {
    const id = req.params.id;
    const user = await User.findById(id).populate('category');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function getUserByCategory(req, res) {
  try {
    const id = req.params.idCategory;
    const users = await User
      .find({ category: id })
      .populate('category')
      .sort({ name: 1 });
    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found on this category' });
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function createUser(req, res) {
  try {
    const { name, description, price, stock, imagesUrl, category } = req.body;

    if (!name || !description || !price || !stock || !imagesUrl || !category) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newUser = await User.create({ name, description, price, stock, imagesUrl, category });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const { name, description, price, stock, imagesUrl, category } = req.body;

    if (!name || !description || !price || !stock || !imagesUrl || !category) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const updatedUser = await User.findByIdAndUpdate(id,
      { name, description, price, stock, imagesUrl, category },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error });
  }
}

export {
  getUsers,
  getUserById,
  getUserByCategory,
  createUser,
  updateUser,
  deleteUser,
}