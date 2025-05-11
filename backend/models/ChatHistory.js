import mongoose from 'mongoose';

const chatHistorySchema = new mongoose.Schema({
  chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat', required: true },
  sender: { type: String, enum: ['user', 'assistant', 'system'], required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('ChatHistory', chatHistorySchema);
