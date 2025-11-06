
// routes/userRoutes.js
import express from 'express';
import { createTestimonialDB, deleteTestimonialDB, getTestimonialByIdDB, getTestimonialsDB, updateTestimonialDB } from '../controllers/testimonialControllerDB.js';

const router = express.Router();

router.get('/testimonialsdb', getTestimonialsDB);
router.get('/testimonialsdb/:id', getTestimonialByIdDB);
router.post('/testimonialupdatedb/:id', updateTestimonialDB);
router.put('/testimonialcreatedb/:id', createTestimonialDB);
router.delete('/testimonialdeletedb/:id', deleteTestimonialDB);

export default router;