import Image from 'next/image';

const images = [
  { src: '/images/tam-coc-1.jpg', alt: 'Tam Cốc 1' },
  { src: '/images/tam-coc-2.jpg', alt: 'Tam Cốc 2' },
  { src: '/images/tam-coc-3.jpg', alt: 'Tam Cốc 3' },
  { src: '/images/tam-coc-4.jpg', alt: 'Tam Cốc 4' },
  { src: '/images/tam-coc-5.jpg', alt: 'Tam Cốc 5' },
];

export default function Gallery() {
  return (
    <div className="mt-16 rounded-[2rem] bg-slate-50 p-8 md:p-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Hình ảnh & video
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Không gian trình chiếu Tam Cốc</h2>
        <p className="mt-4 text-lg text-slate-600">
          Khu vực này nằm ngay dưới phần hành trình 1 - 2 - 3 - 4 để hiển thị hình ảnh thực tế và
          video giới thiệu Tam Cốc - Bích Động.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-3 shadow-soft ring-1 ring-slate-200 lg:col-span-2">
          <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-emerald-100 to-lime-100">
            <video className="aspect-video w-full" controls preload="metadata" poster="/images/tam-coc-1.jpg">
              <source src="/videos/tam-coc.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </div>
        </div>
        <div className="grid gap-6">
          {images.slice(0, 2).map((image) => (
            <div key={image.src} className="overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-slate-200">
              <div className="relative aspect-[4/3]">
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {images.slice(2).map((image) => (
          <div key={image.src} className="overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-slate-200">
            <div className="relative aspect-[4/3]">
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
