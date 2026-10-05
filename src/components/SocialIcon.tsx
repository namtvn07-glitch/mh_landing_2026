// Icon nền tảng vẽ tay bằng SVG thay vì thêm thư viện icon — trang chỉ cần
// vài icon, và lucide đã ngừng hỗ trợ icon thương hiệu.
export type SocialPlatform =
  | "tiktok"
  | "instagram"
  | "facebook"
  | "messenger"
  | "zalo"
  | "youtube"
  | "threads"
  | "website"
  | "email"
  | "phone"
  | "star"
  | "arrow";

export const PLATFORM_LABELS: Record<SocialPlatform, string> = {
  tiktok: "TikTok",
  instagram: "Instagram",
  facebook: "Facebook",
  messenger: "Messenger",
  zalo: "Zalo",
  youtube: "YouTube",
  threads: "Threads",
  website: "Website",
  email: "Email",
  phone: "Điện thoại",
  star: "Nổi bật",
  arrow: "Mở liên kết",
};

type SocialIconProps = {
  platform: SocialPlatform;
  className?: string;
};

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function SocialIcon({ platform, className }: SocialIconProps) {
  const common = {
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    "aria-hidden": true,
    focusable: false,
    className,
  } as const;

  switch (platform) {
    case "tiktok":
      return (
        <svg {...common} fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common} {...STROKE}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} {...STROKE}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "messenger":
      return (
        <svg {...common} {...STROKE}>
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          <path d="m8 13 3-3 2 2 3-3" />
        </svg>
      );
    case "zalo":
      return (
        <svg {...common} {...STROKE}>
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          <path d="M9 9h6l-6 6h6" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common} {...STROKE}>
          <path d="M2.5 17a24.1 24.1 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      );
    case "threads":
      return (
        <svg {...common} {...STROKE}>
          <circle cx="12" cy="12" r="4" />
          <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
        </svg>
      );
    case "website":
      return (
        <svg {...common} {...STROKE}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      );
    case "email":
      return (
        <svg {...common} {...STROKE}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common} {...STROKE}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} {...STROKE}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common} {...STROKE}>
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      );
  }
}
