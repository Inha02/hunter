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

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
          <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
