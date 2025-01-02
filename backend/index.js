const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;

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

// 서버 실행
app.listen(PORT, () => {
    console.log(`백엔드 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
