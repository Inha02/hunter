import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchTabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;
  max-width: 1260px;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box; /* 여백 포함 크기 계산 */
`;

export const Input = styled.input<{ isFilled: boolean }>`
  flex: 1;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.typography.T5.size};
  font-weight: ${({ theme }) => theme.typography.T5.weight};
  color: ${({ isFilled, theme }) =>
    isFilled ? theme.colors.black : theme.colors.gray[300]};
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
  min-width: 0; /* flexbox에서 축소 가능하도록 설정 */
`;

export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.black};
  flex-shrink: 0; /* 아이콘 크기 고정 */
  cursor: pointer; /* 클릭 가능한 상태로 설정 */
`;
