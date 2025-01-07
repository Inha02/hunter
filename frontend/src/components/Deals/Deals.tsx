// src/components/Deals/Deals.tsx
import React from "react";
import * as S from "./Deals.styles";
import DealUnit from "../../components/DealUnit/DealUnit";

interface SearchDeal {
  id: string;
  price: string;
  date: string;
  conditionType: "best" | "good" | "average" | "bad" | "very_bad";
}

interface ChatDeal {
  id: number;
  user: string;
  answerTime: string;
  answerType: "replied" | "read" | "unread";
}

interface DealsProps {
  mode: "Search" | "Buy" | "Sell" | "ItemDetail";
  deals: SearchDeal[] | ChatDeal[];
}

const Deals: React.FC<DealsProps> = ({ mode, deals }) => {
  const renderDeals = () => {
    if (deals.length === 0) {
      if (mode === "Search" || mode === "ItemDetail") {
        return <S.EmptyMessage>최근 거래내역이 없습니다.</S.EmptyMessage>;
      }
      else if (mode === "Buy" ){
        return <S.EmptyMessage>문의 완료하였습니다.</S.EmptyMessage>;
      }
      else{
        return <S.EmptyMessage>최근 문의 내역이 없습니다.</S.EmptyMessage>
      }
    }

    if (mode === "Search" || mode === "ItemDetail") {
      // 최근 거래가
      const searchDeals = deals as SearchDeal[];
      return searchDeals.map((deal) => (
        <DealUnit
          key={deal.id}
          type="Merchandise"
          price={deal.price}
          date={deal.date}
          conditionType={deal.conditionType}
        />
      ));
    }

    // mode === "Buy" or "Sell" => 최근 채팅
    const chatDeals = deals as ChatDeal[];
    return chatDeals.map((deal) => (
      <DealUnit
        key={deal.id}
        type="Chat"
        user={deal.user}
        answerTime={deal.answerTime}
        answerType={deal.answerType}
      />
    ));
  };

  const title =
    mode === "Search" || mode === "ItemDetail"
      ? "최근 거래가"
      : mode === "Buy"
      ? "최근 문의"
      : "최근 문의";

  return (
    <S.DealsWrapper mode={mode}>
      <S.Title>{title}</S.Title>
      <S.DealList>{renderDeals()}</S.DealList>
    </S.DealsWrapper>
  );
};

export default Deals;
