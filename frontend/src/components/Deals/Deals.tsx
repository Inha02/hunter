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
  mode: "Search" | "Buy" | "Sell";
  deals: SearchDeal[] | ChatDeal[];
}

const Deals: React.FC<DealsProps> = ({ mode, deals }) => {
  if (mode === "Search") {
    const searchDeals = deals as SearchDeal[];
    return (
      <S.DealsWrapper mode={mode}>
        <S.Title>최근 거래가</S.Title>
        <S.DealList>
          {searchDeals.map((deal) => (
            <DealUnit
              key={deal.id}
              type="Merchandise"
              price={deal.price}
              date={deal.date}
              conditionType={deal.conditionType}
            />
          ))}
        </S.DealList>
      </S.DealsWrapper>
    );
  } else if (mode === "Buy") {
    const buyDeals = deals as ChatDeal[];
    return (
      <S.DealsWrapper mode={mode}>
        <S.Title>최근 채팅</S.Title>
        <S.DealList>
          {buyDeals.map((deal) => (
            <DealUnit
              key={deal.id}
              type="Chat"
              user={deal.user}
              answerTime={deal.answerTime}
              answerType={deal.answerType}
            />
          ))}
        </S.DealList>
      </S.DealsWrapper>
    );
  } else if (mode === "Sell") {
    const sellDeals = deals as ChatDeal[];
    return (
      <S.DealsWrapper mode={mode}>
        <S.Title>최근 채팅</S.Title>
        <S.DealList>
          {sellDeals.map((deal) => (
            <DealUnit
              key={deal.id}
              type="Chat"
              user={deal.user}
              answerTime={deal.answerTime}
              answerType={deal.answerType}
            />
          ))}
        </S.DealList>
      </S.DealsWrapper>
    );
  }

  return null;
};

export default Deals;
