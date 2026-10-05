import Image from "next/image";
import type { Profile } from "@/data/profile";

type ProfileHeaderProps = Pick<Profile, "name" | "tagline" | "handle" | "avatar">;

export function ProfileHeader({ name, tagline, handle, avatar }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <div className="relative">
        <Image
          src={avatar.src}
          alt={avatar.alt}
          width={120}
          height={120}
          priority
          className="sticker size-[var(--avatar-size)] rounded-full object-cover"
        />
        {/* Sticker dán quanh avatar — góc xoay là chi tiết trang trí một lần. */}
        <span
          aria-hidden="true"
          className="sticker absolute -top-2 -left-10 -rotate-12 rounded-full bg-blue px-3 py-1 font-hangul text-sm text-on-blue"
        >
          안녕! 👋
        </span>
        <span
          aria-hidden="true"
          className="sticker absolute -right-10 -bottom-1 rotate-6 rounded-full bg-surface px-3 py-1 font-hangul text-sm text-accent-text"
        >
          화이팅 ♥
        </span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <h1 className="font-display text-[length:var(--text-display-size)] leading-[var(--text-display-line)] font-extrabold">
          {name}
          <span className="sr-only"> — {tagline}</span>
        </h1>
        <p className="flex items-center gap-2 text-sm font-bold">
          <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-on-accent">{tagline}</span>
          <span className="text-muted">{handle}</span>
        </p>
      </div>
    </header>
  );
}
