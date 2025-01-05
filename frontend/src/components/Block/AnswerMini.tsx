// AnswerMini.tsx
import React from "react";
import styled from "styled-components";

interface AnswerMiniProps {
  type: "replied" | "read" | "unread";
}

const answerLabels = {
  replied: "답장 보냄",
  read: "답장 읽음",
  unread: "읽지 않은 답장",
};

const AnswerMini: React.FC<AnswerMiniProps> = ({ type }) => {
  return <MiniWrapper type={type}>{answerLabels[type]}</MiniWrapper>;
};

export default AnswerMini;

const MiniWrapper = styled.div<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.T7.size};
  font-weight: ${({ theme }) => theme.typography.T7.weight};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "replied":
        return theme.colors.green[500];
      case "read":
        return theme.colors.yellow[500];
      case "unread":
        return theme.colors.red[500];
      default:
        return theme.colors.gray[300];
    }
  }};
`;
