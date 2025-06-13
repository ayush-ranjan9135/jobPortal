// middleware/clerkAuth.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protectUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ 
      success: false, 
      message: 'Not authorized, no token provided' 
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    // IMPORTANT: Use Clerk's public key for verification
    const decoded = jwt.verify(token, process.env.CLERK_PUBLISHABLE_KEY, {
      algorithms: ['RS256'] // Clerk uses RS256 algorithm
    });
    
    // Find user based on Clerk's user ID
    const user = await User.findOne({ clerkUserId: decoded.sub });
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Token verification error:', error); // Add logging
    return res.status(401).json({ 
      success: false, 
      message: 'Not authorized, token failed',
      error: error.message // Include error details for debugging
    });
  }
};