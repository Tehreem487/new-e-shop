import Product from "../models/Product.js";

// GET all products
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// ADD product
export const addProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
};