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

    await newUser.save();

    const token = generateToken(newUser);
    const payload = { id: newUser._id, email: newUser.email };

    res.status(201).json({ token, user: payload });
  } catch (error) {
    console.error('SignUp Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default signUp;
