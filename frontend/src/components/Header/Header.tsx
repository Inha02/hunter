import React from "react";
import {
  HeaderContainer,
  LogoAndNav,
  Logo,
  Nav,
  NavItem,
  AuthSection,
  AuthButton,
  UserSection,
  UserName,
} from "./Header.styles";

interface HeaderProps {
  isLoggedIn?: boolean;
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, username }) => {
  // 네이버 로그인 핸들러
  const handleNaverLogin = () => {
    window.location.href = "http://localhost:5001/auth/naver";
  };

  const handleHome = () => {
    window.location.href = "http://localhost:3000";
  }

  return (
    <HeaderContainer>
      {/* 로고와 네비게이션 */}
      <LogoAndNav>
        <Logo onClick={handleHome}>HUN:ter</Logo>
        <Nav>
          <NavItem>판매하기</NavItem>
          <NavItem>나의 거래</NavItem>
          <NavItem>채팅</NavItem>
        </Nav>
      </LogoAndNav>

      {/* 인증 섹션 */}
      {isLoggedIn ? (
        <UserSection>
          <UserName>{username} 님</UserName>
            <AuthButton
            onClick={() => {
              isLoggedIn = false;
              window.location.href = "http://localhost:3000";
            }}
            >
            Log Out
            </AuthButton>
        </UserSection>
      ) : (
        <AuthSection>
          <AuthButton>
            <span>N</span> Sign Up
          </AuthButton>
          <AuthButton onClick={handleNaverLogin}>
            <span>N</span> Login
          </AuthButton>
        </AuthSection>
      )}
    </HeaderContainer>
  );
};

export default Header;
