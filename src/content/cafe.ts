// src/content/cafe.ts
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

  // ↓↓↓ 旧 page.tsx 互換用（これが無くてコケています）
  heroTitle: "EFLAO CAFE",
  heroLead: "ラオスの香りを日常に。フェアトレードの豆と、やさしいおやつ。",
};
