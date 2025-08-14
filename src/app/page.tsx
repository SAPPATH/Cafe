import Image from "next/image";
import Link from "next/link";
import { Coffee, MapPin, Clock, Phone, Instagram, ArrowRight } from "lucide-react";
import { brand, copy, links } from "@/content/cafe";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-gray-100 flex items-center justify-center">
        <Image
          src="/hero.jpg"
          alt="EFLAO CAFE"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">{copy.heroTitle}</h1>
            <p className="text-lg">{copy.heroLead}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <ul className="list-disc pl-5 space-y-2">
          {copy.introBullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </section>

      {/* Menu Highlights */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Menu Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {copy.menuHighlights.map((item, i) => (
              <div key={i} className="bg-white shadow rounded-lg overflow-hidden">
                <Image
                  src={`/menu-${i + 1}.jpg`}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.price}</p>
                  <p className="mt-2 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="space-y-4">
          <p><MapPin className="inline-block mr-2" /> {copy.address}</p>
          <p><Phone className="inline-block mr-2" /> {copy.tel}</p>
          <p><Clock className="inline-block mr-2" /> 営業時間：</p>
          <ul className="pl-6 list-disc">
            {copy.hours.map((h, i) => (
              <li key={i}>{h.label}：{h.value}</li>
            ))}
          </ul>
          <p className="mt-4">
            <Instagram className="inline-block mr-2" />
            <Link href={links.instagram} target="_blank">Instagram</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
