// src/components/Deals/Deals.styles.ts
import styled from "styled-components";

export const DealsWrapper = styled.div<{ mode: "Search" | "Buy" | "Sell" | "ItemDetail" }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  height: 270px;
  padding: 4px 16px 16px;
  background-color: ${({ mode, theme }) =>
    mode === "Search"
      ? theme.colors.purple[100]
      : mode === "Buy"
      ? theme.colors.red[100]
      : mode === "Sell" || mode === "ItemDetail"
      ? theme.colors.blue[100]
      : theme.colors.gray[100]}; /* Default color for safety */
  border-radius: 0px 16px 16px 0px;
`;

export const Title = styled.h2`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.T6.size};
  font-weight: ${({ theme }) => theme.typography.T6.weight};
  line-height: ${({ theme }) => theme.typography.T6.lineHeight};
`;

export const DealList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 6px;
`;

export const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 240px; /* Adjusted as per user request */
  font-size: ${({ theme }) => theme.typography.T6.size};
  color: ${({ theme }) => theme.colors.gray[600]};
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
`;
