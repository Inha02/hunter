const express = require('express');
const cors = require('cors');
require("dotenv").config();
const request = require("request");

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const axios = require("axios");
const User = require("./models/User");
const querystring = require("querystring");

dotenv.config();
const app = express();
const PORT = 5001;


// Middleware 설정
app.use(cors());
app.use(express.json()); // JSON 요청을 처리
app.use(bodyParser.json());

const mongoose = require("mongoose");

// MongoDB 연결
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
