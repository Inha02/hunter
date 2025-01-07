// src/App.tsx
import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";
import Item from "./pages/Item";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Sell from "./pages/Sell";

import KakaoCallback from "./pages/kakaoCallback";

import { MerchandiseProvider } from "./context/MerchandiseContext";
import Mydeal from "./pages/Mydeal";
import { AuthProvider } from "./components/Header/Header";


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AuthProvider>
        <MerchandiseProvider>
          <Router>
            <Routes>
              {/* 홈 페이지 */}
              <Route path="/" element={<Home />} />
              {/* 카테고리별 콘텐츠 페이지 */}
              <Route path="/content/:category" element={<Content />} />
              {/* 아이템 상세 페이지 */}
              <Route path="/content/:category/:id" element={<Item />} />
              {/* 판매하기 페이지 */}
              <Route path="/sell" element={<Sell />} />
              {/* 나의 거래 페이지 */}
              <Route path="/mydeal" element={<Mydeal />} />
              <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
              {/* Catch-all route for undefined paths */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </MerchandiseProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

const NotFound: React.FC = () => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>404 - 페이지를 찾을 수 없습니다.</h1>
  </div>
);

export default App;
