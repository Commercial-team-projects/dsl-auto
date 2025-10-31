import mongoose from 'mongoose';

const dburi = 'mongodb+srv://username:q.KnAT927_Za3aM@cluster0.traqjrn.mongodb.net/?appName=Cluster0/myDatabase'

// 1. Connect to MongoDB

mongoose
    .connect(dburi)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// 2. Define a Schema
const testimonialSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    testimonial: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// 3. Create a Model from the Schema
// The first argument is the singular name of your collection (e.g., 'User' for 'users')
const Testimonial = mongoose.model('Testimonial', testimonialSchema);

// 4. Use the Model to interact with the database

async function createTestimonial(id, name, age, email, password, testimonial) {
    try {
        //const newUser = new User({ id, name, age, email, password, testimonial });
        const newTestimonial = new Testimonial({ id: 1, name: 'John Doe', age: 20, email: 'john2@example.com', password: 'password1234', testimonial: 'Автівка - вогонь!' });
        const savedTestimonial = await newTestimonial.save();
        console.log('Testimonial created:', savedTestimonial);
        return savedUser;
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

async function findTestimonials() {
    try {
        const testimonials = await Testimonial.find({}); // Find all users
        console.log('All testimonials:', testimonials);
        return testimonials;
    } catch (error) {
        console.error('Error finding testimonials:', error);
    }
}
async function findTestimonialById(id) {
    try {
        const testimonial = await Testimonial.findOne({ id });
        console.log('Testimonial found by id:', testimonial);
        return testimonial;
    } catch (error) {
        console.error('Error finding testimonial by id:', error);
    }
}

async function updateTestimonial(id, newTestimonial) {
    try {
        const updatedTestimonial = await Testimonial.findOneAndUpdate(
            { id },
            { testimonial: newTestimonial },
            { new: true } // Return the updated document
        );
        console.log('Testimonial updated:', updatedTestimonial);
        return updatedTestimonial;
    } catch (error) {
        console.error('Error updating testimonial:', error);
    }
}

async function deleteTestimonial(id) {
    try {
        const deletedTestimonial = await Testimonial.findOneAndDelete({ id });
        console.log('Testimonial deleted:', deletedTestimonial);
        return deletedTestimonial;
    } catch (error) {
        console.error('Error deleting testimonial:', error);
    }
}

export default {
    createTestimonial,
    findTestimonials,
    findTestimonialById,
    updateTestimonial,
    deleteTestimonial
};