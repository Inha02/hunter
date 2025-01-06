import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NaviIcon from "./NaviIcon";

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  max-width: 100%;
  overflow-x: auto;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const iconList = [
  { label: "모빌리티", icon: "/assets/icons/mobility.png", route: "mobility" },
  { label: "냉장고", icon: "/assets/icons/refrigerator.png", route: "refrigerator" },
  { label: "전자제품", icon: "/assets/icons/electronics.png", route: "electronics" },
  { label: "책/문서", icon: "/assets/icons/books.png", route: "books" },
  { label: "기프티콘", icon: "/assets/icons/gifticon.png", route: "gifticon" },
  { label: "원룸", icon: "/assets/icons/office.png", route: "office" },
  { label: "족보", icon: "/assets/icons/secret.png", route: "secret" },
  { label: "기타", icon: "/assets/icons/others.png", route: "others" },
];

const Navigation: React.FC<{
  clickedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}> = ({ clickedCategory, onCategoryChange }) => {
  const navigate = useNavigate();

  return (
    <NavigationWrapper>
      {iconList.map((item) => {
        const mode: "Default" | "Clicked" | "Unclicked" =
          clickedCategory === item.route
            ? "Clicked"
            : clickedCategory
            ? "Unclicked"
            : "Default";

        return (
          <NaviIcon
            key={item.route}
            mode={mode}
            label={item.label}
            icon={item.icon}
            onClick={() => {
              if (clickedCategory === item.route) {
                onCategoryChange(null);
                navigate("/content/all");
              } else {
                onCategoryChange(item.route);
                navigate(`/content/${item.route}`);
              }
            }}
          />
        );
      })}
    </NavigationWrapper>
  );
};

export default Navigation;
