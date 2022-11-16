const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config()
exports.isAuth = async (req, res, next) => {

  if (req.headers && req.headers.authorization) {
   
    try {
      const token = req.headers.authorization.split(' ')[1];
      // console.log(token)
      const decode = jwt.verify(token, 'verysecret123');
      // console.log(decode.userId);
      const user = await User.findById(decode.userId);
      if (!user) {
        return res.json({success: false, message: 'Unauthorized access'});
      }
      res.user = user;

      next();
    } catch (error) {
      res.json({success: false, message: error.name});
    }
  } else {
    res.json({success: false, message: 'Unauthorizied access'});
  }
};
