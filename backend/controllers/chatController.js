import Chat from '../models/Chat.js';
import ChatHistory from '../models/ChatHistory.js';
import { sendToGemini } from '../services/geminiClient.js';
const assistantResponse = await sendToGemini(prompt);