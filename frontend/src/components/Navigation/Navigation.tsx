import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NaviIcon from "./NaviIcon";

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  max-width: 100%;
  overflow-x: auto;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const iconList = [
  { label: "모빌리티", icon: "/assets/icons/mobility.png", route: "/content/mobility" },
  { label: "냉장고", icon: "/assets/icons/refrigerator.png", route: "/content/refrigerator" },
  { label: "전자제품", icon: "/assets/icons/electronics.png", route: "/content/electronics" },
  { label: "책/문서", icon: "/assets/icons/books.png", route: "/content/books" },
  { label: "기프티콘", icon: "/assets/icons/gifticon.png", route: "/content/gifticon" },
  { label: "원룸", icon: "/assets/icons/office.png", route: "/content/office" },
  { label: "족보", icon: "/assets/icons/secret.png", route: "/content/secret" },
  { label: "기타", icon: "/assets/icons/others.png", route: "/content/others" },
];

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <NavigationWrapper>
      {iconList.map((item, index) => (
        <NaviIcon
          key={index}
          mode="Default"
          label={item.label}
          icon={item.icon}
          onClick={() => navigate(item.route)} // 클릭 시 해당 경로로 이동
        />
      ))}
    </NavigationWrapper>
  );
};

export default Navigation;
