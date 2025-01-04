import React from "react";
import styled, { css } from "styled-components";

interface NaviIconProps {
  label: string;
  icon: string;
  mode: "Default" | "Clicked" | "Unclicked";
  onClick: () => void;
}

const NaviIcon: React.FC<NaviIconProps> = ({ label, icon, mode, onClick }) => {
  return (
    <Wrapper>
      <IconWrapper mode={mode} onClick={onClick}>
        <Icon src={icon} alt={label} />
      </IconWrapper>
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default NaviIcon;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px; /* 이미지와 텍스트 간격 */
`;

const IconWrapper = styled.div<{ mode: "Default" | "Clicked" | "Unclicked" }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 168px;
  height: 168px; /* 정사각형 유지 */
  padding: 20px;
  border-radius: 32px;

  cursor: pointer;

  ${({ mode, theme }) =>
    mode === "Default" &&
    css`
      background: ${theme.colors.purple[100]};
      box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.5);
    `}

  ${({ mode, theme }) =>
    mode === "Clicked" &&
    css`
      background: ${theme.colors.purple[100]};
      box-shadow: inset 8px 8px 8px rgba(0, 0, 0, 0.5);
    `}

  ${({ mode, theme }) =>
    mode === "Unclicked" &&
    css`
      background: ${theme.colors.gray[400]};
      box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.5);
    `}
`;

const Icon = styled.img`
  width: 128px;
  height: 128px;
`;

const Label = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.typography.T4.size};
    font-weight: ${theme.typography.T4.weight};
    line-height: ${theme.typography.T4.lineHeight};
    color: ${theme.colors.black};
    text-align: center;
  `}
`;
