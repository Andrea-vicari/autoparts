const express = require('express');
const multer = require("multer");
const path = require('path');
const Users = require('../models/UserModel');

const {signupUser, loginUser, seeAllUser, forgotPassword, resetPassword, getSingleUser} = require('../controllers/userController');


const router = express.Router();

const storage = multer.diskStorage({

    destination: function(req, file, cb){

        return cb(null, "./public/images")

    },
    filename: function(req, file, cb){
        return cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const uploadImage = multer({
    storage:storage
})

// See All
router.get('/', seeAllUser)

// See single user
router.get('/:id', getSingleUser);

// SignUp
router.post('/signup', signupUser);

// Login
router.post('/login', loginUser);

// Forgot password
router.post('/forgot-password', forgotPassword)

// Reset password
router.post('/reset-password/:token', resetPassword)

// Upload user profile
router.patch('/:id', uploadImage.single('file'), async (req, res)=>{

    /*
    if(req.file === undefined){
      return res.status(400).json({error: "Ehiii!! Upload an image please"})
    }
    */

    const { id } = req.params;

    // console.log(req.file.filename)
    console.log(id)



    const user = await Users.findByIdAndUpdate(id,{image:req.file.filename})
    // const user = await Users.create(id,{image:req.file.filename})

    if(!user){
        return res.status(400).json({error: "No WorkOut found"})
    }
    res.status(200).json(user);


})


module.exports = router;