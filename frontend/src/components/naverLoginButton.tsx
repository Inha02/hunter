import React from "react";

const NaverLoginButton: React.FC = () => {
    const handleLogin = () => {
        // 백엔드의 네이버 로그인 URL로 이동
        window.location.href = "http://localhost:3000/naverlogin";
    };

    return (
        <button
            onClick={handleLogin}
            style={{
                backgroundColor: "#03C75A",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            네이버 로그인
        </button>
    );
};

export default NaverLoginButton;