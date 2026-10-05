// Tạo bản font Jua chỉ chứa đúng các chữ Hangul trang đang dùng.
// Font Hangul đầy đủ được Google chia ~100 lát, kéo theo hàng chục request và
// ~65KB CSS @font-face; bản cắt gọn chỉ vài KB.
//
// Chạy lại mỗi khi thêm/sửa chữ Hangul trong src/:   npm run font:hangul
// Chữ nào thiếu trong bản cắt sẽ rơi về font Hàn của hệ điều hành — không vỡ,
// chỉ khác kiểu chữ.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const SRC_DIR = "src";
const OUT_FILE = "src/fonts/jua-subset.woff2";
const HANGUL = /[ㄱ-ㆎ가-힣]/gu;

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return collectFiles(path);
      return /\.(tsx?|css)$/.test(entry.name) ? [path] : [];
    }),
  );
  return nested.flat();
}

const files = await collectFiles(SRC_DIR);
const chars = new Set();
for (const file of files) {
  for (const ch of (await readFile(file, "utf8")).match(HANGUL) ?? []) chars.add(ch);
}

if (chars.size === 0) {
  console.error("Không tìm thấy chữ Hangul nào trong src/.");
  process.exit(1);
}

// Có thêm Latin + dấu câu hay đi kèm (!, ♥...) để dòng chữ không bị trộn font.
const text = [...chars].sort().join("") + " !?♥★·";
const cssUrl = `https://fonts.googleapis.com/css2?family=Jua&text=${encodeURIComponent(text)}`;

// User-Agent của trình duyệt hiện đại để Google trả về woff2.
const css = await fetch(cssUrl, {
  headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36" },
}).then((res) => {
  if (!res.ok) throw new Error(`Google Fonts trả ${res.status}`);
  return res.text();
});

const fontUrl = css.match(/url\((https:[^)]+)\)/)?.[1];
if (!fontUrl) throw new Error("Không tìm thấy URL font trong CSS trả về:\n" + css);

const font = Buffer.from(await fetch(fontUrl).then((res) => res.arrayBuffer()));
await writeFile(OUT_FILE, font);
console.log(`${chars.size} chữ Hangul → ${OUT_FILE} (${(font.length / 1024).toFixed(1)} KB)`);
