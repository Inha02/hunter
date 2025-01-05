import React from "react";
import * as S from "./DealUnit.styles";
import ConditionMini from "../../components/Block/ConditionMini";
import AnswerMini from "../../components/Block/AnswerMini";

interface MerchandiseProps {
  type: "Merchandise";
  price: string;
  date: string;
  conditionType: "best" | "good" | "average" | "bad" | "very_bad"; // ConditionMini의 type
}

interface ChatProps {
  type: "Chat";
  user: string;
  answerTime: string;
  answerType: "replied" | "read" | "unread"; // AnswerMini의 type
}

type DealUnitProps = MerchandiseProps | ChatProps;

const DealUnit: React.FC<DealUnitProps> = (props) => {
  return (
    <S.DealUnitWrapper>
      {/* Merchandise 모드 */}
      {props.type === "Merchandise" && (
        <>
          <S.PriceSection>
            <S.Price>{props.price}</S.Price>
            <S.Currency>원</S.Currency>
          </S.PriceSection>
          <S.DetailsSection>
            <ConditionMini type={props.conditionType} />
            <S.DateText>{props.date}</S.DateText>
          </S.DetailsSection>
        </>
      )}

      {/* Chat 모드 */}
      {props.type === "Chat" && (
        <>
          <S.UserSection>{props.user}</S.UserSection>
          <S.DetailsSection>
            <AnswerMini type={props.answerType} />
            <S.DateText>{props.answerTime}</S.DateText>
          </S.DetailsSection>
        </>
      )}
    </S.DealUnitWrapper>
  );
};

export default DealUnit;
