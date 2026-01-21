import { Discount } from '@/types/discount';

// 현재 날짜 기준으로 동적 날짜 생성
const today = new Date();
const formatDate = (date: Date): string => date.toISOString();

const addDays = (days: number): string => {
  const date = new Date(today);
  date.setDate(date.getDate() + days);
  return formatDate(date);
};

const subtractDays = (days: number): string => {
  const date = new Date(today);
  date.setDate(date.getDate() - days);
  return formatDate(date);
};

export const MOCK_DISCOUNTS: Discount[] = [
  // 마트/슈퍼
  {
    id: '1',
    title: '신선식품 30% 할인',
    storeName: '이마트 강남점',
    categoryId: 'mart',
    startDate: subtractDays(2),
    endDate: addDays(5),
    location: {
      address: '서울특별시 강남구 테헤란로 123',
      lat: 37.5012,
      lng: 127.0396,
    },
    discountType: 'percent',
    discountValue: '30%',
    summary: '신선식품 전 품목 30% 할인',
    description: '과일, 채소, 수산물 등 신선식품 전 품목을 30% 할인된 가격에 만나보세요. 매일 아침 신선하게 입고되는 상품을 저렴하게 구매할 수 있는 기회입니다.',
    tags: ['신선식품', '과일', '채소'],
    createdAt: subtractDays(2),
    updatedAt: subtractDays(2),
  },
  {
    id: '2',
    title: '1+1 생필품 대전',
    storeName: '홈플러스 역삼점',
    categoryId: 'mart',
    startDate: subtractDays(1),
    endDate: addDays(7),
    location: {
      address: '서울특별시 강남구 역삼로 456',
      lat: 37.4995,
      lng: 127.0365,
    },
    discountType: 'bogo',
    discountValue: '1+1',
    summary: '생필품 1+1 행사',
    description: '휴지, 세제, 샴푸 등 생필품 1+1 행사를 진행합니다. 가족 단위 구매에 최적화된 대용량 상품도 다양하게 준비되어 있습니다.',
    tags: ['1+1', '생필품', '휴지'],
    createdAt: subtractDays(1),
    updatedAt: subtractDays(1),
  },

  // 카페
  {
    id: '3',
    title: '아메리카노 50% 할인',
    storeName: '스타벅스 선릉점',
    categoryId: 'cafe',
    startDate: formatDate(today),
    endDate: addDays(0), // 오늘 종료
    location: {
      address: '서울특별시 강남구 선릉로 789',
      lat: 37.5045,
      lng: 127.0489,
    },
    discountType: 'percent',
    discountValue: '50%',
    summary: '아메리카노 반값 이벤트',
    description: '오늘 하루만! 아메리카노를 반값에 즐기세요. 아이스/핫 모두 적용됩니다.',
    tags: ['커피', '아메리카노', '반값'],
    createdAt: formatDate(today),
    updatedAt: formatDate(today),
  },
  {
    id: '4',
    title: '케이크 구매 시 음료 무료',
    storeName: '투썸플레이스 삼성점',
    categoryId: 'cafe',
    startDate: subtractDays(3),
    endDate: addDays(10),
    location: {
      address: '서울특별시 강남구 삼성로 321',
      lat: 37.5089,
      lng: 127.0558,
    },
    discountType: 'gift',
    discountValue: '음료 무료',
    summary: '조각케이크 구매 시 아메리카노 무료',
    description: '조각케이크를 구매하시면 아메리카노(R) 한 잔을 무료로 드립니다. 달콤한 케이크와 함께 커피 한 잔의 여유를 즐겨보세요.',
    tags: ['케이크', '무료음료', '디저트'],
    createdAt: subtractDays(3),
    updatedAt: subtractDays(3),
  },

  // 음식점
  {
    id: '5',
    title: '점심 특선 5,000원 할인',
    storeName: '본죽 테헤란로점',
    categoryId: 'restaurant',
    startDate: subtractDays(5),
    endDate: addDays(2), // 마감 임박
    location: {
      address: '서울특별시 강남구 테헤란로 234',
      lat: 37.5023,
      lng: 127.0412,
    },
    discountType: 'amount',
    discountValue: '5,000원',
    summary: '점심 메뉴 5,000원 즉시 할인',
    description: '평일 점심시간(11:00-14:00) 한정, 전 메뉴 5,000원 할인! 건강한 죽 한 그릇으로 든든한 점심을 즐기세요.',
    tags: ['점심', '죽', '건강식'],
    createdAt: subtractDays(5),
    updatedAt: subtractDays(5),
  },
  {
    id: '6',
    title: '저녁 세트 메뉴 20% 할인',
    storeName: '아웃백 스테이크하우스 삼성점',
    categoryId: 'restaurant',
    startDate: addDays(1), // 예정
    endDate: addDays(14),
    location: {
      address: '서울특별시 강남구 봉은사로 555',
      lat: 37.5112,
      lng: 127.0601,
    },
    discountType: 'percent',
    discountValue: '20%',
    summary: '저녁 세트 메뉴 20% 할인',
    description: '2인 이상 저녁 세트 메뉴 주문 시 20% 할인됩니다. 스테이크와 함께 특별한 저녁을 즐겨보세요.',
    tags: ['저녁', '스테이크', '세트메뉴'],
    createdAt: formatDate(today),
    updatedAt: formatDate(today),
  },

  // 병원/약국
  {
    id: '7',
    title: '건강검진 30% 할인',
    storeName: '삼성서울병원',
    categoryId: 'medical',
    startDate: subtractDays(10),
    endDate: addDays(20),
    location: {
      address: '서울특별시 강남구 일원로 81',
      lat: 37.4881,
      lng: 127.0855,
    },
    discountType: 'percent',
    discountValue: '30%',
    summary: '종합건강검진 30% 특별 할인',
    description: '연말 건강검진 시즌을 맞아 종합건강검진 패키지를 30% 할인된 가격에 제공합니다. 사전 예약 필수.',
    tags: ['건강검진', '병원', '예약필수'],
    createdAt: subtractDays(10),
    updatedAt: subtractDays(10),
  },

  // 뷰티/헤어
  {
    id: '8',
    title: '염색+커트 패키지 40% 할인',
    storeName: '준오헤어 강남본점',
    categoryId: 'beauty',
    startDate: subtractDays(7),
    endDate: addDays(3),
    location: {
      address: '서울특별시 강남구 강남대로 123',
      lat: 37.4979,
      lng: 127.0276,
    },
    discountType: 'percent',
    discountValue: '40%',
    summary: '염색+커트 패키지 40% 파격 할인',
    description: '신규 고객 한정! 염색과 커트를 함께 받으시면 40% 할인됩니다. 디자이너 지정 시 추가 요금이 발생할 수 있습니다.',
    tags: ['염색', '커트', '신규고객'],
    createdAt: subtractDays(7),
    updatedAt: subtractDays(7),
  },

  // 편의점
  {
    id: '9',
    title: '도시락 2+1 행사',
    storeName: 'GS25 테헤란로점',
    categoryId: 'convenience',
    startDate: formatDate(today),
    endDate: addDays(6),
    location: {
      address: '서울특별시 강남구 테헤란로 456',
      lat: 37.5034,
      lng: 127.0423,
    },
    discountType: 'bogo',
    discountValue: '2+1',
    summary: '도시락 2개 구매 시 1개 무료',
    description: '점심시간 직장인을 위한 도시락 2+1 행사! 다양한 메뉴의 도시락을 저렴하게 즐기세요.',
    tags: ['도시락', '2+1', '점심'],
    createdAt: formatDate(today),
    updatedAt: formatDate(today),
  },

  // 문화/레저
  {
    id: '10',
    title: '영화 티켓 50% 할인',
    storeName: 'CGV 강남점',
    categoryId: 'culture',
    startDate: subtractDays(1),
    endDate: addDays(30),
    location: {
      address: '서울특별시 강남구 강남대로 456',
      lat: 37.5015,
      lng: 127.0262,
    },
    discountType: 'percent',
    discountValue: '50%',
    summary: '평일 조조/심야 영화 50% 할인',
    description: '평일 첫 회차 및 22시 이후 심야 영화를 50% 할인된 가격으로 관람하세요. 특별관 제외.',
    tags: ['영화', '조조', '심야'],
    createdAt: subtractDays(1),
    updatedAt: subtractDays(1),
  },
  {
    id: '11',
    title: '헬스장 3개월 등록 20% 할인',
    storeName: '스포애니 선릉점',
    categoryId: 'culture',
    startDate: subtractDays(3),
    endDate: addDays(14),
    location: {
      address: '서울특별시 강남구 선릉로 123',
      lat: 37.5056,
      lng: 127.0467,
    },
    discountType: 'percent',
    discountValue: '20%',
    summary: '3개월 이상 등록 시 20% 할인',
    description: '새해 운동 계획을 세우셨나요? 3개월 이상 등록 시 20% 할인 + PT 1회 무료 제공!',
    tags: ['헬스', '운동', '피트니스'],
    createdAt: subtractDays(3),
    updatedAt: subtractDays(3),
  },

  // 기타
  {
    id: '12',
    title: '세탁 서비스 30% 할인',
    storeName: '크린토피아 역삼점',
    categoryId: 'other',
    startDate: subtractDays(2),
    endDate: addDays(8),
    location: {
      address: '서울특별시 강남구 역삼로 789',
      lat: 37.5001,
      lng: 127.0378,
    },
    discountType: 'percent',
    discountValue: '30%',
    summary: '드라이클리닝 전 품목 30% 할인',
    description: '겨울철 코트, 패딩, 니트 등 드라이클리닝이 필요한 의류를 30% 할인된 가격에 세탁하세요.',
    tags: ['세탁', '드라이클리닝', '코트'],
    createdAt: subtractDays(2),
    updatedAt: subtractDays(2),
  },
];

export const getDiscountById = (id: string): Discount | undefined => {
  return MOCK_DISCOUNTS.find((d) => d.id === id);
};

export const getDiscountsByCategory = (categoryId: string): Discount[] => {
  return MOCK_DISCOUNTS.filter((d) => d.categoryId === categoryId);
};

export const getDiscountsByDate = (date: Date): Discount[] => {
  return MOCK_DISCOUNTS.filter((d) => {
    const start = new Date(d.startDate);
    const end = new Date(d.endDate);
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    const checkDate = new Date(date);
    checkDate.setHours(12, 0, 0, 0);
    return checkDate >= start && checkDate <= end;
  });
};

export const searchDiscounts = (query: string): Discount[] => {
  const lowerQuery = query.toLowerCase();
  return MOCK_DISCOUNTS.filter(
    (d) =>
      d.title.toLowerCase().includes(lowerQuery) ||
      d.storeName.toLowerCase().includes(lowerQuery) ||
      d.summary.toLowerCase().includes(lowerQuery) ||
      d.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
};
