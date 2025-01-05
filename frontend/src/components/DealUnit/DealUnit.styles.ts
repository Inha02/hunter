import styled from "styled-components";

export const DealUnitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px; /* 기존 20px에서 축소 */
  width: 240px; /* 기존 320px에서 축소 */
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px; /* 기존 12px에서 축소 */
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1); /* 살짝 축소 */
`;

export const PriceSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px; /* 기존 8px에서 축소 */
`;

export const Price = styled.div`
  font-size: ${({ theme }) => theme.typography.T5.size}; /* 기존 T4에서 T5로 축소 */
  font-weight: ${({ theme }) => theme.typography.T5.weight};
  color: ${({ theme }) => theme.colors.black};
`;

export const Currency = styled.div`
  font-size: ${({ theme }) => theme.typography.T6.size}; /* 기존 T4에서 T5로 축소 */
  font-weight: ${({ theme }) => theme.typography.T6.weight};
  color: ${({ theme }) => theme.colors.black};
`;

export const UserSection = styled.div`
  font-size: ${({ theme }) => theme.typography.T5.size}; /* 기존 T4에서 T5로 축소 */
  font-weight: ${({ theme }) => theme.typography.T5.weight};
  color: ${({ theme }) => theme.colors.black};
`;

export const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px; /* 기존 3px에서 축소 */
`;

export const DateText = styled.div`
  font-size: ${({ theme }) => theme.typography.T7.size}; /* 기존 T6에서 T7로 축소 */
  color: ${({ theme }) => theme.colors.gray[600]};
`;
