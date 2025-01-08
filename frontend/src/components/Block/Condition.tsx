// Condition.tsx
import React from "react";
import styled from "styled-components";

interface ConditionProps {
  type: "best" | "good" | "average" | "bad" | "very_bad";
}

const conditionLabels = {
  best: "미개봉 / 최상",
  good: "상태 좋음",
  average: "양호 / 보통",
  bad: "상태 별로",
  very_bad: "부품용 / 고장",
};

const Condition: React.FC<ConditionProps> = ({ type }) => {
  return <ConditionWrapper type={type}>{conditionLabels[type]}</ConditionWrapper>;
};

export default Condition;

const ConditionWrapper = styled.div<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.T5.size};
  font-weight: ${({ theme }) => theme.typography.T5.weight};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "best":
        return theme.colors.green[500];
      case "good":
        return theme.colors.green[300];
      case "average":
        return theme.colors.yellow[500];
      case "bad":
        return theme.colors.red[300];
      case "very_bad":
        return theme.colors.red[500];
      default:
        return theme.colors.gray[300];
    }
  }};
`;
