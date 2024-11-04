const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const validator = require('validator')

const userSchema = new mongoose.Schema({
        username:{
        type: String,
        required: true
        },
        email:{
        type: String,
        required: true,
        unique:true
        },
        password:{
        type: String,
        required: true
        },
        image:{
            type: String,
            required: false,
            default: "file_1715325537969.png"
        }

},{ timestamps:true })

// Static SIGNUP method
userSchema.statics.signup = async function(email, password, username){

        // Validations
        if(!email || !password || !username){

        throw Error('All the fields must be filled')
        }
        if(!validator.isEmail(email)){
        throw Error('Email not valid')
        }
        if(!validator.isStrongPassword(password)){
        throw Error('Password not secure!')
        }

        const alreadyExists = await this.findOne({email})

        if(alreadyExists){

        throw Error('Email already registered')

        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);


        const user = await this.create({email, password:hash, username});

        return user

}

// Static LOGIN method
userSchema.statics.login = async function(email, password){

          // Validations
          if(!email || !password){
                throw Error('All fields must be filled')
         }

        const user = await this.findOne({email})

        if(!user){
        throw Error('Email not correct')
        }

        const match = await bcrypt.compare(password, user.password)

        if(!match){
        throw Error('Password not correct')
        }


        return user
}


module.exports = mongoose.model("User", userSchema);