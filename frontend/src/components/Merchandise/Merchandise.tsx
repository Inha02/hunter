// src/components/Merchandise/Merchandise.tsx
import React from "react";
import * as S from "./Merchandise.styles";
import Status from "../../components/Block/Status";
import Condition from "../../components/Block/Condition";
import Deals from "../Deals/Deals";
import { MerchandiseProps } from "../../types";

interface ExtendedMerchandiseProps extends MerchandiseProps {
  dealMode?: "Buy" | "Sell" | "Search" | "ItemDetail";
}

const Merchandise: React.FC<ExtendedMerchandiseProps> = ({
  imageSrc,
  title,
  status,
  condition,
  price,
  sellerName,
  date,
  description,
  deals = [],
  onClick,
  dealMode,
}) => {
  // Fallback to "Search" if no mode is provided
  const finalMode = dealMode || "Search";

  return (
    <S.MerchandiseWrapper
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <S.ContentWrapper>
        {/* Left: Image */}
        <S.ImageWrap>
          {imageSrc.length > 0 ? (
            <img src={imageSrc[0]} alt={title} />
          ) : (
            <S.NoImage>No Image</S.NoImage>
          )}
        </S.ImageWrap>

        {/* Center: Item Details */}
        <S.DetailsWrapper>
          <S.Title title={title}>{title}</S.Title>
          <S.StatusConditionWrapper>
            <Status type={status} />
            <Condition type={condition} />
          </S.StatusConditionWrapper>
          <S.Price>{price} 원</S.Price>
          <S.SellerInfo>
            <span>👤</span>
            <span>{sellerName}</span>
            <span>{date}</span>
          </S.SellerInfo>
        </S.DetailsWrapper>
      </S.ContentWrapper>

      {/* Right: Deals */}
      <Deals mode={finalMode} deals={deals} />
    </S.MerchandiseWrapper>
  );
};

export default Merchandise;
