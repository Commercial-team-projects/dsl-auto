// controllers/userControllerDB.js

import userMongoModel from '../models/userModelMongoDB.js';

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
      return res.status(404).json({ message: `User with id: ${req.params.id} not found` });
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
      return res.status(404).json({ message: `User with name: ${req.params.name} not found` });
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
      return res.status(404).json({ message: `User with email: ${req.params.email} not found` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};
const updateUserNameDB = async (req, res) => {
  try {
    const { email, name } = req.body;
    const user = await userMongoModel.updateUserName(email, name);
    if (!user) {
      return res.status(404).json({ message: `User with email: ${req.params.email} not found` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};

const updateUserPasswordDB = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userMongoModel.updateUserPassword(email, password);
    if (!user) {
      return res.status(400).json({ message: `User could not be created` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};

const createUserDB = async (req, res) => {
  try {
    const { name, age, email, password } = req.body;
    const user = await userMongoModel.createUser(name, age, email, password);
    if (!user) {
      return res.status(404).json({ message: `User with email: ${email} not found` });
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};
const deleteUserDB = async (req, res) => {
  try {
    const user = await userMongoModel.deleteUser(req.params.email);
    if (!user) {
      return res.status(404).json({ message: `User with email: ${req.params.email} not found` });
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
  updateUserNameDB,
  updateUserPasswordDB,
  createUserDB,
  deleteUserDB
};
