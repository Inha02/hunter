import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import SearchTab from "../components/SearchTab/SearchTab";
import Footer from "../components/Footer/Footer";

const Home: React.FC = () => {
  const [clickedCategory, setClickedCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string | null) => {
    setClickedCategory(category);
  };

  return (
    <HomeWrapper>
      <HeaderIntroWrapper>
        <Header />

        {/* Intro Section */}
        <IntroSection>
          <IntroText>
            KAIST 4천 학우의 내 손안의 캠퍼스 마켓, <Highlight>HUN:ter!</Highlight>
          </IntroText>
          <SubText>
            학생들을 위한, 학생들에 의한, 가장 효율적인 거래 플랫폼!
          </SubText>
          <ButtonWrapper>
            <ActionButton color="green">판매하기</ActionButton>
            <ActionButton color="blue">나의 거래</ActionButton>
          </ButtonWrapper>
        </IntroSection>
      </HeaderIntroWrapper>

      <SharedContainer>
        {/* Navigation */}
        <Navigation
          clickedCategory={clickedCategory}
          onCategoryChange={handleCategoryChange}
        />
        {/* Search Tab */}
        <SearchSection>
          <SearchTab onSearch={() => {}} />
        </SearchSection>
      </SharedContainer>

      <Footer />
    </HomeWrapper>
  );
};

export default Home;

// Styled Components
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  min-height: 100vh;
`;

const HeaderIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple[100]};
  width: 100%;
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
  border-radius: 12px;
  width: 100%;
  max-width: 1200px;
`;

const IntroText = styled.h1`
  font-size: ${({ theme }) => theme.typography.T2.size};
  font-weight: ${({ theme }) => theme.typography.T2.weight};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 8px;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const SubText = styled.p`
  font-size: ${({ theme }) => theme.typography.T4.size};
  color: ${({ theme }) => theme.colors.black};
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

const ActionButton = styled.button<{ color: "green" | "blue" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color, theme }) =>
    color === "green" ? theme.colors.green[500] : theme.colors.blue[500]};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  padding: 16px 24px;
  font-size: ${({ theme }) => theme.typography.T4.size};
  font-weight: ${({ theme }) => theme.typography.T4.weight};
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ color, theme }) =>
      color === "green" ? theme.colors.green[500] : theme.colors.blue[500]};
  }
`;

const SearchSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SharedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; /* 화면 전체 너비 */
  max-width: 1264px; /* 최대 너비를 지정 */
  margin: 0 auto; /* 가운데 정렬 */
  gap: 64px;
`;