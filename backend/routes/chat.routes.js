import express from "express";
import { sendPrompt } from "../controllers/chatController.js";
import jwtValidator  from "../middlewares/jwtValidator.js";


const router = express.Router();


router.post("/send-prompt", jwtValidator, sendPrompt);


export default router;
