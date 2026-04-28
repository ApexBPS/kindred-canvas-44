import { PageShell } from "@/components/layout/PageShell";

const steps = [
  { n: "01", t: "Discover", d: "We open applications and review every submission with care. No shortcuts — every voice gets a read." },
  { n: "02", t: "Connect", d: "Selected applicants meet a small panel for a relaxed conversation about ideas, ambitions, and fit." },
  { n: "03", t: "Onboard", d: "You receive your toolkit, mentor pairings, and a clear map of the first 30 days." },
  { n: "04", t: "Build", d: "You join a category, contribute to active work, and ship something real within your first cycle." },
  { n: "05", t: "Reflect", d: "At the end of each cycle, we look back together — celebrate, refine, and chart what's next." },
];

const Procedure = () => (
  <PageShell kicker="The path" title="Procedure">
    <p className="max-w-2xl mx-auto text-center text-muted-foreground -mt-8 mb-20">
      A clear five-step rhythm — designed to respect your time and your craft.
    </p>

    <div className="max-w-4xl mx-auto relative">
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
      {steps.map((s, i) => (
        <div key={s.n} className={`relative grid md:grid-cols-2 gap-8 mb-12 items-center animate-fade-in ${i % 2 ? "md:[direction:rtl]" : ""}`} style={{ animationDelay: `${i * 0.1}s` }}>
          <div className="md:[direction:ltr]">
            <div className="glass rounded-3xl p-8 transition-smooth hover:bg-white/10">
              <div className="font-serif text-5xl text-gradient mb-3">{s.n}</div>
              <h3 className="font-serif text-3xl mb-3">{s.t}</h3>
              <p className="text-muted-foreground">{s.d}</p>
            </div>
          </div>
          <div className="md:[direction:ltr] hidden md:block" />
          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-warm shadow-glow" style={{ top: "2.5rem" }} />
        </div>
      ))}
    </div>
  </PageShell>
);

export default Procedure;
