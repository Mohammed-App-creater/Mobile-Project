import Chat from '../models/Chat.js';
import ChatHistory from '../models/ChatHistory.js';
import { sendToGemini } from '../services/geminiClient.js';


export const sendPrompt = async (req, res) => {
  try {
    const userId = req.user.id;
    const { prompt, chatId } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required.' });
    }

    let chat;

    // If no chatId provided, create a new chat
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

      // Send prompt to Gemini AI (replace this with actual Gemini API logic)
      const assistantResponse = await sendToGemini(prompt);

      await ChatHistory.create({
        chat: chat._id,
        sender: 'assistant',
        message: assistantResponse
      });

      return res.status(201).json({ chatId: chat._id, response: assistantResponse });
    }

    // Existing chat
    chat = await Chat.findOne({ _id: chatId, user: userId });
    if (!chat) {
      return res.status(404).json({ error: 'Chat not found.' });
    }

    // Update chat's updatedAt
    chat.updatedAt = Date.now();
    await chat.save();

    await ChatHistory.create({
      chat: chat._id,
      sender: 'user',
      message: prompt
    });

    // Send prompt to Gemini
    const assistantResponse = await sendToGemini(prompt);

    await ChatHistory.create({
      chat: chat._id,
      sender: 'assistant',
      message: assistantResponse
    });

    res.status(200).json({ chatId: chat._id, response: assistantResponse });

  } catch (error) {
    console.error('Error sending prompt:', error);
    res.status(500).json({ error: 'Server error.' });
  }
};
