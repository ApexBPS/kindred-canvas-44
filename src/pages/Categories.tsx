import { PageShell } from "@/components/layout/PageShell";
import { Cpu, Palette, BookOpen, Globe, Music, Camera, Leaf, Boxes } from "lucide-react";

const cats = [
  { icon: Cpu, name: "Technology", count: 12, grad: "bg-gradient-cool" },
  { icon: Palette, name: "Design", count: 9, grad: "bg-gradient-warm" },
  { icon: BookOpen, name: "Editorial", count: 7, grad: "bg-gradient-cool" },
  { icon: Globe, name: "Civic", count: 5, grad: "bg-gradient-warm" },
  { icon: Music, name: "Sound", count: 6, grad: "bg-gradient-cool" },
  { icon: Camera, name: "Visual", count: 8, grad: "bg-gradient-warm" },
  { icon: Leaf, name: "Sustainability", count: 4, grad: "bg-gradient-cool" },
  { icon: Boxes, name: "Product", count: 10, grad: "bg-gradient-warm" },
];

const Categories = () => (
  <PageShell kicker="Disciplines" title="Categories">
    <p className="max-w-2xl mx-auto text-center text-muted-foreground -mt-8 mb-20">
      Eight verticals where our work happens. Each one a community of practice.
    </p>

    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {cats.map((c, i) => (
        <div key={c.name} className="group glass rounded-3xl p-7 transition-smooth hover:bg-white/10 hover:-translate-y-1 cursor-pointer animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
          <div className={`w-14 h-14 rounded-2xl ${c.grad} flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 transition-smooth`}>
            <c.icon size={22} className="text-primary-foreground" />
          </div>
          <h3 className="font-serif text-2xl">{c.name}</h3>
          <p className="text-sm text-muted-foreground mt-2">{c.count} active projects</p>
        </div>
      ))}
    </div>
  </PageShell>
);

export default Categories;
