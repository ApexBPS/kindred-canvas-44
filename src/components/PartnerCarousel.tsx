import { useCallback, useEffect, useState, CSSProperties } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Partner = {
  name: string;
  logo: string;
  tint: string; // HSL triplet, e.g. "0 70% 35%"
  description: string;
};

export const PartnerCarousel = ({ partners }: { partners: Partner[] }) => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "center",
    loop: true,
    containScroll: false,
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
  }, [embla, onSelect]);

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 touch-pan-y">
          {partners.map((p, i) => {
            const isActive = i === selected;
            const cardStyle: CSSProperties = {
              background: `linear-gradient(155deg, hsl(${p.tint} / ${isActive ? 0.28 : 0.18}), hsl(${p.tint} / 0.05) 70%)`,
              borderColor: `hsl(${p.tint} / ${isActive ? 0.55 : 0.3})`,
              boxShadow: isActive
                ? `0 30px 70px -25px hsl(220 60% 4% / 0.6), 0 0 50px hsl(${p.tint} / 0.35)`
                : undefined,
            };
            return (
              <div
                key={p.name}
                className="pl-4 shrink-0 grow-0 basis-[82%] sm:basis-[62%] md:basis-[48%]"
              >
                <article
                  className="glass rounded-3xl p-6 sm:p-7 border h-full flex flex-col transition-all duration-500"
                  style={{
                    ...cardStyle,
                    opacity: isActive ? 1 : 0.55,
                    transform: isActive ? "scale(1)" : "scale(0.92)",
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0">
                      <img
                        src={p.logo}
                        alt={`${p.name} logo`}
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        className="w-full h-full object-cover block"
                      />
                    </div>
                    <h3 className="font-playfair text-2xl sm:text-3xl text-foreground leading-tight">
                      {p.name}
                    </h3>
                  </div>
                  <p className="font-garamond text-foreground/90 leading-relaxed text-base sm:text-lg">
                    {p.description}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-6">
        <button
          onClick={() => embla?.scrollPrev()}
          aria-label="Previous"
          className="glass glass-pill p-2.5 hover:bg-white/15 transition-smooth"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-1.5">
          {partners.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => embla?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === selected ? "w-6 bg-accent" : "w-1.5 bg-foreground/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => embla?.scrollNext()}
          aria-label="Next"
          className="glass glass-pill p-2.5 hover:bg-white/15 transition-smooth"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
