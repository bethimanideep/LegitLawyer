require('dotenv').config();
const express = require('express');
const path = require("path")
const fs = require("fs");
const handlebars = require("handlebars");
const passport = require("passport");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());
const cors = require("cors");
const { connection, usermodel } = require('./db');
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/status/:email', async (req, res) => {
    let email = req.params.email
    res.send('Hello, World!');
});

// app.post('/signup', async (req, res) => {
//     let { name, email, password, role } = req.body
//     console.log(name, email, password, role);
//     let obj = {
//         name,
//         email,
//         password,
//         role,
//         status: false
//     }
//     let user = new usermodel(obj)
//     await user.save()
//     const directory = path.join(__dirname, "..", "backend", "verify.html");
//     console.log(directory)
//     const fileRead = fs.readFileSync(directory, "utf-8");
//     const template = handlebars.compile(fileRead);
//     const htmlToSend = template({ name, email });
//     let mailOptions = {
//         from: process.env.USER_EMAIL,
//         to: email,
//         subject: "Verify Account",
//         html: htmlToSend,
//     };
//     nodemailer
//         .createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.USER_EMAIL,
//                 pass: process.env.USER_PASS,
//             },
//         })
//         .sendMail(mailOptions, async (err, info) => {
//             if (info) {
//                 console.log(info);
//             } else {
//                 console.log(err);
//             }
//         });
//     res.send('Hello, World!');
// });

// //GoogleAuth
// var GoogleStrategy = require('passport-google-oauth20').Strategy;
// passport.use(new GoogleStrategy({
//     clientID: process.env.googleclientid,
//     clientSecret: process.env.googlesecret,
//     callbackURL: "http://localhost:8080/auth/google/callback",
//     profileFields: ['id', 'displayName', 'picture', 'email']
// },

//     async function (req, accessToken, refreshToken, profile, cb) {
//         console.log(profile);
//         return cb(null, profile);
//     }
// ));
// app.get('/auth/google',
//     passport.authenticate('google', { scope: ['profile', 'email'] }));
// app.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/login', session: false }),
//     function (req, res) {
//         // Successful authentication, redirect home.
//         res.redirect('/');
//     }
// );




app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("connected to db");
    } catch (error) {
        console.log(error);
    }
    console.log(`Server running on port ${process.env.PORT}`);
});
