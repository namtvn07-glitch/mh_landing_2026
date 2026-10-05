import { BioBubble } from "@/components/BioBubble";
import { LinkCard } from "@/components/LinkCard";
import { Marquee } from "@/components/Marquee";
import { ProfileHeader } from "@/components/ProfileHeader";
import { QuickActions } from "@/components/QuickActions";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Marquee items={profile.marquee} />

      <main className="mx-auto flex w-full max-w-[var(--content-max)] flex-col gap-6 px-4 pt-8 pb-8">
        <ProfileHeader
          name={profile.name}
          tagline={profile.tagline}
          handle={profile.handle}
          avatar={profile.avatar}
        />

        <SocialLinks socials={profile.socials} />

        <BioBubble name={profile.name} bio={profile.bio} avatar={profile.avatar} />

        <QuickActions phone={profile.phone} zaloHref={profile.zaloHref} />

        <ul className="flex flex-col gap-4" aria-label="Liên kết">
          {profile.links.map((link) => (
            <li key={link.href + link.title}>
              <LinkCard link={link} />
            </li>
          ))}
        </ul>

        <footer className="pt-4 text-center text-xs text-muted">
          <p className="font-hangul text-sm text-accent-text">감사합니다 ♥</p>
          <p>© {profile.name} · {profile.tagline}</p>
        </footer>
      </main>
    </>
  );
}
