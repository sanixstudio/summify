const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'Authentication required.' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken.userId);

    if (!user) {
      return res.status(401).json({ message: 'Invalid user.' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = authMiddleware;
