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

const DataBase = process.env.MONGO_URI
// MongoDB 연결
mongoose
    .connect(DataBase, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));


app.post("/api/users", async (req, res) => {
    const { User_ID, User_NICKNAME } = req.body;

    console.log("받은 데이터:", { User_ID, User_NICKNAME });
    console.log("User_ID:", User_ID, "User_NICKNAME:", User_NICKNAME);

    if (!User_ID || !User_NICKNAME) {
        return res.status(400).json({ message: "User_ID 또는 User_NICKNAME이 누락되었습니다." });
    }

    try {
        // 사용자 데이터 저장
        const user = new User({ User_ID, User_NICKNAME });
        await user.save();
        res.status(201).json({ message: "사용자 데이터 저장 성공" });
    } catch (error) {
        console.error("데이터 저장 오류:", error);
        res.status(500).json({ message: "사용자 데이터 저장 실패" });
    }
});

app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find(); // 모든 사용자 데이터 조회
        res.status(200).json(users);    // JSON 형식으로 반환
    } catch (error) {
        console.error("데이터 조회 오류:", error);
        res.status(500).json({ message: "사용자 데이터 조회 실패" });
    }
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
