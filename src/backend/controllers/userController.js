// controllers/userController.js
import userModel from '../models/userModel.js';

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await userModel.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error: error.message });
  }
};



const getUserById = async (req, res) => {
  try {
    const user = await userModel.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userModel.updateUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error updating user', error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await userModel.deleteUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error deleting user', error: error.message });
  }
};

export { getUsers, getUserById };