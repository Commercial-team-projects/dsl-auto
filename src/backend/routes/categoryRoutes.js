import express from 'express';
import { getCategoriesDB, getCategoryByIdDB } from '../controllers/categoryControllerDB.js';

const router = express.Router();

router.get('/', getCategoriesDB);
router.get('/:id', getCategoryByIdDB);

export default router;