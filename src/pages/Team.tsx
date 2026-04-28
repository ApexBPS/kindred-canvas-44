import { PageShell } from "@/components/layout/PageShell";

const team = [
  { name: "Iris Vale", role: "Director", initials: "IV", grad: "from-[hsl(var(--sky))] to-[hsl(var(--slate))]" },
  { name: "Mateo Ruiz", role: "Head of Design", initials: "MR", grad: "from-[hsl(var(--sand))] to-[hsl(var(--cocoa))]" },
  { name: "Anya Okafor", role: "Head of Engineering", initials: "AO", grad: "from-[hsl(var(--cream))] to-[hsl(var(--sand))]" },
  { name: "Linus Park", role: "Research Lead", initials: "LP", grad: "from-[hsl(var(--sky))] to-[hsl(var(--cream))]" },
  { name: "Saoirse Lin", role: "Communications", initials: "SL", grad: "from-[hsl(var(--cocoa))] to-[hsl(var(--navy))]" },
  { name: "Jules Hart", role: "Operations", initials: "JH", grad: "from-[hsl(var(--slate))] to-[hsl(var(--sky))]" },
  { name: "Noor Ahmadi", role: "Partnerships", initials: "NA", grad: "from-[hsl(var(--sand))] to-[hsl(var(--cream))]" },
  { name: "Theo Bjornsen", role: "Product", initials: "TB", grad: "from-[hsl(var(--cream))] to-[hsl(var(--sky))]" },
];

const Team = () => (
  <PageShell kicker="People" title="Our Team">
    <p className="max-w-2xl mx-auto text-center text-muted-foreground -mt-8 mb-20">
      The crew turning ideas into outcomes. Different lenses, shared standards.
    </p>

    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {team.map((m, i) => (
        <div key={m.name} className="glass rounded-3xl p-6 text-center transition-smooth hover:bg-white/10 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
          <div className={`mx-auto w-24 h-24 rounded-full bg-gradient-to-br ${m.grad} flex items-center justify-center font-serif text-3xl text-primary-foreground shadow-glow mb-5`}>
            {m.initials}
          </div>
          <h3 className="font-serif text-xl">{m.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
        </div>
      ))}
    </div>
  </PageShell>
);

export default Team;
