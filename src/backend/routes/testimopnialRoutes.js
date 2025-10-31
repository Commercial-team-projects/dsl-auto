
// routes/userRoutes.js
import express from 'express';
import { createTestimonialDB, deleteTestimonialDB, getTestimonialByIdDB, getTestimonialsDB, updateTestimonialDB } from '../controllers/testimonialControllerDB.js';

const router = express.Router();

//Working with mongodb by using mongoose
router.get('/:id', getTestimonialByIdDB);
router.get('/', getTestimonialsDB);

router.post('/updatedb/:id', updateTestimonialDB);
router.put('/createdb/:id', createTestimonialDB);
router.delete('/deletedb/:id', deleteTestimonialDB);

export default router;