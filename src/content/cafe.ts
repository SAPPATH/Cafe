// src/content/cafe.ts（全置換用：page.tsxの旧参照にも新構造にも両対応）
export const brand = {
  name: "EFLAO CAFE",
  red: "#CE1126",
  green: "#2E7D32",
  brown: "#5D4037",
};

export const links = {
  menu: "/menu",
  contact: "/contact",
  instagram: "https://instagram.com/eflao_cafe",
};

export const copy = {
  // 新構造
  hero: {
    title: "EFLAO CAFE",
    subtitle: "ラオスの香りを日常に。フェアトレードの豆と、やさしいおやつ。",
  },
  about: {
    title: "EFLAO CAFEとは",
    text: "ボラベン高原のラオスコーヒーを中心に、適正価格・正しいストーリーで提供します。",
  },

  // 互換用（旧 page.tsx が参照）
  heroTitle: "EFLAO CAFE",
  heroLead: "ラオスの香りを日常に。フェアトレードの豆と、やさしいおやつ。",
};
