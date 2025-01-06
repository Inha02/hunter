import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Merchandise from "../components/Merchandise/Merchandise";
import mockMerchandises from "../data/mockMerchandises"; // Import mock data
import SearchTab from "../components/SearchTab/SearchTab";
import Toggle from "../components/Toggle/Toggle";
import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/Footer/Footer";

const Content: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [searchQuery, setSearchQuery] = useState<string>(""); // 검색어 상태 관리
  const [showAvailableOnly, setShowAvailableOnly] = useState<boolean>(false); // 거래 가능 여부 상태 관리
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 상태 관리
  const itemsPerPage = 10; // 페이지당 아이템 수 (필요에 따라 조정)

  // 검색 콜백 함수
  const handleSearch = (query: string) => setSearchQuery(query);

  // 거래 가능 여부 토글 함수
  const handleToggle = () => setShowAvailableOnly(!showAvailableOnly);

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => setCurrentPage(page);

  // 카테고리, 검색어, 거래 가능 여부에 따른 필터링
  const filteredMerchandises = mockMerchandises.filter((item) => {
    const matchesCategory = item.category === category;
    const matchesQuery = searchQuery === "" || item.title.includes(searchQuery);
    const matchesAvailability =
      !showAvailableOnly || item.status === "available";
    return matchesCategory && matchesQuery && matchesAvailability;
  });

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredMerchandises.length / itemsPerPage);
  const paginatedMerchandises = filteredMerchandises.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <ContentWrapper>
      {/* 검색 및 필터 섹션 */}
      <FilterWrapper>
        <SearchTab onSearch={handleSearch} />
        <ToggleWrapper>
          <Toggle
            isOn={showAvailableOnly}
            onToggle={handleToggle}
          />
          <ToggleLabel>거래 가능만 보기</ToggleLabel>
        </ToggleWrapper>
      </FilterWrapper>

      {/* Merchandise 목록 */}
      {filteredMerchandises.length > 0 ? (
        <MerchandiseList>
          {paginatedMerchandises.map((item, index) => (
            <Merchandise key={index} {...item} />
          ))}
        </MerchandiseList>
      ) : (
        <NoContentMessage>해당 카테고리에 상품이 없습니다.</NoContentMessage>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <PaginationWrapper>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </PaginationWrapper>
      )}

      {/* Footer */}
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </ContentWrapper>
  );
};

export default Content;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  min-height: 100vh;
  width: 100%;
  padding: 32px 16px;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-bottom: 16px;
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ToggleLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.T4.size};
  color: ${({ theme }) => theme.colors.black};
`;

const MerchandiseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 80%;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;

const FooterWrapper = styled.div`
  width: 100%;
`;

const NoContentMessage = styled.div`
  font-size: ${({ theme }) => theme.typography.T3.size};
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: center;
  margin-top: 24px;
`;
