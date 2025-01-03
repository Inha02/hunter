import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import NaverLoginButton from "./components/naverLoginButton";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  // 백엔드 API 호출
  useEffect(() => {
    axios.get('http://localhost:5001/api/example') // 백엔드 API URL
      .then((response) => {
        // 응답 데이터를 상태에 저장
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('API 요청 실패:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        <h1>React와 Express 연동</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message ? message : 'API에서 데이터를 가져오는 중...'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* 네이버 로그인 버튼 섹션 */}
      <section style={{ marginTop: "50px", textAlign: "center" }}>
        <h2>네이버 로그인</h2>
        <NaverLoginButton />
      </section>
    </div>
  );
};

export default App;