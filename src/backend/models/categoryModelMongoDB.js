import mongoose from './utils/db.js';


// 1. Connect to MongoDB (replace with your connection string)

// 2. Define a Schema
const categorySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
});

// 3. Create a Model from the Schema
// The first argument is the singular name of your collection (e.g., 'Category' for 'categories')
const Category = mongoose.model('Category', categorySchema);

// 4. Use the Model to interact with the database

// Create a new document
async function createCategory(id, name) {
    try {
        //const newCategory = new Category({ id, name });
        const newCategory = new Category([{id:1, name: 'Japan'}, {id:2, name: 'German'},{id:3, name: 'American'}]);
        const savedCategory = await newCategory.save();
        console.log('User created:', savedCategory);
        return savedCategory;
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

// Find documents
async function findCategories() {
    try {
        const categories = await Category.find({}); // Find all users
        console.log('All categories:', categories);
        return categories;
    } catch (error) {
        console.error('Error finding categories:', error);
    }
}

// Find a single document by a specific field
async function findCategoryById(id) {
    try {
        const category = await User.findOne({ id });
        console.log('Category found by id:', category);
        return category;
    } catch (error) {
        console.error('Error finding category by id:', error);
    }
}

// Update a document
async function updateCategory(email, newAge) {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { age: newAge },
            { new: true } // Return the updated document
        );
        console.log('User updated:', updatedUser);
        return updatedUser;
    } catch (error) {
        console.error('Error updating user:', error);
    }
}

// Delete a document
async function deleteCategory(email) {
    try {
        const deletedUser = await User.findOneAndDelete({ email });
        console.log('User deleted:', deletedUser);
        return deletedUser;
    } catch (error) {
        console.error('Error deleting user:', error);
    }
}

export default { 
    createCategory, 
    findCategories, 
    findCategoryById, 
    updateCategory,
    deleteCategory
};