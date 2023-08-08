const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = async (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('Not authenticated');
    error.statusCode = 401;
    next(error);
  }
  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'secretKey');
    const email = decodedToken?.email;
    const userDetails = await User.findOne({ email });
    console.log(userDetails.isAdmin);
    if (!userDetails.isAdmin || !decodedToken || !req.body.email || req.body.email !== email) {
      const error = new Error("Not Authenticated Admin");
      next(error);
    } else {
      next();
    }
  } catch (err) {
    err.statusCode = 401;
    next(err);
  }
  req.email = decodedToken.email;
}