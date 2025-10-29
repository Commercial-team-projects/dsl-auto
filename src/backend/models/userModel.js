// models/userModel.js

// import mongoose, { Schema } from 'mongoose';
// const userSchema = new Schema({
//   // ... your schema definition
// });

// export const userModel = mongoose.model('User', userSchema);
const users = [{ id: 1, user: "Mark" }, { id: 2, user: "Anna" }, { id: 3, user: "Andrei" }]; // In a real application, this would interact with a database

const getAllUsers = () => {
  return users;
};

const createUser = (user) => {
  users.push(user);
  return user;
};


const getUserById = (id) => {
  return users.find(user => user.id === parseInt(id));
};

const updateUserM = (id) => {
  return users.find(user => user.id === parseInt(id));
};

const deleteUserM = (id) => {
  return users.find(user => user.id === parseInt(id));
};

// export { getAllUsersM };
export default { getAllUsers, getUserById };