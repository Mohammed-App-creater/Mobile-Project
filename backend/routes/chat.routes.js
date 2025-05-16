import express from "express";
import { sendPrompt } from "../controllers/chatController.js";
import jwtValidator  from "../middlewares/jwtValidator.js";
import { getAllUserChatHistory } from "../controllers/getAllUserChatHistory.js";

const router = express.Router();


router.post("/send-prompt", jwtValidator, sendPrompt);
router.get('/history', jwtValidator, getAllUserChatHistory);

export default router;
