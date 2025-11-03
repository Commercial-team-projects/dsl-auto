import express from 'express';
import { getCarsDB, getCarByIdDB } from '../controllers/carControllerDB.js';


const router = express.Router();

router.get('/', getCarsDB);
router.get('/:id', getCarByIdDB);

export default router;