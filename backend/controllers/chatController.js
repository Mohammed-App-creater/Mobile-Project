import Chat from '../models/Chat.js';
import ChatHistory from '../models/ChatHistory.js';
import { sendToGemini } from '../services/geminiClient.js';
const assistantResponse = await sendToGemini(prompt);
chat = await Chat.findOne({ _id: chatId, user: userId });
if (!chat) {
  return res.status(404).json({ error: 'Chat not found.' });
}

chat.updatedAt = Date.now();
await chat.save();

await ChatHistory.create({
  chat: chat._id,
  sender: 'user',
  message: prompt
});

const assistantResponse = await sendToGemini(prompt);

await ChatHistory.create({
  chat: chat._id,
  sender: 'assistant',
  message: assistantResponse
});

res.status(200).json({ chatId: chat._id, response: assistantResponse });
