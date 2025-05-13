import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';
import { comparePassword } from '../utils/hash.js';

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });

  } catch (error) {
    console.error('SignIn Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default signIn;
