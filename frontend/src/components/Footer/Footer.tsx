import React from "react";
import {
  FooterContainer,
  FooterLogo,
  FooterNav,
  FooterNavItem,
} from "./Footer.styles";

// 1) Move the function above or below your component
const resetMerchandises = () => {
  localStorage.removeItem("merchandises");
  window.location.reload(); 
  // or any other action
};

const Footer = () => {

  const handleGithub = () => {
    window.open("https://github.com/ksiwon/hunter", "_blank");
  };

  const handleDeveloper = () => {
    alert("KAIST 전산학부 박정원\nSMMU 인공지능공학부 최인하");
  }

  return (
    <FooterContainer>
      <FooterLogo>HUN:ter</FooterLogo>
      <FooterNav>
        <FooterNavItem onClick={handleDeveloper}>만든 사람들</FooterNavItem>
        <FooterNavItem onClick={handleGithub}>GitHub</FooterNavItem>
        <FooterNavItem onClick={resetMerchandises}>데이터 리셋</FooterNavItem>
      </FooterNav>
    </FooterContainer>
  );
};

export default Footer;
