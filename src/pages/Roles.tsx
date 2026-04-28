import { PageShell } from "@/components/layout/PageShell";
import { Briefcase, Code, PenTool, Megaphone, Microscope, Compass, ArrowRight } from "lucide-react";

const roles = [
  { icon: Code, title: "Engineering", desc: "Build the systems that move our work forward.", tags: ["Frontend", "Backend", "Infra"] },
  { icon: PenTool, title: "Design", desc: "Shape interfaces, identities, and experiences.", tags: ["Visual", "Product", "Motion"] },
  { icon: Microscope, title: "Research", desc: "Probe questions deeply and surface what matters.", tags: ["Qual", "Quant", "Strategy"] },
  { icon: Megaphone, title: "Communications", desc: "Tell our story with clarity and care.", tags: ["Editorial", "Social", "PR"] },
  { icon: Briefcase, title: "Operations", desc: "Keep the machine humming behind the scenes.", tags: ["Programs", "Finance", "People"] },
  { icon: Compass, title: "Partnerships", desc: "Open doors and build long-term relationships.", tags: ["Outreach", "Sponsorship"] },
];

const Roles = () => (
  <PageShell kicker="Join us" title="Roles & Application">
    <p className="max-w-2xl mx-auto text-center text-muted-foreground -mt-8 mb-16">
      Six tracks. One shared mindset. Pick the lane that fits your craft and apply in minutes.
    </p>

    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
      {roles.map((r, i) => (
        <div key={r.title} className="glass rounded-3xl p-7 transition-smooth hover:bg-white/10 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${i * 0.06}s` }}>
          <div className="w-12 h-12 rounded-2xl bg-gradient-cool flex items-center justify-center mb-5 shadow-glow">
            <r.icon size={20} className="text-primary-foreground" />
          </div>
          <h3 className="font-serif text-2xl mb-2">{r.title}</h3>
          <p className="text-sm text-muted-foreground mb-5">{r.desc}</p>
          <div className="flex flex-wrap gap-2">
            {r.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full glass-pill text-foreground/80">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="max-w-3xl mx-auto glass-strong rounded-[2rem] p-10 md:p-12 animate-scale-in">
      <h2 className="font-serif text-3xl md:text-4xl text-gradient mb-2">Apply</h2>
      <p className="text-sm text-muted-foreground mb-8">A short form. A real human reads each one.</p>
      <form className="grid gap-5">
        <div className="grid md:grid-cols-2 gap-5">
          <input className="glass rounded-2xl px-5 py-4 bg-transparent outline-none focus:ring-2 ring-accent/50 transition-smooth" placeholder="Full name" />
          <input className="glass rounded-2xl px-5 py-4 bg-transparent outline-none focus:ring-2 ring-accent/50 transition-smooth" placeholder="Email" type="email" />
        </div>
        <select className="glass rounded-2xl px-5 py-4 bg-transparent outline-none focus:ring-2 ring-accent/50 transition-smooth">
          <option className="bg-card">Choose a role</option>
          {roles.map((r) => <option key={r.title} className="bg-card">{r.title}</option>)}
        </select>
        <textarea rows={5} className="glass rounded-2xl px-5 py-4 bg-transparent outline-none focus:ring-2 ring-accent/50 transition-smooth" placeholder="Tell us about you" />
        <button type="button" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-warm text-primary-foreground font-medium shadow-glow transition-smooth hover:scale-[1.01]">
          Submit application <ArrowRight size={16} />
        </button>
      </form>
    </div>
  </PageShell>
);

export default Roles;
