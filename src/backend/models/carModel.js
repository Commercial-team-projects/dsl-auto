import cars from '../db.json' with { type: 'json' };

const getAllCars = () => {
  return cars;
};

const getCarById = (id) => {
  return cars.find(car => car.id === parseInt(id));
};

export default { getAllCars, getCarById };