// controllers/carControllerDB.js
import carMongoModel from '../models/carModelMongoDB.js';

const createCarDB = async (req, res) => {
  try {
    const { brand, model, price, rating } = req.body;

    const car = await carMongoModel.create({ brand, model, price, rating });
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error creating car', error: error.message });
  }
};

const getCarsDB = async (req, res) => {
  try {
    const cars = await carMongoModel.findCars();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cars', error: error.message });
  }
};

const getCarByIdDB = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await carMongoModel.findCarById(id);

    if (!car) {
      return res.status(404).json({ message: `Car with id: ${id} not found` });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving car', error: error.message });
  }
};

const updateCarPriceDB = async (req, res) => {
  try {
    const { id } = req.params;
    const { newPrice } = req.body;

    const car = await carMongoModel.updateCarPrice(
      id,
      { price: newPrice },
      { new: true }
    );

    if (!car) {
      return res.status(404).json({ message: `Car with id: ${id} not found` });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error updating car price', error: error.message });
  }
};

const deleteCarDB = async (req, res) => {
  try {
    const { id } = req.params;

    const car = await carMongoModel.deleteCar(id);
    if (!car) {
      return res.status(404).json({ message: `Car with id: ${id} not found` });
    }
    res.status(200).json({ message: 'Car deleted successfully', car });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting car', error: error.message });
  }
};

export {
  createCarDB,
  getCarsDB,
  getCarByIdDB,
  updateCarPriceDB,
  deleteCarDB
};