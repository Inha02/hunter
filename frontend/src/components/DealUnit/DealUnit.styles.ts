// src/components/DealUnit/DealUnit.styles.ts
import styled from "styled-components";

export const DealUnitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  width: 240px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
`;

export const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Price = styled.div`
  font-size: ${({ theme }) => theme.typography.T5.size};
  font-weight: ${({ theme }) => theme.typography.T5.weight};
  color: ${({ theme }) => theme.colors.black};
`;

export const Currency = styled.div`
  font-size: ${({ theme }) => theme.typography.T6.size};
  font-weight: ${({ theme }) => theme.typography.T6.weight};
  color: ${({ theme }) => theme.colors.black};
`;

export const UserSection = styled.div`
  font-size: ${({ theme }) => theme.typography.T5.size};
  font-weight: ${({ theme }) => theme.typography.T5.weight};
  color: ${({ theme }) => theme.colors.black};
`;

export const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const DateText = styled.div`
  font-size: ${({ theme }) => theme.typography.T7.size};
  color: ${({ theme }) => theme.colors.gray[600]};
`;
