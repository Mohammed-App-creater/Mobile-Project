import express from 'express';
const router = express.Router();
import  signIn from '../controllers/signIn.js';
import  signUp from '../controllers/signUp.js';

router.post('/sign-in', signIn);
router.post('/sign-up', signUp);


export default router;

