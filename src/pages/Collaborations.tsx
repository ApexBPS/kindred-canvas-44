import { PageShell } from "@/components/layout/PageShell";

const partners = [
  { name: "Northwind Studio", type: "Design", year: "2023 — present" },
  { name: "Halcyon Labs", type: "Research", year: "2022 — present" },
  { name: "Meridian Press", type: "Editorial", year: "2024 — present" },
  { name: "Atlas Foundry", type: "Engineering", year: "2021 — present" },
  { name: "Citrine Capital", type: "Funding", year: "2023 — present" },
  { name: "Vale & Co.", type: "Strategy", year: "2024 — present" },
];

const Collaborations = () => (
  <PageShell kicker="Together" title="Collaborations">
    <p className="max-w-2xl mx-auto text-center text-muted-foreground -mt-8 mb-20">
      The studios, labs, and partners who've shaped our trajectory.
    </p>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
      {partners.map((p, i) => (
        <div key={p.name} className="glass rounded-3xl p-7 flex items-center justify-between gap-4 transition-smooth hover:bg-white/10 animate-fade-in" style={{ animationDelay: `${i * 0.06}s` }}>
          <div>
            <h3 className="font-serif text-2xl">{p.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{p.type}</p>
          </div>
          <div className="text-xs uppercase tracking-widest text-accent text-right">{p.year}</div>
        </div>
      ))}
    </div>

    <div className="max-w-3xl mx-auto mt-20 glass-strong rounded-[2rem] p-10 text-center animate-scale-in">
      <h2 className="font-serif text-3xl md:text-4xl text-gradient mb-3">Become a partner</h2>
      <p className="text-muted-foreground mb-6">We're always open to thoughtful collaborations. Tell us what you're building.</p>
      <a href="mailto:partners@aurora.org" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-warm text-primary-foreground font-medium shadow-glow transition-smooth hover:scale-[1.02]">
        partners@aurora.org
      </a>
    </div>
  </PageShell>
);

export default Collaborations;
