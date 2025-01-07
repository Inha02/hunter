// src/context/MerchandiseContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import mockMerchandises from "../data/mockMerchandises";
import { MerchandiseProps } from "../types"; // Import from types.ts

interface MerchandiseContextProps {
  merchandises: MerchandiseProps[];
  addMerchandise: (newMerchandise: MerchandiseProps) => void;
}

const MerchandiseContext = createContext<MerchandiseContextProps | undefined>(undefined);

export const MerchandiseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [merchandises, setMerchandises] = useState<MerchandiseProps[]>(() => {
    const storedMerchandises = localStorage.getItem("merchandises");
    return storedMerchandises ? JSON.parse(storedMerchandises) : mockMerchandises;
  });

  const addMerchandise = (newMerchandise: MerchandiseProps) => {
    setMerchandises((prev) => [newMerchandise, ...prev]);
  };

  useEffect(() => {
    localStorage.setItem("merchandises", JSON.stringify(merchandises));
  }, [merchandises]);

  return (
    <MerchandiseContext.Provider value={{ merchandises, addMerchandise }}>
      {children}
    </MerchandiseContext.Provider>
  );
};

export const useMerchandise = (): MerchandiseContextProps => {
  const context = useContext(MerchandiseContext);
  if (!context) {
    throw new Error("useMerchandise must be used within a MerchandiseProvider");
  }
  return context;
};
