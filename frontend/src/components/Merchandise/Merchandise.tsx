import React from "react";
import * as S from "./Merchandise.styles";
import Status from "../../components/Block/Status";
import Condition from "../../components/Block/Condition";
import Deals from "../Deals/Deals";

interface MerchandiseProps {
  imageSrc: string;
  title: string;
  status: "available" | "reserved" | "completed";
  condition: "best" | "good" | "average" | "bad" | "very_bad";
  price: string;
  sellerName: string;
  date: string;
  deals: {
    id: string;
    price: string;
    date: string;
    conditionType: "best" | "good" | "average" | "bad" | "very_bad";
  }[];
}

const Merchandise: React.FC<MerchandiseProps> = ({
  imageSrc,
  title,
  status,
  condition,
  price,
  sellerName,
  date,
  deals,
}) => {
  return (
    <S.MerchandiseWrapper>
      <S.ContentWrapper>
        {/* 왼쪽 섹션: 이미지 */}
        <S.ImageWrap>
          <img src={imageSrc} alt={title} />
        </S.ImageWrap>

        {/* 중앙 섹션: 상세 정보 */}
        <S.DetailsWrapper>
          <S.Title>{title}</S.Title>
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

      {/* 오른쪽 섹션: 최근 거래 */}
      <Deals mode="Search" deals={deals} />
    </S.MerchandiseWrapper>
  );
};

export default Merchandise;
