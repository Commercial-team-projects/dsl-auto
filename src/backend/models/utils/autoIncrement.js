import Counter from '../Counter.js';

const getNextSequenceValue = async (sequenceName) => {
  const counter = await Counter.findByIdAndUpdate(
    { _id: sequenceName },
    { $inc: { seq: 1 } },
    { new: true, upsert: true } // Return the updated document, create if not exists
  );
  return counter.seq;
};

export default getNextSequenceValue;