const mongoose = require("mongoose")
require('dotenv').config();
const connection = mongoose.connect(process.env.DATABASE)
const schema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        }
    }

    , {
        versionKey: false
    })
const usermodel = mongoose.model("userdetails", schema)
module.exports = {
    usermodel,
    connection
}