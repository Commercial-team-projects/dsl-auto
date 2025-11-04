import express from 'express';
import { getCarsDB, getCarByIdDB, updateCarPriceDB, createCarDB, deleteCarDB } from '../controllers/carControllerDB.js';


const router = express.Router();

router.get('/carsdb', getCarsDB);
router.get('/cardb/:id', getCarByIdDB);
router.post('/carcreatedb/', createCarDB);
router.put('/updatepricedb/:id', updateCarPriceDB);
router.delete('/cardeletedb/:id', deleteCarDB);


export default router;