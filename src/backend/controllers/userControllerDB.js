// controllers/userControllerDB.js

import userMongoModel from '../models/userMongoModel.js';

const getUsersDB = async (req, res) => {
  try {
    const users = await userMongoModel.findUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error: error.message });
  }
};
const getUserByIdDB = async (req, res) => {
  try {
    const user = await userMongoModel.findUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: `User with id: ${id} not found` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};
const getUserByNameDB = async (req, res) => {
  try {
    const user = await userMongoModel.findUserByName(req.params.name);
    if (!user) {
      return res.status(404).json({ message: `User with name: ${name} not found` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};
const getUserByEmailDB = async (req, res) => {
  try {
    const user = await userMongoModel.findUserByEmail(req.params.email);
    if (!user) {
      return res.status(404).json({ message: `User with email: ${email} not found` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};
const updateUserNameDB = async (req, res) => {
  try {
    const user = await userMongoModel.updateUserName(req.params.name);
    if (!user) {
      return res.status(404).json({ message: `User with email: ${email} not found` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};
const updateUserPasswordDB = async (req, res) => {
  try {
    const user = await userMongoModel.updateUserPassword(req.params.age);
    if (!user) {
      return res.status(404).json({ message: `User with email: ${email} not found` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};
const updateUserAgeDB = async (req, res) => {
  try {
    const user = await userMongoModel.updateUserAge(req.params.age);
    if (!user) {
      return res.status(404).json({ message: `User with email: ${email} not found` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};
const createUserDB = async (req, res) => {
  try {
    const user = await userMongoModel.createUser(req.params.id, req.params.name, req.params.age, req.params.email, req.params.password);
    if (!user) {
      return res.status(404).json({ message: `User with email: ${email} not found` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};
const deleteUserDB = async (req, res) => {
  try {
    const user = await userMongoModel.deleteUser(req.params.id);
    if (!user) {
      return res.status(404).json({ message: `User with email: ${email} not found` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};

export { 
  getUsersDB, 
  getUserByIdDB, 
  getUserByNameDB, 
  getUserByEmailDB, 
  updateUserAgeDB,
  updateUserNameDB, 
  updateUserPasswordDB,
  createUserDB, 
  deleteUserDB 
};
