const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')
require ('dotenv').config();
const app = express();
const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_APISECRET,
    secure: false
});


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended:true, limit: '50mb'}));

console.log(cloudinary.config())

// const cookieParser = require('cookie-parser')
// const path = require('path');



//app.use(express.static(path.join(__dirname, 'public')));

console.log(process.cwd())

app.use(cors(
    {
        // Use this in production (DO NOT PUT FINAL SLASH!!) //
        // Important!!: Do not forget allowedHeaders
        origin: ["https://autoparts-client.vercel.app"],
        methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
        credentials: true,
        allowedHeaders: ['Content-Type'], // Specify allowed headers

    }
));

// app.use(cookieParser())

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => console.log(`Connected to DB and Listening on port ${process.env.PORT}`));
    })
    .catch((error)=>{
        console.log(error)
    })


const usersRoutes = require('./routes/users');
const componentiRoutes = require('./routes/componentiRoutes');
const veicoliRoutes = require('./routes/veicoliRoutes');

app.use('/api/users', usersRoutes)
app.use('/api/componenti', componentiRoutes)
app.use('/api/veicoli', veicoliRoutes)


