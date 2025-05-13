import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: { type: String, maxlength: 100 },
  email: { type: String, unique: true, maxlength: 100 },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
