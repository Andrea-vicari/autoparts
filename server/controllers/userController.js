const Users = require('../models/UserModel');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
var nodemailer = require('nodemailer');
const validator = require('validator')



const createToken = (_id) =>{
   return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//SignUp
const signupUser = async (req, res)=> {

    const {email, password, username } = req.body;

    try{
        const user = await Users.signup(email, password, username)

        // Token creation
        const token = createToken(user._id)

        const user_id = user._id

        let role = "user"


        res.status(200).json({email, token, user_id, role});
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

}

// Login
const loginUser = async (req, res)=> {

    const {email, password } = req.body;

    try{
        const user = await Users.login(email, password)

        // Token creation
        const token = createToken(user._id)
        const user_id = user._id


        res.status(200).json({email, token, user_id});

    }
    catch(error){
        res.status(400).json({error: error.message})
    }


}

// See single
const getSingleUser = async (req, res)=> {


    const { id } = req.params;
    const allUsers = await Users.find({"_id":id});
    res.status(200).json(allUsers)
}

// See all
const seeAllUser = async (req, res)=> {

    const allUsers = await Users.find({}).sort({createdAt: -1});
    res.status(200).json(allUsers)
}

const forgotPassword = async (req, res)=> {

    const {email} = req.body

    try{

        const user = await Users.findOne({email});

        if(!user){
            return res.status(400).json({error: "User not registered!!"})

        }



        // Token creation
        const token = createToken(user._id)



        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'andrea.vicari77@gmail.com',
              pass: 'arqv akbo tyhd zhzq'
            }
          });

          var mailOptions = {
            from: 'andrea.vicari77@gmail.com',
            to: email,
            subject: 'Reset password',
            text: 'Password reset requested from PulseFit - Click the link to reset your password' + ' '  + `https://autoparts-client.vercel.app/newpassword/${token}`
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
             res.status(200).json({message: "Added"})
              console.log('Email sent: ' + info.response);
              return
            }
          });
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

}

const resetPassword = async (req, res)=> {

      const {password} = req.body
      const {token} = req.body;

      console.log(token)


    if(!validator.isStrongPassword(password)){
        return res.status(400).json({error: "Password not secure"})
    }

    try{

        const decoded = jwt.verify(token, process.env.SECRET)
        const id = decoded._id

        console.log(id)

        const hashPassword = await bcrypt.hash(password, 10)

        await Users.findOneAndUpdate({_id: id}, {password: hashPassword})

        return res.json({status:true, message: "Updated password"})


    }
    catch(error){
        return res.json("Invalid token")
    }

}


module.exports = {
    signupUser, loginUser, seeAllUser, forgotPassword, resetPassword, getSingleUser
}
