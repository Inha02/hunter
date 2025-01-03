const express = require('express');
const cors = require('cors');
require("dotenv").config();
const request = require("request");

const app = express();
const PORT = 5001;

const client_id = process.env.NAVER_CLIENT_ID;
const client_secret = process.env.NAVER_CLIENT_SECRET;
const redirectURI = process.env.REDIRECT_URI;
const state = "RANDOM_STATE";

// Middleware 설정
app.use(cors());
app.use(express.json()); // JSON 요청을 처리

// 기본 라우트 설정
app.get('/', (req, res) => {
    res.send('Express 서버가 실행 중입니다!');
});

// API 예제 라우트
app.get('/api/example', (req, res) => {
    res.json({ message: 'API 요청 성공!' });
});

app.get("/naverlogin", (req, res) => {
    const api_url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id}&redirect_uri=${encodeURIComponent(
        redirectURI
    )}&state=${state}`;
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.end(
        `<a href="${api_url}"><img height="50" src="http://static.nid.naver.com/oauth/small_g_in.PNG"/></a>`
    );
});

// 콜백 처리
app.get("/callback", (req, res) => {
    const code = req.query.code;
    const state = req.query.state;
    const token_url = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${encodeURIComponent(
        redirectURI
    )}&code=${code}&state=${state}`;

    const options = {
        url: token_url,
        headers: {
            "X-Naver-Client-Id": client_id,
            "X-Naver-Client-Secret": client_secret,
        },
    };

    // Access Token 요청
    request.get(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const tokenInfo = JSON.parse(body);
            const accessToken = tokenInfo.access_token;

            // 사용자 정보 요청
            const user_info_url = "https://openapi.naver.com/v1/nid/me";
            const user_options = {
                url: user_info_url,
                headers: { Authorization: `Bearer ${accessToken}` },
            };

            request.get(user_options, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
                    res.end(body); // 사용자 정보 출력
                } else {
                    res.status(response.statusCode).end(`Error: ${response.statusCode}`);
                }
            });
        } else {
            res.status(response.statusCode).end(`Error: ${response.statusCode}`);
        }
    });
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
