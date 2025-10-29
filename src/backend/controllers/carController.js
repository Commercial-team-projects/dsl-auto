import carModel from "../models/carModel.js";

const getCars = async (req, res) => {
  try {
    const cars = await carModel.getAllCars();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cars', error: error.message });
  }
};

const getCarById = async (req, res) => {
  try {
    const car = await carModel.getCarById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving car', error: error.message });
  }
};

export { getCars, getCarById };