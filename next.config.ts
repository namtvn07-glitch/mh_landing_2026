import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Trang hoàn toàn tĩnh → xuất ra thư mục out/ để host ở bất kỳ static host
  // nào (Cloudflare Pages, Netlify, server của duhocmh.vn).
  output: "export",
  // Static export không có server tối ưu ảnh; ảnh trong public/ đã được
  // resize sẵn đúng kích thước dùng.
  images: { unoptimized: true },
  // Cho phép mở dev server từ điện thoại cùng mạng Wi-Fi (http://192.168.1.x:3000).
  allowedDevOrigins: ["192.168.1.*"],
};

export default nextConfig;
