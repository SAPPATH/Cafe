"use client";

import Image from "next/image";
import Link from "next/link";
import { brand, copy, links } from "@/content/cafe";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[56vh] md:h-[68vh] w-full">
        {/* 背景画像（無ければ削除可） */}
        <Image
          src="/window.svg"
          alt="hero"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              {copy.hero.title}
            </h1>
            <p className="text-lg">{copy.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-semibold">{copy.about.title}</h2>
        <p className="mt-3 text-zinc-700">{copy.about.text}</p>

        <div className="mt-6 flex gap-3">
          <Link
            href={links.menu}
            className="px-4 py-2 rounded-md bg-black text-white text-sm"
          >
            メニューを見る
          </Link>
          <Link
            href={links.contact}
            className="px-4 py-2 rounded-md border text-sm"
          >
            お問い合わせ
          </Link>
          <a
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-md border text-sm"
          >
            Instagram
          </a>
        </div>
      </section>

      <footer className="border-t py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {brand.name}
      </footer>
    </main>
  );
}
