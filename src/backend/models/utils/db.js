import mongoose from 'mongoose';
import dburi from './config.js';

mongoose.connect(dburi)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

export default mongoose;