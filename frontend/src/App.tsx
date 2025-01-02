import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    axios.get('http://localhost:5001/api/example') // 백엔드 API URL
      .then((response) => {
        // 응답 데이터를 상태에 저장합니다.
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
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
