import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';
import { hashPassword } from '../utils/hash.js';

const signUp = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({ message: 'Email, password, and name are required' });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists. Please sign in.' });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      email,
      name,
      password: hashedPassword
    });

 
};

export default signUp;
