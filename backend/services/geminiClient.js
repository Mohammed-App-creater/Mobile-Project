import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Store your API key in .env
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export const sendToGemini = async (prompt) => {
  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const candidates = response.data?.candidates;
    const content = candidates?.[0]?.content?.parts?.[0]?.text;

    return content || 'No response from Gemini.';
  } catch (err) {
    console.error('Gemini API error:', err.response?.data || err.message);
    return 'Error communicating with Gemini API.';
  }
};
