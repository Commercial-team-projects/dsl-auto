// models/userModel.js

// In a real application, this would interact with a database
const users = [{ id: 1, name: "Mark", age: 1 }, 
  { id: 2, name: "Anna", age: 35 }, 
  { id: 3, name: "Andrei", age: 38 }]; 

const getAllUsers = () => {
  return users;
};

const getUserById = (id) => {
  return users.find(user => user.id === parseInt(id));
};
const getUserByName = (name) => {
  return users.find(user => user.name === name);
};
const getUserByAge = (age) => {
  return users.find(user => user.age === parseInt(age));
};

export default { getAllUsers, getUserById, getUserByName, getUserByAge };