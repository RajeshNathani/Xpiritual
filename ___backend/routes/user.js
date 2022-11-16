
const {check, validationResult} = require('express-validator')
const express = require('express');
const {createUser, userSignIn} = require('../controllers/userController');
const { validateUserSignIn, validateUserSignUp, userValidation } = require('../middlerware/validation/userValidate');
const { isAuth } = require('../middlerware/auth');

const router = express.Router();

router.post('/RegisterUser',createUser );
router.post('/signIn',validateUserSignIn,userSignIn)

 router.post('/CreatePost' , isAuth, (req,res)=>{
    res.send('Welcome you are in secreet route')
 } )

module.exports = router;
