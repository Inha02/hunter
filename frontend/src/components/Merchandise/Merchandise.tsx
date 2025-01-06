import React from "react";
import * as S from "./Merchandise.styles";
import Status from "../../components/Block/Status";
import Condition from "../../components/Block/Condition";
import Deals from "../Deals/Deals";

export interface MerchandiseProps {
  id: number;
  imageSrc: string[];
  title: string;
  status: "available" | "reserved" | "completed";
  condition: "best" | "good" | "average" | "bad" | "very_bad";
  price: string;
  sellerName: string;
  date: string;
  category: string;
  description: string;
  deals?: {
    id: string;
    price: string;
    date: string;
    conditionType: "best" | "good" | "average" | "bad" | "very_bad";
  }[];
  onClick?: () => void;
}

const Merchandise: React.FC<MerchandiseProps> = ({
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
}) => {
  return (
    <S.MerchandiseWrapper
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <S.ContentWrapper>
        {/* 왼쪽: 이미지 */}
        <S.ImageWrap>
          {imageSrc.length > 0 ? (
            <img src={imageSrc[0]} alt={title} />
          ) : (
            <S.NoImage>No Image</S.NoImage>
          )}
        </S.ImageWrap>

        {/* 중앙: 상세 정보 */}
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

      {/* 오른쪽: Deals */}
      <Deals mode="Search" deals={deals} />
    </S.MerchandiseWrapper>
  );
};

export default Merchandise;
