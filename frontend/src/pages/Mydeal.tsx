// src/pages/Mydeal.tsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Merchandise from "../components/Merchandise/Merchandise";
import SearchTab from "../components/SearchTab/SearchTab";
import Toggle from "../components/Toggle/Toggle";
import Pagination from "../components/Pagination/Pagination";
import { useMerchandise } from "../context/MerchandiseContext";
import { MerchandiseProps, SearchDeal } from "../types"; // Import necessary types
import { useNavigate } from "react-router-dom";

const Mydeal: React.FC = () => {
  const navigate = useNavigate();
  const { merchandises } = useMerchandise();

  // Retrieve the current user's username from localStorage
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setCurrentUser(storedUsername);
    } else {
      // If no user is logged in, redirect to home or login page
      alert("로그인이 필요합니다!");
      navigate("/"); // Redirect to Home or Login page
    }
  }, [navigate]);

  // State management for search, filter, and pagination
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showAvailableOnly, setShowAvailableOnly] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Handle search input
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
  };

  // Handle toggle for availability
  const handleToggle = () => setShowAvailableOnly(!showAvailableOnly);

  // Handle page change for pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle Merchandise item click to navigate to its detail page
  const handleMerchandiseClick = (category: string, id: string) => {
    navigate(`/content/${category}/${id}`);
  };

  // Filter merchandises for Mydeal based on the current user
  const myDealItems: Array<{
    merchandise: MerchandiseProps;
    dealMode: "Buy" | "Sell";
    relevantDeals: SearchDeal[];
  }> = merchandises.reduce((acc, item) => {
    if (!currentUser) return acc; // If no user, do not process

    if (item.sellerName === currentUser) {
      // Sell deals: Items the user is selling
      acc.push({
        merchandise: item,
        dealMode: "Sell",
        relevantDeals: item.deals || [],
      });
    }

    // Buy deals: Items the user has inquired about
    const userDeals = (item.deals || []).filter(
      (deal: SearchDeal) => deal.user === currentUser
    );

    if (userDeals.length > 0) {
      acc.push({
        merchandise: item,
        dealMode: "Buy",
        relevantDeals: userDeals,
      });
    }

    return acc;
  }, [] as Array<{
    merchandise: MerchandiseProps;
    dealMode: "Buy" | "Sell";
    relevantDeals: SearchDeal[];
  }>);

  // Apply search and availability filters
  const filteredMyDealItems = myDealItems.filter(({ merchandise }) => {
    const matchesSearch =
      searchQuery === "" ||
      merchandise.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesAvailability =
      !showAvailableOnly || merchandise.status === "available";

    return matchesSearch && matchesAvailability;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredMyDealItems.length / itemsPerPage);
  const paginatedMyDealItems = filteredMyDealItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <MydealWrapper>
      <Header />

      <SharedContainer>
        <PageTitle>나의 거래</PageTitle>
        <SearchToggleWrapper>
          <SearchTab key={searchQuery} onSearch={handleSearch} />
          <ToggleWrapper>
            <ToggleLabel>거래 가능만 보기</ToggleLabel>
            <Toggle isOn={showAvailableOnly} onToggle={handleToggle} />
          </ToggleWrapper>
        </SearchToggleWrapper>
      </SharedContainer>

      {/* Merchandise 목록 */}
      {filteredMyDealItems.length > 0 ? (
        <MerchandiseList>
          {paginatedMyDealItems.map(({ merchandise, dealMode, relevantDeals }) => (
            <Merchandise
              key={merchandise.id}
              {...merchandise}
              dealMode={dealMode}
              deals={relevantDeals}
              onClick={() => handleMerchandiseClick(merchandise.category, merchandise.id)}
            />
          ))}
        </MerchandiseList>
      ) : (
        <NoContentMessage>거래 내역이 없습니다.</NoContentMessage>
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

      <Footer />
    </MydealWrapper>
  );
};

export default Mydeal;

// Styled Components
const MydealWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  width: 100%;
  min-height: 100vh;
`;

const SharedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  gap: 32px;
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.T1.size};
  font-weight: ${({ theme }) => theme.typography.T1.weight};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

const SearchToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
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
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
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
