import Chat from '../models/Chat.js';
import ChatHistory from '../models/ChatHistory.js';

export const getAllUserChatHistory = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get all chats for this user, sorted by updatedAt
    const chats = await Chat.find({ user: userId }).sort({ updatedAt: -1 });

    // Populate each chat with its history
    

    res.status(200).json(fullChatData);
  } catch (error) {
    
  }
};
