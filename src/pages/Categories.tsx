import { PageShell } from "@/components/layout/PageShell";

type Industry = {
  title: string;
  blurb: string;
  items: string[];
  tint: string; // HSL triplet
};

const industries: Industry[] = [
  {
    title: "Physical Products",
    blurb: "Non-consumable goods designed for everyday use or personal value.",
    items: [
      "Fashion & Apparel",
      "Accessories & Personal Items",
      "Art, Decor & Custom Creations",
    ],
    tint: "260 55% 70%",
  },
  {
    title: "Culinary",
    blurb: "Edible and drinkable products created for consumption or culinary experience.",
    items: [
      "Baked Goods & Desserts",
      "Savory Foods & Snacks",
      "Beverages & Specialty Drinks",
    ],
    tint: "25 70% 60%",
  },
  {
    title: "Services & Experiences",
    blurb:
      "Skill-based offerings or student-led initiatives that provide value without a physical product.",
    items: [
      "Creative & Content Services",
      "Tutoring & Study Support",
      "Student Projects & Digital Platforms",
    ],
    tint: "200 70% 65%",
  },
];

const Categories = () => (
  <PageShell title="Industries">
    <p className="max-w-2xl mx-auto text-center text-sm text-muted-foreground -mt-8 mb-12 font-garamond px-4">
      Three tracks where ideas find their shape — choose the one that fits your vision.
    </p>
    <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 px-2">
      {industries.map((ind, i) => (
        <article
          key={ind.title}
          className="reveal glass glass-bordered card-premium rounded-3xl p-7 flex flex-col"
          style={{
            transitionDelay: `${i * 90}ms`,
            background: `linear-gradient(155deg, hsl(${ind.tint} / 0.18), hsl(${ind.tint} / 0.04) 60%, transparent)`,
            borderColor: `hsl(${ind.tint} / 0.35)`,
          }}
        >
          <h3 className="font-playfair text-3xl text-gradient leading-tight">{ind.title}</h3>
          <div className="gradient-line my-4" />
          <p className="font-garamond text-foreground/85 leading-relaxed mb-5">{ind.blurb}</p>
          <ul className="mt-auto space-y-2.5 font-garamond text-foreground/95">
            {ind.items.map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                  style={{ background: `hsl(${ind.tint})`, boxShadow: `0 0 10px hsl(${ind.tint} / 0.8)` }}
                />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </PageShell>
);

export default Categories;
