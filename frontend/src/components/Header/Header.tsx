import React from "react";
import { HeaderContainer, Logo, Nav, NavItem, AuthSection, AuthButton, UserSection, UserName } from "./Header.styles";

interface HeaderProps {
  isLoggedIn: boolean;
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, username }) => {
  return (
    <HeaderContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo>HUN:ter</Logo>
        <Nav>
          <NavItem>판매하기</NavItem>
          <NavItem>나의 거래</NavItem>
          <NavItem>채팅</NavItem>
        </Nav>
      </div>
      {isLoggedIn ? (
        <UserSection>
          <UserName>{username} 님</UserName>
          <AuthButton>Log Out</AuthButton>
        </UserSection>
      ) : (
        <AuthSection>
          <AuthButton>
            <span>N</span> Sign Up
          </AuthButton>
          <AuthButton>
            <span>N</span> Login
          </AuthButton>
        </AuthSection>
      )}
    </HeaderContainer>
  );
};

export default Header;
