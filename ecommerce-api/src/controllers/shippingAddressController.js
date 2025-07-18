import ShippingAddress from '../models/shippingAddress.js';

async function getShippingAddresss(req, res) {
  try {
    const shippingAddresss = await ShippingAddress.find().populate('category').sort({ name: 1 });
    res.json(shippingAddresss);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function getShippingAddressById(req, res) {
  try {
    const id = req.params.id;
    const shippingAddress = await ShippingAddress.findById(id).populate('category');
    if (!shippingAddress) {
      return res.status(404).json({ message: 'ShippingAddress not found' });
    }
    res.json(shippingAddress);
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function getShippingAddressByCategory(req, res) {
  try {
    const id = req.params.idCategory;
    const shippingAddresss = await ShippingAddress
      .find({ category: id })
      .populate('category')
      .sort({ name: 1 });
    if (shippingAddresss.length === 0) {
      return res.status(404).json({ message: 'No shippingAddresss found on this category' });
    }
    res.json(shippingAddresss);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function createShippingAddress(req, res) {
  try {
    const { name, description, price, stock, imagesUrl, category } = req.body;

    if (!name || !description || !price || !stock || !imagesUrl || !category) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newShippingAddress = await ShippingAddress.create({ name, description, price, stock, imagesUrl, category });
    res.status(201).json(newShippingAddress);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function updateShippingAddress(req, res) {
  try {
    const id = req.params.id;
    const { name, description, price, stock, imagesUrl, category } = req.body;

    if (!name || !description || !price || !stock || !imagesUrl || !category) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const updatedShippingAddress = await ShippingAddress.findByIdAndUpdate(id,
      { name, description, price, stock, imagesUrl, category },
      { new: true },
    );

    if (!updatedShippingAddress) {
      return res.status(404).json({ message: 'ShippingAddress not found' });
    }
    res.status(200).json(updatedShippingAddress);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function deleteShippingAddress(req, res) {
  try {
    const id = req.params.id;
    const deletedShippingAddress = await ShippingAddress.findByIdAndDelete(id);
    if (!deletedShippingAddress) {
      return res.status(404).json({ message: 'ShippingAddress not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error });
  }
}

export {
  getShippingAddresss,
  getShippingAddressById,
  getShippingAddressByCategory,
  createShippingAddress,
  updateShippingAddress,
  deleteShippingAddress,
}