import Chat from '../models/Chat.js';
import ChatHistory from '../models/ChatHistory.js';
import { sendToGemini } from '../services/geminiClient.js';
const assistantResponse = await sendToGemini(prompt);
if (!chatId) {
  const title = prompt.length > 50 ? prompt.substring(0, 50) + '...' : prompt;
  chat = new Chat({
    user: userId,
    title,
  });
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

  return res.status(201).json({ chatId: chat._id, response: assistantResponse });
}
