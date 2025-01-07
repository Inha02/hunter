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
  return (
    <FooterContainer>
      <FooterLogo>HUN:ter</FooterLogo>
      <FooterNav>
        <FooterNavItem>만든 사람들</FooterNavItem>
        <FooterNavItem>박정원 / 최인하</FooterNavItem>
        {/* 2) Call the non-recursive reset function here */}
        <FooterNavItem onClick={resetMerchandises}>데이터 리셋</FooterNavItem>
      </FooterNav>
    </FooterContainer>
  );
};

export default Footer;
