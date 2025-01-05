// Status.tsx
import React from "react";
import styled from "styled-components";

interface StatusProps {
  type: "available" | "reserved" | "completed";
}

const statusLabels = {
  available: "거래 가능",
  reserved: "예약중",
  completed: "거래 완료",
};

const Status: React.FC<StatusProps> = ({ type }) => {
  return <StatusWrapper type={type}>{statusLabels[type]}</StatusWrapper>;
};

export default Status;

const StatusWrapper = styled.div<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.T5.size};
  font-weight: ${({ theme }) => theme.typography.T5.weight};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "available":
        return theme.colors.green[500];
      case "reserved":
        return theme.colors.yellow[500];
      case "completed":
        return theme.colors.blue[500];
      default:
        return theme.colors.gray[300];
    }
  }};
`;
