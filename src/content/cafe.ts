// src/content/cafe.ts

export const brand = {
  name: "SAPPATH CAFE",
  tagline: "未来を切り拓くカフェ体験",
};

export const copy = {
  // --- page.tsx が参照している旧キー（互換用）---
  heroTitle: "ラオスから届く一杯で、未来を切り拓く",
  heroLead: "フェアトレードコーヒーをもっと身近に",

  // --- 新しい構造（今後こちらで整備するならこちらを使ってOK）---
  hero: {
    title: "ラオスから届く一杯で、未来を切り拓く",
    subtitle: "フェアトレードコーヒーをもっと身近に",
  },
  about: {
    title: "SAPPATH CAFEとは",
    text: "学生団体エフラオから生まれたカフェ。ラオスの農家と共に、フェアトレードを広げる挑戦を続けています。",
  },
};

export const links = {
  instagram: "https://instagram.com/eflao", // あれば実URLに変更
  contact: "/contact",
  menu: "/menu",
};
