import { MerchandiseProps } from "../components/Merchandise/Merchandise";

const mockMerchandises: MerchandiseProps[] = [
  // Mobility
  {
    id: 1,
    imageSrc: ["/assets/icons/mobility.png"],
    title: "블랙스미스 말리 R1",
    status: "available",
    condition: "good",
    price: "120,000",
    sellerName: "김철수",
    date: "2025.01.01",
    category: "mobility",
    description:
      "블랙스미스 말리R1 하이브리드 자전거입니다. 정가 288,000원으로, 앞 타이어와 브레이크를 교체해야 합니다.",
    deals: [
      {
        id: "1",
        price: "110,000",
        date: "2024.12.25",
        conditionType: "average",
      },
    ],
  },
  {
    id: 2,
    imageSrc: ["/assets/icons/mobility.png", "/assets/icons/electronics.png"],
    title: "삼천리 하이브리드",
    status: "reserved",
    condition: "average",
    price: "95,000",
    sellerName: "박민호",
    date: "2025.01.02",
    category: "mobility",
    description: "삼천리 하이브리드 자전거입니다. 보통 상태로 사용감은 있지만 큰 문제는 없습니다.",
    deals: [],
  },

  // Electronics
  {
    id: 1,
    imageSrc: [],
    title: "삼성 갤럭시 S21",
    status: "reserved",
    condition: "good",
    price: "950,000",
    sellerName: "박지수",
    date: "2025.01.03",
    category: "electronics",
    description:
      "삼성 갤럭시 S21 스마트폰입니다. 256GB 저장 용량으로, 박스와 충전기 포함 상태입니다.",
    deals: [
      {
        id: "2",
        price: "900,000",
        date: "2024.12.30",
        conditionType: "good",
      },
    ],
  },
  {
    id: 2,
    imageSrc: ["/assets/icons/electronics.png", "/assets/icons/electronics.png"],
    title: "LG 울트라와이드 모니터",
    status: "completed",
    condition: "best",
    price: "250,000",
    sellerName: "김혜리",
    date: "2025.01.05",
    category: "electronics",
    description: "LG 울트라와이드 모니터로, 34인치 크기와 2560x1080 해상도를 제공합니다.",
    deals: [],
  },

  // Books
  {
    id: 1,
    imageSrc: ["/assets/icons/books.png", "/assets/icons/books.png"],
    title: "데이터베이스 개론",
    status: "completed",
    condition: "very_bad",
    price: "25,000",
    sellerName: "홍길동",
    date: "2025.01.05",
    category: "books",
    description:
      "데이터베이스 개론 교재입니다. 상태가 좋지 않으며, 사용 흔적이 많습니다.",
    deals: [
      {
        id: "3",
        price: "20,000",
        date: "2024.12.20",
        conditionType: "very_bad",
      },
    ],
  },
  {
    id: 2,
    imageSrc: ["/assets/icons/books.png", "/assets/icons/books.png"],
    title: "머신러닝 입문",
    status: "available",
    condition: "best",
    price: "45,000",
    sellerName: "이수현",
    date: "2025.01.08",
    category: "books",
    description:
      "머신러닝 입문서입니다. 거의 새 책과 같은 상태로, 한 번만 읽은 제품입니다.",
    deals: [],
  },

  // Gifticons
  {
    id: 1,
    imageSrc: ["/assets/icons/gifticon.png", "/assets/icons/gifticon.png"],
    title: "스타벅스 아메리카노 기프티콘",
    status: "available",
    condition: "best",
    price: "4,500",
    sellerName: "이영희",
    date: "2025.01.07",
    category: "gifticon",
    description: "스타벅스 아메리카노 기프티콘입니다. 유효기간은 2025년 6월까지입니다.",
    deals: [],
  },
  {
    id: 2,
    imageSrc: ["/assets/icons/gifticon.png", "/assets/icons/gifticon.png"],
    title: "맥도날드 빅맥 세트",
    status: "completed",
    condition: "good",
    price: "7,000",
    sellerName: "정민호",
    date: "2025.01.09",
    category: "gifticon",
    description: "맥도날드 빅맥 세트 기프티콘입니다. 유효기간은 2025년 5월까지입니다.",
    deals: [],
  },

  // Others
  {
    id: 1,
    imageSrc: ["/assets/icons/others.png", "/assets/icons/others.png"],
    title: "중고 텀블러",
    status: "available",
    condition: "bad",
    price: "3,000",
    sellerName: "박서연",
    date: "2025.01.15",
    category: "others",
    description: "중고 텀블러입니다. 사용 흔적이 있으나 기능에는 문제가 없습니다.",
    deals: [],
  },
  {
    id: 2,
    imageSrc: ["/assets/icons/others.png", "/assets/icons/others.png"],
    title: "소형 가습기",
    status: "reserved",
    condition: "good",
    price: "8,000",
    sellerName: "홍민기",
    date: "2025.01.20",
    category: "others",
    description:
      "소형 가습기입니다. 사용 기간은 6개월이며, 정상 작동합니다.",
    deals: [],
  },
];

export default mockMerchandises;
