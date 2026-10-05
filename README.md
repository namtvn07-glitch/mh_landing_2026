# MH Edu — Link-in-bio

Trang link-in-bio cho Du học Hàn Quốc MH Edu. Next.js 16 + Tailwind CSS v4 + TypeScript,
xuất ra HTML tĩnh (thư mục `out/`).

## Chạy

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # tạo bản tĩnh trong out/
```

## Sửa nội dung

Mọi thứ nằm trong `src/data/profile.ts`: tên, bio, số điện thoại, Zalo, icon mạng xã hội,
danh sách nút, chữ chạy trên đầu trang.

- Ảnh đại diện: bỏ file vào `public/`, resize sẵn về ~384px (bản tĩnh không tự tối ưu ảnh).
- Nút nổi bật: `isFeatured: true`. Màu ô icon: `tint: "pink" | "blue" | "cream" | "mint"`.
- Màu sắc / bo góc / khoảng cách: `src/styles/tokens.css` (có bản sáng và tối).
- **Thêm hoặc sửa chữ Hàn (Hangul)** → chạy `npm run font:hangul` để cập nhật font.
  Font chỉ chứa đúng các chữ đang dùng cho nhẹ; quên chạy thì chữ mới vẫn hiện, chỉ
  là bằng font Hàn của hệ điều hành.

## Deploy lên Cloudflare Pages (miễn phí, cho phép dùng thương mại)

**Cách 1 — nối GitHub (tự deploy mỗi lần push):**
1. Đẩy repo lên GitHub.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → chọn repo.
3. Framework preset: **Next.js (Static HTML Export)** · Build command: `npm run build` ·
   Output directory: `out`.
4. Environment variable: `NEXT_PUBLIC_SITE_URL` = domain thật (vd. `https://link.duhocmh.vn`).

**Cách 2 — upload trực tiếp từ máy:**
```bash
npm run build
npx wrangler pages deploy out --project-name mh-edu-links
```

**Tên miền riêng:** trong project Pages → Custom domains → thêm `link.duhocmh.vn`, rồi tạo
bản ghi CNAME theo hướng dẫn Cloudflare hiển thị.
