"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Coffee, MapPin, Clock, Phone, Instagram, ArrowRight } from "lucide-react";
import { brand, copy, links } from "@/content/cafe";

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-black/5">
        <nav className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="EFLAO CAFE" width={36} height={36} className="rounded-full" />
            <span className="font-semibold">EFLAO CAFE</span>
          </Link>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#concept" className="hover:underline">コンセプト</a>
            <a href="#menu" className="hover:underline">メニュー</a>
            <a href="#beans" className="hover:underline">豆について</a>
            <a href="#access" className="hover:underline">アクセス</a>
            <a href="#contact" className="hover:underline">予約・問い合わせ</a>
          </div>
          <a href={links.reserve} className="px-3 py-2 rounded-xl text-white text-sm shadow" style={{ backgroundColor: brand.red }}>
            予約する
          </a>
        </nav>
      </header>

      {/* HERO（背景画像＋白カード） */}
      <section className="relative w-full h-[68vh] min-h-[520px]">
        <Image src="/hero.jpg" alt="Cafe Hero" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full">
          <div className="max-w-6xl mx-auto h-full px-4 flex items-center">
            <div className="bg-white/95 backdrop-blur rounded-2xl p-8 md:p-10 shadow-lg ring-1 ring-black/10 max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">{copy.heroTitle}</h1>
              <p className="mt-3 text-zinc-700 text-base md:text-lg leading-relaxed">{copy.heroLead}</p>
              <div className="mt-6 flex gap-3">
                <a href="#menu" className="px-5 py-3 rounded-xl text-white text-sm shadow" style={{ backgroundColor: brand.brown }}>
                  メニューを見る
                </a>
                <a href="#access" className="px-5 py-3 rounded-xl bg-white ring-1 ring-black/10 text-sm">
                  アクセス
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* コンセプト */}
      <section id="concept" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm">
            <Image src="/interior.jpg" alt="Interior" fill className="object-cover" />
          </div>
          <div>
            <div className="text-xs font-medium tracking-widest" style={{ color: brand.green }}>CONCEPT</div>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold">ラオスの香りが立つ、やさしい一杯を。</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-700">
              {copy.introBullets.map((b, i) => (<li key={i}>・{b}</li>))}
            </ul>
          </div>
        </div>
      </section>

      {/* メニュー ハイライト */}
      <section id="menu" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-2">
          <Coffee className="w-5 h-5" /><h2 className="text-2xl md:text-3xl font-bold">おすすめ</h2>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {copy.menuHighlights.map((m, i) => (
            <div key={i} className="rounded-2xl p-6 ring-1 ring-black/5 bg-white shadow-sm">
              <div className="font-semibold">{m.name} <span className="text-zinc-500 text-sm">{m.price}</span></div>
              <p className="mt-2 text-sm text-zinc-700">{m.desc}</p>
              <div className="mt-3 text-xs text-zinc-500">テイクアウト可</div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Image src="/menu-1.jpg" alt="menu 1" width={600} height={400} className="rounded-2xl object-cover w-full h-auto ring-1 ring-black/5" />
          <Image src="/menu-2.jpg" alt="menu 2" width={600} height={400} className="rounded-2xl object-cover w-full h-auto ring-1 ring-black/5" />
          <Image src="/menu-3.jpg" alt="menu 3" width={600} height={400} className="rounded-2xl object-cover w-full h-auto ring-1 ring-black/5" />
        </div>
      </section>

      {/* 豆について */}
      <section id="beans" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs font-medium tracking-widest" style={{ color: brand.green }}>BEANS</div>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold">ボラベンの香りを、正しいストーリーで。</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-700">
              {copy.beansPoints.map((b, i) => (<li key={i}>・{b}</li>))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-4 py-2 rounded-xl text-white text-sm shadow" style={{ backgroundColor: brand.green }}>豆の購入/卸の相談</a>
              <a href="#menu" className="px-4 py-2 rounded-xl bg-white ring-1 ring-black/10 text-sm">ドリンクメニューへ</a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm">
            <Image src="/beans.jpg" alt="Beans" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section id="access" className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-2xl p-6 ring-1 ring-black/5 bg-white shadow-sm">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <div className="flex items-center gap-2"><MapPin className="w-5 h-5" /><h2 className="text-xl font-semibold">アクセス</h2></div>
              <p className="mt-2 text-sm text-zinc-700">{copy.address}</p>
              <div className="mt-3 text-sm text-zinc-700"><Clock className="inline w-4 h-4 mr-1" /> 営業時間</div>
              <ul className="mt-1 text-sm text-zinc-700">
                {copy.hours.map((h, i) => (<li key={i}>・{h.label}：{h.value}</li>))}
              </ul>
              <div className="mt-3 text-sm text-zinc-700"><Phone className="inline w-4 h-4 mr-1" /> {copy.tel}</div>
              <div className="mt-4">
                <a href={links.maps} target="_blank" className="inline-flex items-center gap-2 text-sm underline">Googleマップで開く <ArrowRight className="w-4 h-4" /></a>
              </div>
            </div>
            <div className="aspect-[4/3] w-full rounded-2xl ring-1 ring-black/5 overflow-hidden bg-zinc-100">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 予約・問い合わせ */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="rounded-2xl ring-1 ring-black/5 p-8 md:p-10 bg-white shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold">予約・お問い合わせ</h2>
          <p className="mt-2 text-sm md:text-base text-zinc-600">InstagramのDMやメールでも承ります。</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <span className="px-3 py-2 rounded-xl bg-zinc-50 ring-1 ring-black/5">{links.email}</span>
            <a className="px-3 py-2 rounded-xl bg-zinc-50 ring-1 ring-black/5 hover:underline" href={links.instagram} target="_blank" rel="noreferrer"><Instagram className="inline w-4 h-4 mr-1" />Instagram</a>
            <a className="px-3 py-2 rounded-xl bg-zinc-50 ring-1 ring-black/5 hover:underline" href={links.x} target="_blank" rel="noreferrer">X (Twitter)</a>
            <a className="px-3 py-2 rounded-xl bg-zinc-50 ring-1 ring-black/5 hover:underline" href={links.reserve}>予約フォーム</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:justify-between gap-6 text-sm">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Logo" width={36} height={36} className="rounded-full" />
            <div className="font-semibold">EFLAO CAFE</div>
          </div>
          <div className="text-zinc-500">© {new Date().getFullYear()} Smile F LAOS / Eflao</div>
        </div>
      </footer>
    </div>
  );
}
