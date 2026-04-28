import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Layers, Users, Handshake, FolderKanban, Workflow } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Orbs } from "@/components/layout/PageShell";

const cards = [
  { icon: Layers, title: "Roles & Application", to: "/roles", desc: "Find your place. Apply with intention." },
  { icon: Workflow, title: "Procedure", to: "/procedure", desc: "A clear, considered path from idea to impact." },
  { icon: Users, title: "Our Team", to: "/team", desc: "The people behind the practice." },
  { icon: Handshake, title: "Collaborations", to: "/collaborations", desc: "Partners shaping work alongside us." },
  { icon: FolderKanban, title: "Categories", to: "/categories", desc: "Explore our verticals and disciplines." },
];

const Home = () => {
  return (
    <div className="min-h-dvh">
      <Orbs />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-accent mb-8 animate-fade-in">
            <Sparkles size={12} /> A new chapter is open
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-gradient animate-fade-in">
            Crafting<br/>collective<br/><em className="not-italic text-foreground/90">futures.</em>
          </h1>
          <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Aurora is a collective of builders, thinkers, and collaborators — moving ideas forward with quiet precision and bold intent.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/roles" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-warm text-primary-foreground font-medium shadow-glow transition-smooth hover:scale-[1.02]">
              Apply now
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/procedure" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-foreground font-medium transition-smooth hover:bg-white/10">
              See the procedure
            </Link>
          </div>
        </div>

        {/* Floating glass preview */}
        <div className="max-w-5xl mx-auto mt-24 relative animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <div className="glass-strong rounded-[2rem] p-2 shadow-soft">
            <div className="rounded-[1.6rem] bg-gradient-soft p-10 md:p-16 relative overflow-hidden">
              <div className="orb" style={{ width: 300, height: 300, top: "-20%", right: "-10%", background: "hsl(var(--sand) / 0.55)" }} />
              <div className="orb" style={{ width: 280, height: 280, bottom: "-30%", left: "-10%", background: "hsl(var(--sky) / 0.5)" }} />
              <div className="relative grid md:grid-cols-3 gap-6">
                {[
                  { k: "12", v: "Active categories" },
                  { k: "48", v: "Members worldwide" },
                  { k: "23", v: "Collaborations" },
                ].map((s) => (
                  <div key={s.v} className="glass rounded-2xl p-6 text-left">
                    <div className="font-serif text-5xl text-gradient">{s.k}</div>
                    <div className="text-sm text-muted-foreground mt-2">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Explore</p>
              <h2 className="font-serif text-4xl md:text-6xl text-gradient">Where to begin</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Five doors into the same world. Choose the one that matches your curiosity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((c, i) => (
              <Link
                key={c.to}
                to={c.to}
                className="group glass rounded-3xl p-7 transition-smooth hover:bg-white/10 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center mb-6 shadow-glow">
                  <c.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{c.desc}</p>
                <div className="inline-flex items-center gap-2 text-sm text-accent">
                  Open <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto glass-strong rounded-[2rem] p-12 md:p-16 text-center relative overflow-hidden">
          <div className="orb animate-float" style={{ width: 400, height: 400, top: "-50%", left: "50%", transform: "translateX(-50%)", background: "hsl(var(--sand) / 0.4)" }} />
          <div className="relative">
            <h2 className="font-serif text-4xl md:text-6xl text-gradient mb-6">Ready to join?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Applications open year-round. Roll up your sleeves and tell us what you'd build.
            </p>
            <Link to="/roles" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-warm text-primary-foreground font-medium shadow-glow transition-smooth hover:scale-[1.02]">
              Start your application <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
