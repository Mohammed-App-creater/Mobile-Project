import mongoose from 'mongoose';
const chatSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, maxlength: 255 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

chatSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('Chat', chatSchema);
