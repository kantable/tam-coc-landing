const destinations = ['Tam Cốc', 'Đền Thái Vi', 'Động Tiên', 'Bích Động'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-lime-500 text-white">
      <div className="absolute inset-0 bg-black/15" />
      <div className="section-shell relative py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur">
              Welcome to Tam Cốc - Bích Động
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Chào mừng quý khách đến với Tam Cốc - Bích Động
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Khám phá hành trình trải nghiệm đặc sắc với cảnh sắc thiên nhiên nổi bật, tour tham
              quan hấp dẫn và những sự kiện mang đậm dấu ấn Tam Cốc.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#bang-gia"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-emerald-900 shadow-soft transition hover:-translate-y-0.5"
              >
                Xem bảng giá
              </a>
              <a
                href="#hanh-trinh"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Xem hành trình
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.2em] text-white/70">Tour nổi bật</div>
              <div className="mt-3 text-3xl font-bold">Discovery Tour</div>
              <p className="mt-3 text-white/85">
                Trọn vẹn trải nghiệm Tam Cốc với thuyền và xe điện trung chuyển.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.2em] text-white/70">Giá từ</div>
              <div className="mt-3 text-3xl font-bold">120.000đ</div>
              <p className="mt-3 text-white/85">Phù hợp cho gia đình và nhóm khách đa dạng.</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur sm:col-span-2">
              <div className="text-sm uppercase tracking-[0.2em] text-white/70">Điểm đến</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {destinations.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
