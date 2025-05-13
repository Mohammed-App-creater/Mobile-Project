import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

// Replace this with your actual secret or use process.env.JWT_SECRET
const JWT_SECRET = process.env.JWT_SECRET ;

const jwtValidator = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // Check if token exists and follows "Bearer <token>" format
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided or invalid format' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // attach user payload to request
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export default jwtValidator;
