import styled from "styled-components";

export const MerchandiseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 0 0 24px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 32px;
  flex-wrap: nowrap;

  max-width: 1230px;

  @media (min-width: 1300px) {
    width: 1230px;
  }

  @media (max-width: 1300px) {
    width: 90%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  min-width: 0;
  flex: 1;
`;

export const ImageWrap = styled.div`
  width: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NoImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.T4.size};
  font-weight: ${({ theme }) => theme.typography.T4.weight};
  background: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  gap: 24px;
  min-width: 0;
`;

export const StatusConditionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.T2.size};
  font-weight: ${({ theme }) => theme.typography.T2.weight};
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.2;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  flex-shrink: 1;
  min-width: 0;
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.typography.T3.size};
  font-weight: ${({ theme }) => theme.typography.T3.weight};
  color: ${({ theme }) => theme.colors.black};
  line-height: 1;
  margin: 0;
  padding: 0;
`;

export const SellerInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-size: ${({ theme }) => theme.typography.T6.size};
  color: ${({ theme }) => theme.colors.gray[600]};
  line-height: 1;
  margin: 0;
  padding: 0;
`;
