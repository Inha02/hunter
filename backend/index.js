const express = require('express');
const cors = require('cors');
require("dotenv").config();
const request = require("request");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();
const app = express();
const PORT = 5001;


// Middleware 설정
app.use(cors());
app.use(express.json()); // JSON 요청을 처리
app.use(bodyParser.json());

// 네이버 로그인 API 라우트
app.get("/auth/naver", (req, res) => {
    const baseUrl = "https://nid.naver.com/oauth2.0/authorize";
    const clientId = process.env.NAVER_CLIENT_ID;
    const redirectUri = encodeURIComponent(process.env.NAVER_CALLBACK_URL);
    const state = Math.random().toString(36).substring(2);

    console.log("Redirect URI:", redirectUri); // 디버깅용
    console.log("Generated State:", state);

    const url = `${baseUrl}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&state=${state}`;
    res.redirect(url);
});

// 네이버 콜백 처리
app.get("/auth/naver/callback", async (req, res) => {
    const { code, state } = req.query;

    try {
        const tokenResponse = await axios.get("https://nid.naver.com/oauth2.0/token", {
            params: {
                grant_type: "authorization_code",
                client_id: process.env.NAVER_CLIENT_ID,
                client_secret: process.env.NAVER_CLIENT_SECRET,
                code,
                state,
            },
        });

        const accessToken = tokenResponse.data.access_token;

        // 사용자 정보 가져오기
        const userResponse = await axios.get("https://openapi.naver.com/v1/nid/me", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        res.json(userResponse.data);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch user information." });
    }
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
