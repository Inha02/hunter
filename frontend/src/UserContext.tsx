import React, { createContext, useContext, useState, ReactNode } from "react";

// 타입 정의
type UserContextType = {
    User_ID: string | null;
    User_NICKNAME: string | null;
    setUser: (user: { User_ID: string; User_NICKNAME: string }) => void;
};

// 초기값 설정
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<{ User_ID: string | null; User_NICKNAME: string | null }>({
        User_ID: null,
        User_NICKNAME: null,
    });

    return (
        <UserContext.Provider value={{ ...user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// 커스텀 훅
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};