import styled from "styled-components";

// Header 컨테이너
export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 32px;
  background-color: ${(props) => props.theme.colors.white};
  box-sizing: border-box;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// 로고와 네비게이션을 묶는 Wrapper
export const LogoAndNav = styled.div`
  display: flex;
  align-items: center;
`;

// 로고
export const Logo = styled.div`
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  font-size: ${(props) => props.theme.typography.T1.size};
  font-weight: ${(props) => props.theme.typography.T1.weight};
  color: ${(props) => props.theme.colors.primary};
  margin-right: 32px;
  cursor: pointer;
`;

// 네비게이션 Wrapper
export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

// 네비게이션 아이템
export const NavItem = styled.div`
  font-size: ${(props) => props.theme.typography.T4.size};
  font-weight: ${(props) => props.theme.typography.T4.weight};
  color: ${(props) => props.theme.colors.black};
  margin-right: 24px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

// 인증 버튼 (Sign Up, Login)
export const AuthButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px 4px 8px;
  font-size: ${(props) => props.theme.typography.T4.size};
  font-weight: ${(props) => props.theme.typography.T4.weight};
  color: ${(props) => props.theme.colors.black};
  border: 0;
  background-color: ${(props) => props.theme.colors.kakao};
  border-radius: 50px; /* 끝을 둥글게 */
  cursor: pointer;
  margin-left: 16px;
  gap: 8px;
  box-shadow: ${(props) => "0px 2px 2px rgba(0, 0, 0, 0.2)"};

  &:first-child {
    margin-left: 0;
  }

  span {
    color: ${(props) => props.theme.colors.naver};
    margin-right: 16px;
  }
`;

// 로그인/비로그인 Wrapper
export const AuthSection = styled.div`
  display: flex;
  align-items: center;
`;

export const UserSection = styled(AuthSection)`
  font-size: ${(props) => props.theme.typography.T4.size};
  font-weight: ${(props) => props.theme.typography.T4.weight};
  color: ${(props) => props.theme.colors.black};

  div {
    margin-right: 16px;
  }

  button {
    font-size: ${(props) => props.theme.typography.T4.size};
    font-weight: ${(props) => props.theme.typography.T4.weight};
    color: ${(props) => props.theme.colors.black};
    border: 2px solid ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 50px; /* 끝을 둥글게 */
    padding: 8px 16px;
    cursor: pointer;
  }
`;

export const LogoFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-image: url('/assets/icons/kakao_logo.png');
  background-size: contain;
  background-repeat: no-repeat;
`;

// UserName 스타일 추가
export const UserName = styled.div`
  font-size: ${(props) => props.theme.typography.T5.size};
  font-weight: ${(props) => props.theme.typography.T3.weight};
  color: ${(props) => props.theme.colors.black};
  margin-right: 16px; /* 여백 설정 */
`;
