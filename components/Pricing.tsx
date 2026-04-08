const highlights = [
  {
    title: 'Vé người lớn',
    price: '250.000đ',
    desc: 'Đã bao gồm vé đi thuyền và tham quan từ điểm số 1 - 5 và quay lại.',
  },
  {
    title: 'Vé trẻ em (1m - 1m3)',
    price: '120.000đ',
    desc: 'Đã bao gồm vé đi thuyền và tham quan.',
  },
  {
    title: 'Tam Coc Discovery Tour',
    price: '350.000đ',
    desc: 'Bao gồm trải nghiệm đi thuyền và xe điện trung chuyển đến các điểm Tam Cốc - Đền Thái Vi - Động Tiên - Bích Động.',
  },
];

export default function Pricing() {
  return (
    <section id="bang-gia" className="bg-slate-50 py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Bảng giá dịch vụ</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Lựa chọn phù hợp cho mọi hành trình</h2>
          <p className="mt-4 text-lg text-slate-600">
            Các gói vé hiện đang áp dụng tại khu du lịch Tam Cốc - Bích Động.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <div className="mt-4 text-4xl font-bold text-emerald-700">{item.price}</div>
              <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
              <a
                href="#thong-tin-cong-ty"
                className="mt-8 inline-block rounded-2xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
              >
                Đăng ký tham quan
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
