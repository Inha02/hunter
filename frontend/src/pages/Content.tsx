import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Merchandise from "../components/Merchandise/Merchandise";
import mockMerchandises from "../data/mockMerchandises"; // Import mock data
import SearchTab from "../components/SearchTab/SearchTab";
import Toggle from "../components/Toggle/Toggle";
import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";

const HomeContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = useParams<{ category: string }>();
  const searchParams = new URLSearchParams(location.search);
  const initialSearchQuery = searchParams.get("search") || "";

  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery); // 검색어 상태 관리
  const [showAvailableOnly, setShowAvailableOnly] = useState<boolean>(false); // 거래 가능 여부 상태 관리
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 상태 관리
  const [clickedCategory, setClickedCategory] = useState<string | null>(category || null); // Navigation 클릭 상태 관리
  const itemsPerPage = 10; // 페이지당 아이템 수

  // 검색 콜백 함수
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      navigate(`/content/all?search=${encodeURIComponent(query)}`); // 검색어와 함께 이동
    }
  };

  // 거래 가능 여부 토글 함수
  const handleToggle = () => setShowAvailableOnly(!showAvailableOnly);

  // category 또는 toggle 상태 변경 시 1페이지로 이동
  useEffect(() => {
    setCurrentPage(1);
  }, [clickedCategory, showAvailableOnly]);

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => setCurrentPage(page);

  // 카테고리, 검색어, 거래 가능 여부에 따른 필터링
  const filteredMerchandises = mockMerchandises.filter((item) => {
    const matchesCategory =
      clickedCategory === "all" || !clickedCategory || item.category === clickedCategory;
    const matchesQuery = searchQuery === "" || item.title.includes(searchQuery);
    const matchesAvailability = !showAvailableOnly || item.status === "available";
    return matchesCategory && matchesQuery && matchesAvailability;
  });

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredMerchandises.length / itemsPerPage);
  const paginatedMerchandises = filteredMerchandises.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Merchandise 클릭 시 이동 함수
  const handleMerchandiseClick = (category: string, id: number) => {
    navigate(`/content/${category}/${id}`);
  };

  return (
    <ContentWrapper>
      <Header />

      <SharedContainer>
        {/* Intro Section */}
        {!category && (
          <IntroSection>
            <IntroText>
              KAIST 4천 학우의 내 손안의 캠퍼스 마켓, <Highlight>HUN:ter!</Highlight>
            </IntroText>
            <SubText>학생들을 위한, 학생들에 의한, 가장 효율적인 거래 플랫폼!</SubText>
            <ButtonWrapper>
              <ActionButton color="green">판매하기</ActionButton>
              <ActionButton color="blue">나의 거래</ActionButton>
            </ButtonWrapper>
          </IntroSection>
        )}

        {/* 검색 및 필터 섹션 */}
        <Navigation
          clickedCategory={clickedCategory}
          onCategoryChange={setClickedCategory}
        />
        <SearchToggleWrapper>
          <SearchTab onSearch={handleSearch} />
          <ToggleWrapper>
            <ToggleLabel>거래 가능만 보기</ToggleLabel>
            <Toggle isOn={showAvailableOnly} onToggle={handleToggle} />
          </ToggleWrapper>
        </SearchToggleWrapper>
      </SharedContainer>

      {/* Merchandise 목록 */}
      {filteredMerchandises.length > 0 ? (
        <MerchandiseList>
          {paginatedMerchandises.map((item) => (
            <Merchandise
              key={item.id}
              {...item}
              onClick={() => handleMerchandiseClick(item.category, item.id)} // Add click handler
            />
          ))}
        </MerchandiseList>
      ) : (
        <NoContentMessage>해당 카테고리에 상품이 없습니다.</NoContentMessage>
      )}

      {/* Pagination */}
      {totalPages >= 1 && (
        <PaginationWrapper>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </PaginationWrapper>
      )}

      <Footer />
    </ContentWrapper>
  );
};

export default HomeContent;

// Styled Components
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  width: 100%; /* 전체 너비를 차지 */
  min-width: 960px; /* 추가: 최소 너비 제한 */
  min-height: 100vh;
`;

const SharedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; /* 화면 전체 너비 */
  max-width: 1264px; /* 최대 너비를 지정 */
  margin: 0 auto; /* 가운데 정렬 */
  gap: 64px;
`;

const SearchToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px; /* 위아래 간격 */
  width: 100%; /* SharedContainer의 너비를 상속받음 */
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 16px;
`;

const ToggleLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.T5.size};
  color: ${({ theme }) => theme.colors.black};
`;

const MerchandiseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;

const NoContentMessage = styled.div`
  font-size: ${({ theme }) => theme.typography.T3.size};
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: center;
  margin-top: 24px;
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
  background-color: ${({ color, theme }) =>
    color === "green" ? theme.colors.green[500] : theme.colors.blue[500]};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  padding: 16px 24px;
  font-size: ${({ theme }) => theme.typography.T4.size};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ color, theme }) =>
      color === "green" ? theme.colors.green[500] : theme.colors.blue[500]};
  }
`;
