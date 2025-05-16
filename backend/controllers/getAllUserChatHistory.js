import Chat from '../models/Chat.js';
import ChatHistory from '../models/ChatHistory.js';

export const getAllUserChatHistory = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get all chats for this user, sorted by updatedAt
    const chats = await Chat.find({ user: userId }).sort({ updatedAt: -1 });

    // Populate each chat with its history
    const fullChatData = await Promise.all(
      chats.map(async (chat) => {
        const history = await ChatHistory.find({ chat: chat._id }).sort({ createdAt: 1 });

        return {
          chatId: chat._id,
          title: chat.title,
          createdAt: chat.createdAt,
          updatedAt: chat.updatedAt,
          history: history.map((entry) => ({
            sender: entry.sender,
            message: entry.message,
            createdAt: entry.createdAt,
          }))
        };
      })
    );

    res.status(200).json(fullChatData);
  } catch (error) {
    console.error('Error fetching chat history:', error);
    res.status(500).json({ error: 'Failed to fetch chat history.' });
  }
};
