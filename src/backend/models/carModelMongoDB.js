import mongoose from './utils/db.js';


// 1. Connect to MongoDB (replace with your connection string)


// 2. Define a Schema
// --- Subschemas ---
const engineSchema = new mongoose.Schema({
    fuel_type: { type: String, required: true },
    volume_l: { type: String, required: true },
  });
  
  const specificationsSchema = new mongoose.Schema({
    engine: engineSchema,
    drive_type: { type: String, required: true },
    transmission: { type: String, required: true },
    doors: { type: String, required: true },
    color: { type: String, required: true },
    country_of_origin: { type: String, required: true },
  });
  
  // --- Main car schema ---
  const carSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    specifications: specificationsSchema,
    advantages: { type: [String], required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    stock: { type: String, required: true },
    custom: { type: String, required: true },
  }, { timestamps: true, versionKey: false });

// 3. Create a Model from the Schema
// The first argument is the singular name of your collection (e.g., 'Car' for 'cars')
const Car = mongoose.model('Car', carSchema);

// 4. Use the Model to interact with the database


// --- CRUD Operations ---

async function createCar(data) {
    try {
      const newCar = new Car(data);
      const savedCar = await newCar.save();
      console.log('Car created:', savedCar);
      return savedCar;
    } catch (error) {
      console.error('Error creating car:', error);
      throw error;
    }
  }
  
  async function findCars() {
    try {
      const cars = await Car.find({});
      console.log('All cars:', cars);
      return cars;
    } catch (error) {
      console.error('Error finding cars:', error);
      throw error;
    }
  }
  
  async function findCarById(id) {
    try {
      return await Car.findOne({ id });
    } catch (error) {
      console.error('Error finding car by id:', error);
      throw error;
    }
  }
  
  async function findCarByBrand(brand) {
    try {
      return await Car.findOne({ brand });
    } catch (error) {
      console.error('Error finding car by brand:', error);
      throw error;
    }
  }
  
  async function updateCarPrice(id, newPrice) {
    try {
      return await Car.findOneAndUpdate({ id }, { price: newPrice }, { new: true });
    } catch (error) {
      console.error('Error updating car:', error);
      throw error;
    }
  }
  
  async function deleteCar(id) {
    try {
      return await Car.findOneAndDelete({ id });
    } catch (error) {
      console.error('Error deleting car:', error);
      throw error;
    }
  }
  
  export default {
    createCar,
    findCars,
    findCarById,
    findCarByBrand,
    updateCarPrice,
    deleteCar,
  };