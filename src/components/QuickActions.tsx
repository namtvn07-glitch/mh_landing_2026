import { SocialIcon } from "@/components/SocialIcon";
import type { Profile } from "@/data/profile";

type QuickActionsProps = Pick<Profile, "phone" | "zaloHref">;

export function QuickActions({ phone, zaloHref }: QuickActionsProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <a
        href={`tel:${phone.tel}`}
        className="sticker flex min-h-14 items-center justify-center gap-2 rounded-md bg-blue px-3 py-2 text-on-blue"
      >
        <SocialIcon platform="phone" className="shrink-0 text-xl" />
        <span className="flex flex-col text-left leading-tight">
          <span className="text-sm font-bold">Gọi ngay</span>
          <span className="text-xs">{phone.display}</span>
        </span>
      </a>
      <a
        href={zaloHref}
        target="_blank"
        rel="noopener noreferrer"
        className="sticker flex min-h-14 items-center justify-center gap-2 rounded-md bg-surface px-3 py-2 text-text"
      >
        <SocialIcon platform="zalo" className="shrink-0 text-xl text-blue-text" />
        <span className="flex flex-col text-left leading-tight">
          <span className="text-sm font-bold">Nhắn Zalo</span>
          <span className="font-hangul text-xs text-muted">잘로 상담</span>
        </span>
      </a>
    </div>
  );
}
