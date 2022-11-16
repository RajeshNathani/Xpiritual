const {check, validationResult} = require('express-validator');

exports.validateUserSignUp = [
  check('name').trim().not().isEmpty(),
  check('email').normalizeEmail().isEmail().withMessage('Invalid Email'),
  check('password')
    .trim()
    .not()
    .isEmpty()
    .isLength({min: 8, max: 20})
    .withMessage('Password should be at least 8 charecters'),
  check('confirmPassword')
    .trim()
    .not()
    .isEmpty()
    .custom((value, {req}) => {
      if (value !== req.body.password) {
        throw new Error('Both password must be same');
      }
      return true;
    }),
];

exports.userValidation = (req, res, next) => {
  const result = validationResult(req).array();
  if (!result.length) {
    return next();
  }
  const error = result[0].msg;
  res.json({success: false, message: error});
};

exports.validateUserSignIn = [
  check('email').trim().isEmail().withMessage('Email/Password is wrong'),
  check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email/password is required!'),
];
