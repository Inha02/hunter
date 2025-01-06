import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BotButton from "../components/BotButton/BotButton";
import mockMerchandises from "../data/mockMerchandises";
import Status from "../components/Block/Status";
import Condition from "../components/Block/Condition";

const Item: React.FC = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const item = mockMerchandises.find(
    (merchandise) =>
      merchandise.category === category && merchandise.id === Number(id)
  );

  if (!item) {
    return (
      <div>
        <Header />
        <ErrorWrapper>Item not found.</ErrorWrapper>
        <Footer />
      </div>
    );
  }

  const handlePreviousClick = () => {
    navigate(-1);
  };

  const handleContactClick = () => {
    alert(`판매자 ${item.sellerName}님과 연락합니다.`);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 < item.imageSrc.length ? prevIndex + 1 : 0
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : item.imageSrc.length - 1
    );
  };

  return (
    <ItemWrapper>
      <Header />
      <ContentWrapper>
        {/* Image Slider */}
        <ImageSlider>
          {item.imageSrc.length > 0 ? (
            <>
              {item.imageSrc.length > 1 && (
                <ImageButton position="left" onClick={handlePreviousImage}>
                  {"<"}
                </ImageButton>
              )}
              <img src={item.imageSrc[currentImageIndex]} alt={`${item.title}`} />
              {item.imageSrc.length > 1 && (
                <ImageButton position="right" onClick={handleNextImage}>
                  {">"}
                </ImageButton>
              )}
            </>
          ) : (
            <NoImageWrapper>No Image</NoImageWrapper>
          )}
        </ImageSlider>

        {/* Details Section */}
        <DetailWrapperBackground>
          <DetailWrapper>
            <Title>{item.title}</Title>
            <StatusConditionWrapper>
              <Status type={item.status} />
              <Condition type={item.condition} />
            </StatusConditionWrapper>
            <Price>{item.price}원</Price>
            <SellerInfo>
              <span>👤 {item.sellerName}</span>
              <span>{item.date}</span>
            </SellerInfo>
            <Description>{item.description}</Description>
          </DetailWrapper>
        </DetailWrapperBackground>

        {/* Buttons */}
        <BotButton
          onPreviousClick={handlePreviousClick}
          onSubmitClick={handleContactClick}
          previousLabel="이전"
          submitLabel="연락하기"
        />
      </ContentWrapper>
      <Footer />
    </ItemWrapper>
  );
};

export default Item;

// Styled Components
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  gap: 64px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;
`;

const ImageSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 800px;
  height: 400px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 12px;
  }
`;

const ImageButton = styled.button<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;

  ${({ position }) => (position === "left" ? "left: 10px;" : "right: 10px;")}

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const NoImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.typography.T3.size};
  color: ${({ theme }) => theme.colors.gray[600]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

const DetailWrapperBackground = styled.div`
  background-color: white;
  width: 100%;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 80%; /* 전체 폭의 80% */
  margin: 0 auto; /* 가운데 정렬 */
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.T2.size};
  font-weight: ${({ theme }) => theme.typography.T2.weight};
`;

const StatusConditionWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.typography.T3.size};
  font-weight: ${({ theme }) => theme.typography.T3.weight};
  color: ${({ theme }) => theme.colors.black};
`;

const SellerInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.T4.size};
  color: ${({ theme }) => theme.colors.black};
`;

const ErrorWrapper = styled.div`
  text-align: center;
  margin-top: 64px;
  font-size: ${({ theme }) => theme.typography.T3.size};
  color: ${({ theme }) => theme.colors.red[500]};
`;
