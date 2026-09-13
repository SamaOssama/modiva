export default function Categories() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="w-full px-12 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        <div className="flex flex-col gap-9">
          <div className="relative h-93.5 overflow-hidden cursor-pointer">
            <img
              src={`${baseUrl}assets/images/women.jpg`}
              alt="Formal Woman"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/20" />
            <h3 className="absolute left-8 top-1/2 -translate-y-1/2 text-white font-playfair font-medium text-3xl lg:text-5xl tracking-widest uppercase">
              Formal Woman
            </h3>
          </div>

          <div className="relative h-93.5 overflow-hidden cursor-pointer">
            <img
              src={`${baseUrl}assets/images/men.jpg`}
              alt="Formal Men"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <h3 className="absolute left-8 top-1/2 -translate-y-1/2 text-white font-playfair font-medium text-3xl lg:text-5xl tracking-widest uppercase">
              Formal Men
            </h3>
          </div>
        </div>

        <div className="relative h-195 overflow-hidden cursor-pointer">
          <img
            src={`${baseUrl}assets/images/Rectangle 133.png`}
            alt="Casual Style"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
          <h3 className="absolute left-8 top-1/2 -translate-y-1/2 text-white font-playfair font-medium text-3xl lg:text-5xl tracking-widest uppercase">
            Casual Style
          </h3>
        </div>
      </div>
    </section>
  );
}