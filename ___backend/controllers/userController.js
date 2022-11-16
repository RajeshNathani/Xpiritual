// const user = require('../models/user');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.createUser = async (req, res) => {
  const {name, email, password} = req.body;
  const isNewUser = await User.isThisEmailInUse(email);
  if (!isNewUser) {
    return res.json({
      success: false,
      message: 'Email is already in use try sign in',
    });
  }
  const user = await User({
    name,
    email,
    password,
  });
  await user.save();
  res.json(user);
};

exports.userSignIn = async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});

  if (!user)
    return res.json({
      success: false,
      message: 'User not found with given email',
    });

  const isMatch = await user.comparePassword(password);

  if (!isMatch)
    return res.json({success: false, message: 'email pass doesnt mathc'});

  const token = jwt.sign({userId: user._id}, process.env.JWT_Secret, {
    expiresIn: '1d',
  });
  res.json({success: true, user: user, token});
};
