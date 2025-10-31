// controllers/carControllerDB.js

import carMongoModel from '../models/carMongoModel.js';

const createCarDB = async (req, res) => {
  try {
    const car = await carMongoModel.createCar(
      req.params.id, 
      req.params.brand, 
      req.params.model, 
      req.params.price, 
      req.params.rating);
    if (!car) {
      return res.status(404).json({ message: `Car with id: ${id} not found` });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving car', error: error.message });
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
    const car = await carMongoModel.findCarById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: `car with id: ${id} not found` });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving car', error: error.message });
  }
};
const getCarByBrandDB = async (req, res) => {
  try {
    const car = await carMongoModel.findCarByBrand(req.params.brand);
    if (!car) {
      return res.status(404).json({ message: `Car with brandname: ${brand} not found` });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving car', error: error.message });
  }
};
const updateCarPriceDB = async (req, res) => {
  try {
    const car = await carMongoModel.updateCarPrice(req.params.id, newPrice);
    if (!car) {
      return res.status(404).json({ message: `Car with id: ${id} not found` });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving car', error: error.message });
  }
};
const deleteCarDB = async (req, res) => {
  try {
    const car = await carMongoModel.deleteCar(req.params.id);
    if (!car) {
      return res.status(404).json({ message: `Car with id: ${id} not found` });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving car', error: error.message });
  }
};

export { 
  getCarsDB, 
  getCarByIdDB, 
  getCarByBrandDB, 
  updateCarPriceDB,
  createCarDB, 
  deleteCarDB 
};
