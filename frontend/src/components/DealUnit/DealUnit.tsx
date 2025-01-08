// src/components/DealUnit/DealUnit.tsx
import React from "react";
import * as S from "./DealUnit.styles";
import ConditionMini from "../../components/Block/ConditionMini";
import AnswerMini from "../../components/Block/AnswerMini";

interface MerchandiseProps {
  type: "Merchandise";
  price: string;
  date: string;
  conditionType: "best" | "good" | "average" | "bad" | "very_bad";
}

interface ChatProps {
  type: "Chat";
  user: string;
  answerTime: string;
  answerType: "replied" | "read" | "unread";
}

type DealUnitProps = MerchandiseProps | ChatProps;

const DealUnit: React.FC<DealUnitProps> = (props) => {
  if (props.type === "Merchandise") {
    return (
      <S.DealUnitWrapper>
        <S.PriceSection>
        <S.Price>{Number(props.price).toLocaleString()}</S.Price>
          <S.Currency>원</S.Currency>
        </S.PriceSection>
        <S.DetailsSection>
          <ConditionMini type={props.conditionType} />
          <S.DateText>{props.date}</S.DateText>
        </S.DetailsSection>
      </S.DealUnitWrapper>
    );
  }

  if (props.type === "Chat") {
    return (
      <S.DealUnitWrapper>
        <S.UserSection>{props.user}</S.UserSection>
        <S.DetailsSection>
          <AnswerMini type={props.answerType} />
          <S.DateText>{props.answerTime}</S.DateText>
        </S.DetailsSection>
      </S.DealUnitWrapper>
    );
  }

  return null;
};

export default DealUnit;
