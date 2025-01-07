import React, { createContext, useState, useContext } from "react";
import mockMerchandises from "../data/mockMerchandises";
import { MerchandiseProps } from "../components/Merchandise/Merchandise";

// Context 타입 정의
interface MerchandiseContextType {
  merchandises: MerchandiseProps[];
  addMerchandise: (newMerchandise: MerchandiseProps) => void;
}

// Context 생성
export const MerchandiseContext = createContext<MerchandiseContextType | undefined>(
  undefined
);

// Provider 컴포넌트
export const MerchandiseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [merchandises, setMerchandises] = useState(mockMerchandises);

  const addMerchandise = (newMerchandise: MerchandiseProps) => {
    setMerchandises((prev) => [newMerchandise, ...prev]);
  };

  return (
    <MerchandiseContext.Provider value={{ merchandises, addMerchandise }}>
      {children}
    </MerchandiseContext.Provider>
  );
};

// Hook으로 Context 사용
export const useMerchandise = () => {
  const context = useContext(MerchandiseContext);
  if (!context) {
    throw new Error("useMerchandise must be used within a MerchandiseProvider");
  }
  return context;
};
