import Gallery from './Gallery';

const journey = ['Tam Cốc', 'Đền Thái Vi', 'Động Tiên', 'Bích Động'];

export default function Journey() {
  return (
    <section id="hanh-trinh" className="section-shell py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Bản đồ hành trình
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Hành trình trải nghiệm Tam Cốc - Bích Động</h2>
        <p className="mt-4 text-lg text-slate-600">
          Khám phá các điểm đến nổi bật trong một chuyến đi liền mạch, kết hợp phong cảnh, di tích
          và trải nghiệm văn hóa địa phương.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-4">
        {journey.map((item, index) => (
          <article key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="text-sm font-semibold text-emerald-700">Điểm {index + 1}</div>
            <h3 className="mt-2 text-2xl font-bold">{item}</h3>
            <p className="mt-3 text-slate-600">
              Điểm dừng chân nổi bật trong hành trình khám phá vẻ đẹp Tam Cốc - Bích Động.
            </p>
          </article>
        ))}
      </div>

      <Gallery />
    </section>
  );
}
