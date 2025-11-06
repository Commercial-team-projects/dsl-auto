// routes/categoryRoutes.js

import express from 'express';
import { getCategoriesDB, getCategoryByIdDB } from '../controllers/categoryControllerDB.js';

const router = express.Router();

router.get('/categories', getCategoriesDB);
router.get('/categories/:id', getCategoryByIdDB);

export default router;