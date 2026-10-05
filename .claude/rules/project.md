# Project Rules — MH Landing

> Trang link-in-bio một trang (kiểu Linktree). Đọc file này trước khi plan,
> execute hay review.

## What This Project Is

Một trang tĩnh duy nhất: avatar, tên, bio, hàng icon mạng xã hội, danh sách
nút link. Chất lượng thiết kế là sản phẩm — spacing vỡ, contrast kém, hay
layout gãy ở 375px là **failed** change dù build vẫn chạy.

Phần lớn người xem vào từ điện thoại (link trong bio TikTok/Instagram) — luôn
kiểm tra mobile trước.

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 (không có
`tailwind.config`, cấu hình qua `@theme` trong `src/app/globals.css`) ·
TypeScript · npm. Xác nhận lại bằng `.claude/hooks/detect-stack.sh`.

`output: "export"` → build ra HTML tĩnh ở `out/`, host trên Cloudflare Pages.
Hệ quả: không có API route, không có server tối ưu ảnh (`images.unoptimized`)
— ảnh trong `public/` phải resize sẵn.

## Brand

Khách hàng: **Du học Hàn Quốc MH Edu**. Phong cách: Hàn Quốc trẻ trung — giấy
kẻ chấm, sticker viền mực + bóng đổ lệch (class `.sticker`), chữ Hangul trang
trí. Đỏ `--brand-red` lấy từ logo, xanh `--brand-blue` lấy từ cờ Hàn.
Chữ Hangul chỉ để trang trí (`aria-hidden` hoặc phụ đề), nội dung chính luôn
bằng tiếng Việt.

## Where Things Live

| Path | Purpose |
|------|---------|
| `src/data/profile.ts` | **Toàn bộ nội dung** (tên, bio, avatar, social, link). Sửa nội dung chỉ ở đây. |
| `src/styles/tokens.css` | Design tokens, light + dark (`prefers-color-scheme`). |
| `src/app/globals.css` | Import Tailwind + map token vào `@theme inline`. |
| `src/components/` | `ProfileHeader`, `SocialLinks`, `LinkCard`, `SocialIcon`. |
| `public/` | Avatar, thumbnail của link. |

## Directory Contract

| Path | Purpose | Who writes it |
|------|---------|---------------|
| `.claude/rules/` | Durable rules. Loaded every session via `CLAUDE.md`. | `/finish` |
| `.claude/commands/` | Slash-command workflows. | Human, or `/finish` **with approval** |
| `.claude/agents/` | Subagent definitions. | Human |
| `.claude/templates/` | Artifact skeletons used by commands. | Human |
| `.claude/brain/<task-slug>/` | Per-task working artifacts. | `/plan`, `/execute`, `/finish` |
| `docs/learned/` | Stack-specific deep knowledge and gotchas. | `/finish`, `/debug` |
| `docs/teach/` | Narrative debriefs, one per task, date-prefixed. | `/teach` |

## Non-Negotiables

- **No secrets in the repo.** `.env*` không bao giờ được commit.
- **No dependency added without stating why.** Hiện chỉ có next/react/react-dom.
- **Design tokens over magic numbers.** See [design-system.md](design-system.md).
- **Accessibility is a gate, not a polish step.** See [accessibility.md](accessibility.md).
- **Verify before reporting done.** See [verification.md](verification.md).

## Learned Patterns

> `/finish` appends here. Newest at the bottom. Keep each entry to 2–4 lines.

- **2026-10-05 — Không dùng font Hangul từ `next/font/google`.** Google chia
  font Hàn thành ~100 lát unicode-range → +65KB CSS và hàng chục request; điểm
  Lighthouse mobile tụt 96 → 71. Dùng bản cắt gọn tự host
  `src/fonts/jua-subset.woff2`, tạo bằng `npm run font:hangul`; **chạy lại mỗi
  khi thêm chữ Hangul**.
- **2026-10-05 — Font Jua không có dấu tiếng Việt.** Dòng trộn Việt + Hàn
  (marquee) dùng `font-mixed` (Baloo trước, Jua sau); `font-hangul` chỉ cho
  dòng thuần Hangul.
