import { MerchandiseProps } from "../components/Merchandise/Merchandise";

const mockMerchandises: MerchandiseProps[] = [
  // Mobility
  {
    imageSrc: "/assets/icons/mobility.png",
    title: "블랙스미스 말리 R1",
    status: "available",
    condition: "good",
    price: "120,000",
    sellerName: "김철수",
    date: "2025.01.01",
    category: "mobility",
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
    imageSrc: "/assets/icons/mobility.png",
    title: "삼천리 하이브리드",
    status: "reserved",
    condition: "average",
    price: "95,000",
    sellerName: "박민호",
    date: "2025.01.02",
    category: "mobility",
    deals: [],
  },

  // Electronics
  {
    imageSrc: "/assets/icons/electronics.png",
    title: "삼성 갤럭시 S21",
    status: "reserved",
    condition: "good",
    price: "950,000",
    sellerName: "박지수",
    date: "2025.01.03",
    category: "electronics",
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
    imageSrc: "/assets/icons/electronics.png",
    title: "LG 울트라와이드 모니터",
    status: "completed",
    condition: "best",
    price: "250,000",
    sellerName: "김혜리",
    date: "2025.01.05",
    category: "electronics",
    deals: [],
  },

  // Books
  {
    imageSrc: "/assets/icons/books.png",
    title: "데이터베이스 개론",
    status: "completed",
    condition: "very_bad",
    price: "25,000",
    sellerName: "홍길동",
    date: "2025.01.05",
    category: "books",
    deals: [
      {
        id: "3",
        price: "20,000",
        date: "2024.12.20",
        conditionType: "very_bad",
      },
      {
        id: "5",
        price: "400,000",
        date: "2024.12.15",
        conditionType: "good",
      }
    ],
  },
  {
    imageSrc: "/assets/icons/books.png",
    title: "머신러닝 입문",
    status: "available",
    condition: "best",
    price: "45,000",
    sellerName: "이수현",
    date: "2025.01.08",
    category: "books",
    deals: [],
  },

  // Gifticons
  {
    imageSrc: "/assets/icons/gifticon.png",
    title: "스타벅스 아메리카노 기프티콘",
    status: "available",
    condition: "best",
    price: "4,500",
    sellerName: "이영희",
    date: "2025.01.07",
    category: "gifticon",
    deals: [],
  },
  {
    imageSrc: "/assets/icons/gifticon.png",
    title: "맥도날드 빅맥 세트",
    status: "completed",
    condition: "good",
    price: "7,000",
    sellerName: "정민호",
    date: "2025.01.09",
    category: "gifticon",
    deals: [],
  },

  // Office
  {
    imageSrc: "/assets/icons/office.png",
    title: "원룸 단기 임대",
    status: "reserved",
    condition: "good",
    price: "450,000",
    sellerName: "김민수",
    date: "2025.01.10",
    category: "office",
    deals: [
      {
        id: "4",
        price: "400,000",
        date: "2024.12.15",
        conditionType: "good",
      },
    ],
  },

  // Secret
  {
    imageSrc: "/assets/icons/secret.png",
    title: "자료 구조 강의 족보",
    status: "completed",
    condition: "average",
    price: "15,000",
    sellerName: "최수현",
    date: "2025.01.12",
    category: "secret",
    deals: [],
  },

  // Others
  {
    imageSrc: "/assets/icons/others.png",
    title: "중고 텀블러",
    status: "available",
    condition: "bad",
    price: "3,000",
    sellerName: "박서연",
    date: "2025.01.15",
    category: "others",
    deals: [],
  },
  {
    imageSrc: "/assets/icons/others.png",
    title: "소형 가습기",
    status: "reserved",
    condition: "good",
    price: "8,000",
    sellerName: "홍민기",
    date: "2025.01.20",
    category: "others",
    deals: [],
  },
];

export default mockMerchandises;
