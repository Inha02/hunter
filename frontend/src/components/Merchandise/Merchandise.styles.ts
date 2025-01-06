// Merchandise.styles.ts
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
  flex-wrap: nowrap; /* Flex 요소가 줄 바꿈하지 않도록 설정 */

  /* 반응형 너비 설정 */
  max-width: 1230px; /* 최대 너비 */
  min-width: 960px; /* 최소 너비 */

  @media (min-width: 1400px) {
    width: 1230px; /* 화면이 1400px 이상일 때 고정 */
  }

  @media (max-width: 1399px) {
    width: calc(100% - 80px); /* 1400px 미만에서 점진적으로 줄어듦 */
  }

  @media (max-width: 960px) {
    width: 960px; /* 화면이 960px 이하로는 최소 너비 유지 */
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px; /* 이미지와 상세 정보 간격 */
  align-items: center; /* 같은 높이로 정렬 */
  min-width: 0; /* 반드시 추가 */
  flex: 1; /* 부모도 축소 가능하도록 설정 */
`;

export const ImageWrap = styled.div`
  width: 240px; /* 이미지 크기 고정 */
  height: 240px; /* 이미지 크기 고정 */
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0; /* 추가: Flexbox 축소 방지 */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지 비율 유지 */
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  gap: 24px;
  min-width: 0; /* 자식 요소가 축소될 수 있도록 설정 */
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
  line-height: 1.2;
  margin: 0;
  padding: 0;
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 ...으로 처리 */
  white-space: nowrap; /* 한 줄로 표시 */
  width: 100%; /* 부모 요소에 맞게 크기 조정 */
  flex-shrink: 1; /* Flexbox 내부에서 축소 가능하도록 설정 */
  min-width: 0; /* Flexbox 축소 제한 해제 */
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
