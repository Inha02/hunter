// src/types.ts
export interface Deal {
    id: string;
    price: string;
    date: string;
    conditionType: "best" | "good" | "average" | "bad" | "very_bad";
  }
  
  export interface MerchandiseProps {
    id: string; // UUID as string
    imageSrc: string[];
    title: string;
    status: "available" | "reserved" | "completed";
    condition: "best" | "good" | "average" | "bad" | "very_bad";
    price: string;
    sellerName: string;
    date: string;
    category: "mobility" | "refrigerator" | "electronics" | "books" | "gifticon" | "office" | "others";
    description: string;
    deals?: Deal[];
    onClick?: () => void;
  }
  
  export interface SearchDeal {
    id: string;
    price: string;
    date: string;
    conditionType: "best" | "good" | "average" | "bad" | "very_bad";
  }
  
  export interface ChatDeal {
    id: number;
    user: string;
    answerTime: string;
    answerType: "replied" | "read" | "unread";
  }
  