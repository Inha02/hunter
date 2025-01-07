// src/data/mockMerchandises.ts
import { MerchandiseProps, SearchDeal } from "../types";
import { v4 as uuidv4 } from "uuid";

const categories = [
  { name: "mobility", image: "/assets/icons/mobility.png" },
  { name: "refrigerator", image: "/assets/icons/refrigerator.png" },
  { name: "electronics", image: "/assets/icons/electronics.png" },
  { name: "books", image: "/assets/icons/books.png" },
  { name: "gifticon", image: "/assets/icons/gifticon.png" },
  { name: "office", image: "/assets/icons/office.png" },
  { name: "others", image: "/assets/icons/others.png" },
];

const conditions = ["best", "good", "average", "bad", "very_bad"] as const;
const statuses = ["available", "reserved", "completed"] as const;
const descriptions = [
  "상품 상태가 양호합니다.",
  "거의 새 상품과 같은 상태입니다.",
  "사용 흔적이 있지만 정상 작동합니다.",
  "중고로 구매하셔야 합니다.",
  "부품용으로 판매됩니다.",
];

const sellers = ["김철수", "박민호", "홍길동", "이영희", "정민호", "박지수", "김혜리"];
const randomPrice = () => (Math.floor(Math.random() * 50) + 1) * 1000;
const randomDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 365));
  return date.toISOString().split("T")[0];
};

const randomDeals = () => {
  const dealCount = Math.floor(Math.random() * 4); // 0~3개 생성
  return Array.from({ length: dealCount }, () => ({
    id: uuidv4(),
    user: sellers[Math.floor(Math.random() * sellers.length)], // <--- ADD THIS
    price: randomPrice().toString(),
    date: randomDate(),
    conditionType:
      conditions[Math.floor(Math.random() * conditions.length)],
  })) as SearchDeal[];
};

const mockMerchandises: MerchandiseProps[] = Array.from(
  { length: 100 },
  (_, index) => {
    const category = categories[index % categories.length];
    const images = [category.image];
    while (images.length < 3) {
      const randomImage =
        categories[Math.floor(Math.random() * categories.length)].image;
      if (!images.includes(randomImage)) images.push(randomImage);
    }

    return {
      id: uuidv4(),
      imageSrc: images,
      title: `${category.name} 상품 ${index + 1}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      condition:
        conditions[Math.floor(Math.random() * conditions.length)],
      price: randomPrice().toString(),
      sellerName: sellers[Math.floor(Math.random() * sellers.length)],
      date: randomDate(),
      category: category.name as MerchandiseProps["category"],
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      deals: randomDeals(), // Each deal now has a 'user' field
    };
  }
);

export default mockMerchandises;
