import styled from "styled-components";

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px; /* Figma의 비율에 맞춘 너비 */
  height: 40px; /* Figma의 비율에 맞춘 높이 */
  background: var(--Gray-200, #dfdfdf);
  border-radius: 40px; /* 둥근 모서리 */
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
`;

export const ToggleButton = styled.div<{ isOn: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 32px;
  background: ${({ isOn, theme }) =>
    isOn ? theme.colors.primary : theme.colors.purple[400]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: ${({ isOn }) => (isOn ? "36px" : "4px")}; /* 위치 조정 */
  transition: all 0.3s ease;
  font-size: ${({ theme }) => theme.typography.T6.size};
  font-weight: ${({ theme }) => theme.typography.T6.weight};
  line-height: ${({ theme }) => theme.typography.T6.lineHeight};
`;

export const ToggleText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.T6.size};
  font-weight: ${({ theme }) => theme.typography.T6.weight};
  line-height: ${({ theme }) => theme.typography.T6.lineHeight};
  color: ${({ theme }) => theme.colors.white};
`;
