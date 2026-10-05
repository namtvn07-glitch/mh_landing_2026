import { PLATFORM_LABELS, SocialIcon } from "@/components/SocialIcon";
import type { SocialLink } from "@/data/profile";

type SocialLinksProps = {
  socials: SocialLink[];
};

export function SocialLinks({ socials }: SocialLinksProps) {
  if (socials.length === 0) return null;

  return (
    <nav aria-label="Mạng xã hội">
      <ul className="flex flex-wrap items-center justify-center gap-3">
        {socials.map(({ platform, href }) => (
          <li key={platform}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={PLATFORM_LABELS[platform]}
              className="sticker flex size-11 items-center justify-center rounded-full bg-surface text-xl text-text"
            >
              <SocialIcon platform={platform} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
