// controllers/testimonialControllerDB.js

import testimonialMongoModel from '../models/testimonialMongoModel.js';

const createTestimonialDB = async (req, res) => {
  try {
    const testimonial = await testimonialMongoModel.createTestimonial(req.params.id, req.params.name, req.params.email, req.params.password, req.params.testimonial);
    if (!testimonial) {
      return res.status(404).json({ message: `Testimonial with email: ${email} not found` });
    }
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving testimonial', error: error.message });
  }
};

const getTestimonialsDB = async (req, res) => {
  try {
    const testimonials = await testimonialMongoModel.findTestimonials();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving testimonials', error: error.message });
  }
};
const getTestimonialByIdDB = async (req, res) => {
  try {
    const testimonial = await testimonialMongoModel.findTestimonialById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: `Testimonial with id: ${id} not found` });
    }
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving testimonial', error: error.message });
  }
};

const updateTestimonialDB = async (req, res) => {
  try {
    const testimonial = await testimonialMongoModel.updateTestimonial(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: `Testimonial with email: ${email} not found` });
    }
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving testimonial', error: error.message });
  }
};

const deleteTestimonialDB = async (req, res) => {
  try {
    const testimonial = await testimonialMongoModel.deletetestimonial(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: `Testimonial with email: ${email} not found` });
    }
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving testimonial', error: error.message });
  }
};

export {
  getTestimonialsDB,
  getTestimonialByIdDB,
  updateTestimonialDB,
  createTestimonialDB,
  deleteTestimonialDB
};
