type MarqueeProps = {
  items: string[];
};

// Dải chữ chạy thuần trang trí — nội dung đã có ở phần thân trang, nên ẩn với
// trình đọc màn hình. Lặp nội dung 2 lần rồi trượt -50% để vòng lặp liền mạch.
export function Marquee({ items }: MarqueeProps) {
  // Mỗi bản sao phải rộng hơn màn hình lớn nhất (~1920px), nếu không cuối vòng sẽ hở.
  const sequence = [...items, ...items, ...items];

  return (
    <div aria-hidden="true" className="overflow-hidden border-b-2 border-ink bg-accent py-2 text-on-accent">
      <div className="marquee__track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {sequence.map((item, index) => (
              <li
                key={`${copy}-${index}`}
                className="flex items-center gap-4 pr-4 font-mixed text-sm font-extrabold tracking-wide whitespace-nowrap"
              >
                {item}
                <span className="text-xs">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
