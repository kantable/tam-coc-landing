const companyInfo = {
  name: 'Tam Coc Scenic Area',
  address: 'Xã Ninh Hải, Huyện Hoa Lư, Tỉnh Ninh Bình',
  hotline: '19009157',
  email: 'info@tamcoc.vn',
  zalo: 'https://zalo.me/0972924567',
};

export default function Contact() {
  return (
    <section id="thong-tin-cong-ty" className="section-shell py-20">
      <div className="rounded-[2rem] bg-slate-900 p-10 text-white shadow-soft">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Thông tin công ty</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Kết nối với Tam Cốc - Bích Động</h2>
            <p className="mt-4 max-w-2xl text-white/75">
              Đây là khu vực hiển thị thông tin chính thức để khách dễ dàng liên hệ và đặt tour.
            </p>

            <div className="mt-8 space-y-3 text-white/85">
              <p><span className="font-semibold text-white">Tên công ty:</span> {companyInfo.name}</p>
              <p><span className="font-semibold text-white">Địa chỉ:</span> {companyInfo.address}</p>
              <p><span className="font-semibold text-white">Hotline:</span> {companyInfo.hotline}</p>
              <p><span className="font-semibold text-white">Email:</span> {companyInfo.email}</p>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-white/5 p-8 ring-1 ring-white/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Liên hệ ngay</p>
            <h3 className="mt-3 text-2xl font-bold">Đặt tour qua Zalo</h3>
            <p className="mt-4 text-white/75">
              Khi khách nhấn vào nút liên hệ, trang sẽ dẫn tới thông tin công ty và nút Zalo chính thức ở đây.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={companyInfo.zalo}
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-2xl bg-emerald-500 px-5 py-4 text-center font-semibold text-white transition hover:bg-emerald-400"
              >
                Liên hệ Zalo
              </a>
              <a
                href={`tel:${companyInfo.hotline}`}
                className="block w-full rounded-2xl border border-white/15 px-5 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Gọi hotline
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-8 flex flex-col gap-4 border-t border-slate-200 px-1 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© Tam Cốc - Bích Động. Landing page. Sponsor by StarClaw.io</p>
        <div className="flex flex-wrap gap-4">
          <a href="#hanh-trinh" className="hover:text-slate-900">Hành trình</a>
          <a href="#bang-gia" className="hover:text-slate-900">Bảng giá</a>
          <a href="#thong-tin-cong-ty" className="hover:text-slate-900">Liên hệ</a>
        </div>
      </footer>
    </section>
  );
}
