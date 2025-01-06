import React from "react";
import * as S from "./Merchandise.styles";
import Status from "../../components/Block/Status";
import Condition from "../../components/Block/Condition";
import Deals from "../Deals/Deals"; // Deals 컴포넌트 임포트

export interface MerchandiseProps {
  imageSrc: string;
  title: string;
  status: "available" | "reserved" | "completed";
  condition: "best" | "good" | "average" | "bad" | "very_bad";
  price: string;
  sellerName: string;
  date: string;
  category: string;
  deals?: {
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
  deals = [], // 기본값으로 빈 배열 설정
}) => {
  return (
    <S.MerchandiseWrapper>
      
      <S.ContentWrapper>
        {/* 왼쪽: 이미지 */}
        <S.ImageWrap>
          <img src={imageSrc} alt={title} />
        </S.ImageWrap>

        {/* 중앙: 상세 정보 */}
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

      {/* 오른쪽: Deals */}
      <Deals mode="Search" deals={deals} />
    </S.MerchandiseWrapper>
  );
};

export default Merchandise;
