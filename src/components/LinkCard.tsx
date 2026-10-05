import { SocialIcon } from "@/components/SocialIcon";
import type { ProfileLink, Tint } from "@/data/profile";

const TINT_CLASS: Record<Tint, string> = {
  pink: "bg-tint-pink",
  blue: "bg-tint-blue",
  cream: "bg-tint-cream",
  mint: "bg-tint-mint",
};

type LinkCardProps = {
  link: ProfileLink;
};

export function LinkCard({ link }: LinkCardProps) {
  const { title, caption, href, icon, tint = "pink", isFeatured } = link;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "sticker relative flex min-h-16 items-center gap-3 rounded-lg p-3",
        isFeatured ? "bg-accent text-on-accent" : "bg-surface text-text",
      ].join(" ")}
    >
      <span
        className={[
          "flex size-[var(--tile-size)] shrink-0 items-center justify-center rounded-sm border-2 border-ink text-2xl",
          isFeatured ? "bg-surface text-accent-text" : `${TINT_CLASS[tint]} text-text`,
        ].join(" ")}
      >
        <SocialIcon platform={icon} />
      </span>

      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-[length:var(--text-title-size)] leading-[var(--text-title-line)] font-bold text-balance">
          {title}
        </span>
        {caption ? (
          <span
            className={[
              "font-hangul text-[length:var(--text-caption-size)] leading-[var(--text-caption-line)]",
              isFeatured ? "text-on-accent" : "text-muted",
            ].join(" ")}
          >
            {caption}
          </span>
        ) : null}
      </span>

      <SocialIcon platform="arrow" className="shrink-0 text-xl" />

      {isFeatured ? (
        <span
          aria-hidden="true"
          className="sticker absolute -top-3 -right-2 rotate-6 rounded-full bg-blue px-2 py-0.5 font-hangul text-xs text-on-blue"
        >
          추천 ★
        </span>
      ) : null}
    </a>
  );
}
