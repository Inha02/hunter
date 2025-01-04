import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import theme from "./styles/theme";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import SearchTab from "./components/SearchTab/SearchTab";
import Toggle from "./components/Toggle/Toggle";
import BotButton from "./components/BotButton/BotButton";
import Pagination from "./components/Pagination/Pagination";
import RadioGroup from "./components/RadioGroup/RadioGroup";

const App = () => {

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

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ThemeProvider theme={theme}>
        <Header isLoggedIn={false} />
        <Navigation />
        <SearchTab />
        <Toggle />
        <BotButton
          onPreviousClick={handlePreviousClick}
          onSubmitClick={handleSubmitClick}
          previousLabel="이전"
          submitLabel="게시글 등록"
        />
        <RadioGroup options={categories} onChange={handleCategoryChange} />
        <RadioGroup options={conditions} onChange={handleConditionChange} />
        <Pagination
          totalPages={8}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
        <Footer />
    </ThemeProvider>
  );
};

export default App;