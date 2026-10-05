/*
  Toàn bộ nội dung trang nằm ở file này — đổi tên, bio, ảnh, link ở đây,
  không cần đụng vào component.
  Ảnh: bỏ vào thư mục public/ rồi trỏ đường dẫn "/ten-anh.jpg" (nên resize
  sẵn về ~384px vì static export không tự tối ưu ảnh).
*/
import type { SocialPlatform } from "@/components/SocialIcon";

export type Tint = "pink" | "blue" | "cream" | "mint";

export type SocialLink = {
  platform: SocialPlatform;
  href: string;
};

export type ProfileLink = {
  title: string;
  /** Dòng phụ tiếng Hàn — trang trí, đọc như phụ đề. */
  caption?: string;
  href: string;
  icon: SocialPlatform;
  tint?: Tint;
  /** Làm nổi bật nút (vd. đăng ký tư vấn). */
  isFeatured?: boolean;
};

export type Profile = {
  name: string;
  tagline: string;
  handle: string;
  bio: string;
  avatar: { src: string; alt: string };
  phone: { display: string; tel: string };
  zaloHref: string;
  marquee: string[];
  socials: SocialLink[];
  links: ProfileLink[];
};

export const profile: Profile = {
  name: "MH Edu",
  tagline: "Du học Hàn Quốc",
  handle: "@duhochanquocmh",
  bio: "Chúng mình là MH Edu — Nơi giải mã và hiện thực hóa câu chuyện du học Hàn Quốc của riêng bạn. MH Edu đồng hành cùng bạn xuyên suốt quá trình xử lý hồ sơ, sát cánh trong mọi giai đoạn để mang về tấm visa du học trọn vẹn nhất.",
  avatar: { src: "/logo.jpg", alt: "Logo Du học Hàn Quốc MH Edu" },
  phone: { display: "0848 335 179", tel: "0848335179" },
  // Website duhocmh.vn đang ghi Zalo 0833633135 — xác nhận lại số nào đúng.
  zaloHref: "https://zalo.me/0848335179",
  marquee: ["한국 유학", "DU HỌC HÀN QUỐC", "화이팅!", "VISA TRỌN VẸN", "안녕하세요", "MH EDU"],
  socials: [
    { platform: "facebook", href: "https://www.facebook.com/duhochanquocmh/" },
    { platform: "tiktok", href: "https://www.tiktok.com/@duhochanquocmh" },
    { platform: "youtube", href: "https://www.youtube.com/@DUHOCHANQUOCMH" },
    { platform: "website", href: "https://www.duhocmh.vn/" },
  ],
  links: [
    {
      title: "Đăng ký tư vấn du học miễn phí",
      caption: "무료 상담 신청",
      href: "https://m.me/duhochanquocmh",
      icon: "messenger",
      isFeatured: true,
    },
    {
      title: "Website chính thức duhocmh.vn",
      caption: "홈페이지",
      href: "https://www.duhocmh.vn/",
      icon: "website",
      tint: "blue",
    },
    {
      title: "Fanpage Facebook",
      caption: "페이스북",
      href: "https://www.facebook.com/duhochanquocmh/",
      icon: "facebook",
      tint: "pink",
    },
    {
      title: "TikTok @duhochanquocmh",
      caption: "틱톡",
      href: "https://www.tiktok.com/@duhochanquocmh",
      icon: "tiktok",
      tint: "cream",
    },
    {
      title: "YouTube MH Edu",
      caption: "유튜브",
      href: "https://www.youtube.com/@DUHOCHANQUOCMH",
      icon: "youtube",
      tint: "mint",
    },
  ],
};
