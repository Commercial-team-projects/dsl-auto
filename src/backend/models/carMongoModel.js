import mongoose from 'mongoose';
import cars from '../db.json' with { type: 'json' };

const dburi = 'mongodb+srv://username:KnAT927_Za3aM@cluster0.traqjrn.mongodb.net/?appName=Cluster0/myDatabase'

// 1. Connect to MongoDB (replace with your connection string)

mongoose
    .connect(dburi)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// 2. Define a Schema
const carSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    specifications: {
        year: {
            type: String,
            required: true
        },
        engine: {
            fuel_type: {
                type: String,
                required: true
            },
            volume_l: {
                type: String,
                required: true
            },
        },
        drive_type: {
            type: String,
            required: true
        },
        transmission: {
            type: String,
            required: true
        },
        doors: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        country_of_origin: {
            type: String,
            required: true
        },        
    },
    advantages: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
});

// 3. Create a Model from the Schema
// The first argument is the singular name of your collection (e.g., 'Car' for 'cars')
const Car = mongoose.model('Car', carSchema);

// 4. Use the Model to interact with the database

// Create a new document
async function createCar(id, brand, model, year, specifications, advantages, description, price, rating) {
    try {
        const newCar = new Car(...cars[0]);
        // const newCar = new Car(id, brand, model, year, specifications, advantages, description, price, rating);
        const savedCar = await newCar.save();
        console.log('Car created:', savedCar);
        return savedCar;
    } catch (error) {
        console.error('Error creating Car:', error);
    }
}

// Find documents
async function findCars() {
    try {
        const cars = await Car.find({}); // Find all cars
        console.log('All cars:', cars);
        return cars;
    } catch (error) {
        console.error('Error finding cars:', error);
    }
}

// Find a single document by a specific field
async function findCarById(id) {
    try {
        const car = await Car.findOne({ id });
        console.log('Car found by id:', car);
        return car;
    } catch (error) {
        console.error('Error finding car by id:', error);
    }
}
async function findCarByBrand(brand) {
    try {
        const car = await Car.findOne({ brand });
        console.log('Car found by brand:', car);
        return car;
    } catch (error) {
        console.error('Error finding car by brand:', error);
    }
}

// Update a document
async function updateCarPrice(id, newPrice) {
    try {
        const updatedCar = await Car.findOneAndUpdate(
            { id },
            { price: newPrice },
            { new: true } // Return the updated document
        );
        console.log('Car updated:', updatedCar);
        return updatedCar;
    } catch (error) {
        console.error('Error updating car:', error);
    }
}

// Delete a document
async function deleteCar(id) {
    try {
        const deletedCar = await Car.findOneAndDelete({ id });
        console.log('Car deleted:', deletedCar);
        return deletedCar;
    } catch (error) {
        console.error('Error deleting car:', error);
    }
}

export default { 
    createCar, 
    findCars, 
    findCarById,
    findCarByBrand,
    updateCarPrice,
    deleteCar
};