// Navigation.tsx
import React, { useState } from "react";
import styled from "styled-components";
import NaviIcon from "./NaviIcon";

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.purple[100]};
  border-radius: 12px;
`;

const iconList = [
    { label: "모빌리티", icon: "/assets/icons/mobility.png" },
    { label: "냉장고", icon: "/assets/icons/refrigerator.png" },
    { label: "전자제품", icon: "/assets/icons/electronics.png" },
    { label: "책/문서", icon: "/assets/icons/books.png" },
    { label: "기프티콘", icon: "/assets/icons/gifticon.png" },
    { label: "원룸/오피스텔", icon: "/assets/icons/office.png" },
    { label: "족보", icon: "/assets/icons/secret.png" },
    { label: "기타", icon: "/assets/icons/others.png" },
  ];
  

const Navigation: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <NavigationWrapper>
      {iconList.map((item, index) => (
        <NaviIcon
          key={index}
          mode={selected === index ? "Clicked" : "Default"}
          label={item.label}
          icon={item.icon}
          onClick={() => setSelected(index)} // onClick 전달
        />
      ))}
    </NavigationWrapper>
  );
};

export default Navigation;
