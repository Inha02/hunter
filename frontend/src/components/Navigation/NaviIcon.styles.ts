import styled from "styled-components";

interface WrapperProps {
  mode: "Default" | "Clicked" | "Unclicked";
}

// NaviIcon 전체 Wrapper
export const NaviIconWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 220px;
  background-color: ${(props) =>
    props.mode === "Clicked"
      ? props.theme.colors.purple[100]
      : props.theme.colors.white};
  border-radius: 16px;
  border: ${(props) =>
    props.mode === "Clicked" ? `2px solid ${props.theme.colors.primary}` : "none"};
  cursor: pointer;
  transition: background-color 0.3s ease, border 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[100]};
  }
`;

// NaviIcon 이미지
export const NaviIconImage = styled.img`
  width: 128px;
  height: 128px;
  margin-bottom: 12px;
`;

// NaviIcon 라벨 (텍스트)
export const NaviIconLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  font-family: Pretendard, sans-serif;
  font-size: ${(props) => props.theme.typography.T4.size};
  font-weight: ${(props) => props.theme.typography.T4.weight};
  line-height: ${(props) => props.theme.typography.T4.lineHeight};
  text-align: center;
`;
