// models/userModel.js
const users = []; // In a real application, this would interact with a database

exports.createUser = (user) => {
  users.push(user);
  return user;
};

exports.getAllUsers = () => {
  return users;
};
exports.getUserById = (id) => {
  return users.find(user => user.id === parseInt(id));
};

exports.update = (id) => {
  return users.find(user => user.id === parseInt(id));
};

exports.delete = (id) => {
  return users.find(user => user.id === parseInt(id));
};