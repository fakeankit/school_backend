const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');
app.use(cors());
dotenv.config();
app.use(express.json());

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to mongo DB");
    } catch (error) {
        console.log(error);
    }
}

app.listen("5000", () => {
    connect();
    console.log("server is running at port 5000");
})