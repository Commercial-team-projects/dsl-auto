// controllers/carControllerDB.js

import categoryMongoModel from '../models/categoryModelMongoDB.js';


const getCategoriesDB = async (req, res) => {
  try {
    const cars = await categoryMongoModel.findCategories();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving categories', error: error.message });
  }
};
const getCategoryByIdDB = async (req, res) => {
  try {
    const car = await categoryMongoModel.findCategoryById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: `category with id: ${id} not found` });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving category', error: error.message });
  }
};

export {
  getCategoriesDB,
  getCategoryByIdDB
};
