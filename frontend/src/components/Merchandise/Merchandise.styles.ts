import styled from "styled-components";

export const MerchandiseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 0 0 0 24px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px; /* 이미지와 상세 정보 간격 */
  align-items: center; /* 같은 높이로 정렬 */
`;

export const ImageWrap = styled.div`
  width: 320px;
  height: 240px;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%; /* 부모 높이에 맞춤 */
  gap: 24px;
`;

export const StatusConditionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px; /* 상태와 조건 간격 */
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.T2.size};
  font-weight: ${({ theme }) => theme.typography.T2.weight};
  color: ${({ theme }) => theme.colors.black};
  line-height: 1;
  margin: 0; /* margin 초기화 */
  padding: 0; /* padding 초기화 */
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.typography.T3.size};
  font-weight: ${({ theme }) => theme.typography.T3.weight};
  color: ${({ theme }) => theme.colors.black};
  line-height: 1;
  margin: 0; /* margin 초기화 */
  padding: 0; /* padding 초기화 */
`;

export const SellerInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-size: ${({ theme }) => theme.typography.T6.size};
  color: ${({ theme }) => theme.colors.gray[600]};
  line-height: 1;
  margin: 0; /* margin 초기화 */
  padding: 0; /* padding 초기화 */
`;
