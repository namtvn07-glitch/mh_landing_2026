import Image from "next/image";
import type { Profile } from "@/data/profile";

type BioBubbleProps = Pick<Profile, "name" | "bio" | "avatar">;

// Đoạn giới thiệu trình bày như một tin nhắn chat — quen mắt với người trẻ.
export function BioBubble({ name, bio, avatar }: BioBubbleProps) {
  return (
    <section aria-label="Giới thiệu" className="flex items-start gap-2">
      <Image
        src={avatar.src}
        alt=""
        width={36}
        height={36}
        className="mt-1 size-9 shrink-0 rounded-full border-2 border-ink object-cover"
      />
      <div className="flex min-w-0 flex-col gap-1">
        <p className="flex items-baseline gap-2 text-xs font-bold">
          {name}
          <span className="font-hangul font-normal text-muted">방금</span>
        </p>
        <p className="sticker rounded-lg rounded-tl-sm bg-surface px-4 py-3 text-[length:var(--text-body-size)] leading-[var(--text-body-line)]">
          {bio}
        </p>
      </div>
    </section>
  );
}
