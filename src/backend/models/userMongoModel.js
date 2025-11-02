import mongoose from 'mongoose';

const dburi = 'mongodb+srv://username:q.KnAT927_Za3aM@cluster0.traqjrn.mongodb.net/?appName=Cluster0/myDatabase'

// 1. Connect to MongoDB (replace with your connection string)

mongoose
    .connect(dburi)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// 2. Define a Schema
const userSchema = new mongoose.Schema({
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
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// 3. Create a Model from the Schema
// The first argument is the singular name of your collection (e.g., 'User' for 'users')
const User = mongoose.model('User', userSchema);

// 4. Use the Model to interact with the database

// Create a new document
async function createUser(id, name, age, email, password) {
    try {
        const newUser = new User({ id, name, age, email, password });
        //const newUser = new User({id:2, name: 'John Doe', age: 20, email: 'john2@example.com', password: 'password1234'});
        const savedUser = await newUser.save();
        console.log('User created:', savedUser);
        return savedUser;
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

// Find documents
async function findUsers() {
    try {
        const users = await User.find({}); // Find all users
        console.log('All users:', users);
        return users;
    } catch (error) {
        console.error('Error finding users:', error);
    }
}
// Find a single document by a specific field
async function findUserById(id) {
    try {
        const user = await User.findOne({ id });
        console.log('User found by id:', user);
        return user;
    } catch (error) {
        console.error('Error finding user by id:', error);
    }
}
async function findUserByName(name) {
    try {
        const user = await User.findOne({ name });
        console.log('User found by name:', user);
        return user;
    } catch (error) {
        console.error('Error finding user by name:', error);
    }
}
async function findUserByEmail(email) {
    try {
        const user = await User.findOne({ email });
        console.log('User found by email:', user);
        return user;
    } catch (error) {
        console.error('Error finding user by email:', error);
    }
}

// Update a document
async function updateUserName(email, newName) {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { name: newName },
            { new: true } // Return the updated document
        );
        console.log('User updated:', updatedUser);
        return updatedUser;
    } catch (error) {
        console.error('Error updating user:', error);
    }
}
async function updateUserPassword(email, newPassword) {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { password: newPassword },
            { new: true } // Return the updated document
        );
        console.log('User updated:', updatedUser);
        return updatedUser;
    } catch (error) {
        console.error('Error updating user:', error);
    }
}

// Delete a document
async function deleteUser(email) {
    try {
        const deletedUser = await User.findOneAndDelete({ email });
        console.log('User deleted:', deletedUser);
        return deletedUser;
    } catch (error) {
        console.error('Error deleting user:', error);
    }
}

// Example usage:
// (async () => {
//   await createUser('Alice Smith', 'alice@example.com', 30);
// await findUsers();
//   await findUserByEmail('alice@example.com');
//   await updateUserAge('alice@example.com', 31);
//   await deleteUser('bob@example.com');
//   await findUsers(); // Verify deletion
// mongoose.disconnect();
// console.log('MongoDB disconnected.');
// })();

export default {
    createUser,
    findUsers,
    findUserById,
    findUserByName,
    findUserByEmail,
    updateUserName,
    updateUserPassword,
    deleteUser
};