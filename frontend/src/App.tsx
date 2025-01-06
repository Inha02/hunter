import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import theme from "./styles/theme";
import Merchandise from "./components/Merchandise/Merchandise";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import SearchTab from "./components/SearchTab/SearchTab";
import Toggle from "./components/Toggle/Toggle";
import BotButton from "./components/BotButton/BotButton";
import Pagination from "./components/Pagination/Pagination";
import RadioGroup from "./components/RadioGroup/RadioGroup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Callback from "./naverCallback";

const App = () => {
  const deals: { id: string; price: string; date: string; conditionType: "best" | "good" | "average" | "bad" | "very_bad"; }[] = [
    { id: "1", price: "120,000", date: "2025.01.01", conditionType: "best" },
    { id: "2", price: "110,000", date: "2024.12.25", conditionType: "very_bad" },
    { id: "3", price: "100,000", date: "2024.12.20", conditionType: "average" },
  ];

  const handlePreviousClick = () => {
    console.log('이전 버튼 클릭');
  };

  const handleSubmitClick = () => {
    console.log('게시글 등록 버튼 클릭');
  };

  const categories = [
    "모빌리티",
    "냉장고",
    "전자제품",
    "책/문서",
    "기프티콘",
    "원룸/오피스텔",
    "기타",
  ];

  const conditions = [
    "미개봉 / 최상",
    "상태 좋음",
    "양호 / 보통",
    "상태 별로",
    "부품용 / 미작동",
  ];

  const handleCategoryChange = (selected: string | null) => {
    console.log("Selected category:", selected);
  };

  const handleConditionChange = (selected: string | null) => {
    console.log("Selected condition:", selected);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1); // 검색 시 페이지 초기화
  };

  const [currentPage, setCurrentPage] = useState(1);


  return (
    <><Router>
      <Routes>
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router><ThemeProvider theme={theme}>
        <Header isLoggedIn={false} />
        <Navigation />
        <SearchTab onSearch={handleSearchChange} />
        <Toggle />
        <BotButton
          onPreviousClick={handlePreviousClick}
          onSubmitClick={handleSubmitClick}
          previousLabel="이전"
          submitLabel="게시글 등록" />
        <RadioGroup options={categories} onChange={handleCategoryChange} />
        <RadioGroup options={conditions} onChange={handleConditionChange} />
        <Pagination
          totalPages={8}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)} />
        <Merchandise
          imageSrc="https://via.placeholder.com/320x240"
          title="블랙스미스 말리 R1"
          status="available"
          condition="good"
          price="120,000"
          sellerName="김철수"
          date="2025.01.01"
          deals={deals} />
        <Footer />
        <Home />
      </ThemeProvider></>
  );
};

export default App;