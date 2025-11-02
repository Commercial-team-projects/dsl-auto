
// routes/userRoutes.js
import express from 'express';

import { getUsers, getUserById, getUserByName, getUserByAge } from '../controllers/userController.js';
import { getUsersDB, getUserByIdDB, getUserByNameDB, getUserByEmailDB, updateUserNameDB, updateUserPasswordDB, createUserDB, deleteUserDB } from '../controllers/userControllerDB.js';

const router = express.Router();

//Working with file db by using array
router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.get('/name/:name', getUserByName);
router.get('/age/:age', getUserByAge);

//Working with mongodb by using mongoose
router.get('/usersdb', getUsersDB);
router.get('/userdb/:id', getUserByIdDB);
router.get('/namedb/:name', getUserByNameDB);
router.get('/emaildb/:email', getUserByEmailDB);

router.put('/userdb/:name', updateUserNameDB);
router.put('/userdb/:password', updateUserPasswordDB);
router.post('/userdb/:id', createUserDB);
router.delete('/userdb/:id', deleteUserDB);

// router.get('/user/:id/name/:name', (req, res)=>{
//     res.send(`<h1>User API name: ${req.params.name} , id: ${req.params.id}</h1>`)
// });
// router.post('/', (req, res) => {
//   res.send('Got a POST request')
// })
// router.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })
// router.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })

export default router;