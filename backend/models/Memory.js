const mongoose = require('mongoose');

const memorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  key: { type: String, maxlength: 100 },
  value: { type: String },
  updatedAt: { type: Date, default: Date.now }
});

memorySchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('Memory', memorySchema);
