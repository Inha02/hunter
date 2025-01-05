import styled from "styled-components";

export const DealsWrapper = styled.div<{ mode: "Search" | "Buy" | "Sell" }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 270px;
  padding: 4px 16px 16px; /* 기존 40px에서 축소 */
  background-color: ${({ mode, theme }) =>
    mode === "Search"
      ? theme.colors.purple[100]
      : mode === "Buy"
      ? theme.colors.red[100]
      : theme.colors.blue[100]};
  border-radius: 0px 16px 16px 0px; /* 기존 16px에서 축소 */
`;

export const Title = styled.h2`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.T6.size}; /* 기존 T5에서 T6로 축소 */
  font-weight: ${({ theme }) => theme.typography.T6.weight};
  line-height: ${({ theme }) => theme.typography.T6.lineHeight};
`;

export const DealList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 6px; /* 기존 16px에서 축소 */
`;
