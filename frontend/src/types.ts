// src/types.ts
export interface Deal {
  id: string;
  price: string;
  date: string;
  conditionType: "best" | "good" | "average" | "bad" | "very_bad";
}

export interface MerchandiseProps {
  id: string;
  imageSrc: string[];
  title: string;
  status: "available" | "reserved" | "completed";
  condition: "best" | "good" | "average" | "bad" | "very_bad";
  price: string;
  sellerName: string;
  date: string;
  category:
    | "mobility"
    | "refrigerator"
    | "electronics"
    | "books"
    | "gifticon"
    | "office"
    | "others";
  description: string;
  deals?: SearchDeal[];
  onClick?: () => void;

  // Make dealMode an optional field
  dealMode?: "Buy" | "Sell" | "Search" | "ItemDetail";
}

export interface SearchDeal extends Deal {
  user: string; // User who made the inquiry
}

export interface ChatDeal {
  id: number;
  user: string;
  answerTime: string;
  answerType: "replied" | "read" | "unread";
}
