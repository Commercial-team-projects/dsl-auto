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
const getUserByName = async (req, res) => {
  try {

    const user = await userModel.getUserByName(req.params.name);
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};
const getUserByAge = async (req, res) => {
  try {

    const user = await userModel.getUserByAge(req.params.age);
    // const user = await req.params.id;
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};

export { getUsers, getUserById, getUserByName, getUserByAge };