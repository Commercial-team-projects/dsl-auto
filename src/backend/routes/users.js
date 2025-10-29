import express from 'express';

import { getUsers, getUserById } from '../controllers/userController.js';

const router = express.Router();


router.get('/', getUsers);
router.get('/:id', getUserById)
// router.get('/:id', getUserById);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);

// export { createUsers, getUsers, getUserById, updateUser, deleteUser };
export default router;