import type { Metadata, Viewport } from "next";
import { Baloo_2, Be_Vietnam_Pro } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { profile } from "@/data/profile";

// Không đặt tên biến trùng token (--font-body/--font-display) — token sẽ tự
// tham chiếu chính nó và font-family sập về rỗng.
const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  // Chỉ nạp độ đậm thực dùng — mỗi độ đậm × mỗi subset là thêm một file font.
  weight: ["400", "700"],
  display: "swap",
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin", "vietnamese"],
  weight: "800",
  display: "swap",
});

// Bản Jua chỉ chứa các chữ Hangul trang đang dùng (scripts/subset-hangul-font.mjs).
// Bản đầy đủ từ Google bị chia ~100 lát → hàng chục request + ~65KB CSS.
const jua = localFont({
  src: "../fonts/jua-subset.woff2",
  variable: "--font-jua",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: `${profile.name} — ${profile.tagline}`,
  description: profile.bio,
  openGraph: {
    title: `${profile.name} — ${profile.tagline}`,
    description: profile.bio,
    type: "website",
    images: [profile.avatar.src],
  },
};

export const viewport: Viewport = {
  themeColor: "#c8000b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${baloo.variable} ${jua.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
