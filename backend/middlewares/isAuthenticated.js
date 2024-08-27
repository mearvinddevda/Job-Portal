import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }
    
    // Verify token
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "Invalid token",
          success: false,
        });
      }
      
      // Attach user ID to request object
      req.id = decoded.userId;
      next();
    });
    
  } catch (error) {
    console.error("Authentication middleware error:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export default isAuthenticated;
