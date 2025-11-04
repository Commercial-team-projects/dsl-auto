// src/backend/models/seedCars.js
import mongoose from '../models/utils/db.js';
import carMongoModel from './carModelMongoDB.js';
import cars from '../db.json' with { type: 'json' };

async function seedCars() {
  try {
    console.log('🚀 Starting car data seeding...');

    // ✅ Wait for mongoose connection
    await mongoose.connection.asPromise();

    // Get all collections and check if "cars" exists
    const collections = await mongoose.connection.db.listCollections().toArray();
    const hasCarsCollection = collections.some((c) => c.name === 'cars');

    if (hasCarsCollection) {
      await mongoose.connection.db.dropCollection('cars');
      console.log('🧹 Existing "cars" collection dropped.');
    } else {
      console.log('ℹ️ No existing "cars" collection found.');
    }

    // ✅ Insert cars safely
    for (const car of cars) {
      try {
        await carMongoModel.createCar(car);
        console.log(`✅ Inserted car: ${car.brand} ${car.model}`);
      } catch (err) {
        console.error(`❌ Error inserting car ${car.id}:`, err.message);
      }
    }

    console.log(`🎉 Seeding complete! Total cars inserted: ${cars.length}`);
  } catch (error) {
    console.error('❌ Error during seeding:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 MongoDB connection closed.');
  }
}

seedCars();