const events = ['Sắc vàng Tam Cốc', 'Lễ hội đền Thái Vi', 'Sắc hồng Tam Cốc'];

export default function Events() {
  return (
    <section className="section-shell py-20">
      <div className="rounded-[2rem] bg-emerald-900 p-10 text-white shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Sự kiện nổi bật</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Những dấu ấn theo mùa tại Tam Cốc</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {events.map((event, idx) => (
            <article key={event} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="text-sm text-emerald-200">0{idx + 1}</div>
              <div className="mt-1 text-xl font-semibold">{event}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
