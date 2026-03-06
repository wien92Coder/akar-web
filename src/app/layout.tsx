import type { Metadata } from "next";
import { Inter, Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "AKAR Jogja - Lembaga Pelatihan Kerja Hospitality Profesional",
  description:
    "AKAR adalah lembaga pelatihan kerja berbasis industri nyata yang mempersiapkan tenaga hospitality siap kerja melalui praktik langsung di hotel. Training yang tepat, peluang kerja datang lebih cepat!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} ${inter.variable} ${bebasNeue.variable} ${plusJakartaSans.variable}`}>{children}</body>
    </html>
  );
}
