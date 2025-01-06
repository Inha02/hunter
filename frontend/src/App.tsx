import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";
import theme from "./styles/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* 홈 페이지 */}
          <Route path="/" element={<Home />} />
          {/* 카테고리별 콘텐츠 페이지 */}
          <Route path="/content/:category" element={<Content />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
