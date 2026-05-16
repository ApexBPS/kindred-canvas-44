import { PageShell } from "@/components/layout/PageShell";
import { Package, UtensilsCrossed, Sparkles } from "lucide-react";

const columns = [
  {
    icon: Package,
    title: "Physical Products",
    desc: "Non-consumable goods designed for everyday use or personal value.",
    items: [
      "Fashion & Apparel",
      "Accessories & Personal Items",
      "Art, Decor & Custom Creations",
    ],
    grad: "bg-gradient-warm",
  },
  {
    icon: UtensilsCrossed,
    title: "Culinary",
    desc: "Edible and drinkable products created for consumption or culinary experience.",
    items: [
      "Baked Goods & Desserts",
      "Savory Foods & Snacks",
      "Beverages & Specialty Drinks",
    ],
    grad: "bg-gradient-cool",
  },
  {
    icon: Sparkles,
    title: "Services & Experiences",
    desc: "Skill-based offerings or student-led initiatives that provide value without a physical product.",
    items: [
      "Creative & Content Services",
      "Tutoring & Study Support",
      "Student Projects & Digital Platforms",
    ],
    grad: "bg-gradient-warm",
  },
];

const Categories = () => (
  <PageShell kicker="Disciplines" title="Industries">
    <p className="max-w-2xl mx-auto text-center text-muted-foreground -mt-8 mb-16 font-garamond">
      Three tracks where ideas find their shape — choose the one that fits your vision.
    </p>

    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      {columns.map((c, i) => (
        <div
          key={c.title}
          className="glass glass-bordered card-premium reveal rounded-3xl p-8 flex flex-col transition-smooth hover:bg-white/10"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <div className={`w-14 h-14 rounded-2xl ${c.grad} flex items-center justify-center mb-6 shadow-glow`}>
            <c.icon size={22} className="text-primary-foreground" />
          </div>
          <h3 className="font-playfair text-3xl mb-3">{c.title}</h3>
          <p className="font-garamond text-sm text-foreground/80 mb-6 leading-relaxed">{c.desc}</p>

          <ul className="space-y-3 mt-auto">
            {c.items.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="glass-pill h-[2px] w-6 shrink-0 rounded-full bg-white/30"
                />
                <span className="font-garamond text-sm text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </PageShell>
);

export default Categories;
