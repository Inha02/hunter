// src/components/Header/Header.tsx
import React, { useState, useEffect } from "react";
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
  LogoFrame,
} from "./Header.styles";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate();

    // Initialize state from localStorage
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [username, setUsername] = useState<string | undefined>(undefined);

    useEffect(() => {
        const storedLogin = localStorage.getItem('isLoggedIn');
        const storedUsername = localStorage.getItem('username');
        if (storedLogin === 'true' && storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }
    }, []);

    // Function to initiate Kakao OAuth login
    function loginWithKakao() {
        const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URL}`;
        const CLIENT_ID = `${process.env.REACT_APP_RESTAPI_KAKAO_APP_KEY}`;
        
        // Corrected OAuth URL with 'https://'
        const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
        
        window.location.href = KAKAO_AUTH_URL;
    }

    // Navigation handlers
    const handleHome = () => {
        navigate("/"); // Navigate to Home
    };

    const handleSellNavigation = () => {
        navigate("/sell"); // Navigate to Sell
    };

    const handleContentNavigation = () => {
        navigate("/content/all"); // Navigate to Content
    };

    const handleMyDealClick = () => {
        navigate("/mydeal"); // Navigate to My Deal
    };

    // Logout handler
    const handleLogout = () => {
        // Clear localStorage
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        setIsLoggedIn(false);
        setUsername(undefined);
        navigate("/"); // Redirect to Home after logout
    };

    // Listen to storage changes (e.g., from other tabs)
    useEffect(() => {
        const handleStorageChange = () => {
            const storedLogin = localStorage.getItem('isLoggedIn');
            const storedUsername = localStorage.getItem('username');
            if (storedLogin === 'true' && storedUsername) {
                setIsLoggedIn(true);
                setUsername(storedUsername);
            } else {
                setIsLoggedIn(false);
                setUsername(undefined);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <HeaderContainer>
            {/* Logo and Navigation */}
            <LogoAndNav>
                <Logo onClick={handleHome}>HUN:ter</Logo>
                <Nav>
                    <NavItem onClick={handleContentNavigation}>둘러보기</NavItem>
                    <NavItem onClick={handleSellNavigation}>판매하기</NavItem>
                    <NavItem onClick={handleMyDealClick}>나의 거래</NavItem>
                </Nav>
            </LogoAndNav>

            {/* Authentication Section */}
            {isLoggedIn ? (
                <UserSection>
                    <UserName>{username} 님</UserName>
                    <AuthButton onClick={handleLogout}>Log Out</AuthButton>
                </UserSection>
            ) : (
                <AuthSection>
                    <AuthButton onClick={loginWithKakao}>
                        <LogoFrame />
                        Login
                    </AuthButton>
                </AuthSection>
            )}
        </HeaderContainer>
    );
};

export default Header;
