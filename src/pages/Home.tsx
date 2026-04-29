import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Info,
  Layers,
  Workflow,
  Users,
  Handshake,
  FolderKanban,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const cards = [
  { id: "card-about", to: "/about", icon: Info, title: "About", desc: "What Apex BPS is, and why it exists." },
  { id: "card-roles", to: "/roles", icon: Layers, title: "Roles & Application", desc: "Find your place. Apply with intention." },
  { id: "card-procedure", to: "/procedure", icon: Workflow, title: "Procedure", desc: "How the summit unfolds, step by step." },
  { id: "card-team", to: "/team", icon: Users, title: "Our Team", desc: "The directorate behind the practice." },
  { id: "card-collaborations", to: "/collaborations", icon: Handshake, title: "Collaborations", desc: "Partners shaping work alongside us." },
  { id: "card-categories", to: "/categories", icon: FolderKanban, title: "Categories", desc: "Explore the verticals you can pitch in." },
];

const Home = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    const el = document.getElementById("card-roles");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.remove("card-shine");
      void el.offsetWidth;
      el.classList.add("card-shine");
      window.setTimeout(() => el.classList.remove("card-shine"), 2200);
    }
  };

  return (
    <div className="min-h-dvh">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-garamond uppercase tracking-[0.45em] text-xs md:text-sm text-foreground/85 mb-8 animate-fade-in">
            Where ideas meet their apex
          </p>

          <h1
            className="font-playfair text-gradient leading-[0.85] animate-fade-in"
            style={{ fontSize: "clamp(6rem, 18vw, 14rem)", animationDelay: "0.1s" }}
          >
            Apex
          </h1>

          <h2
            className="font-playfair text-foreground/95 leading-[1] mt-2 animate-fade-in"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", animationDelay: "0.2s" }}
          >
            Business Pitch Summit
          </h2>

          <p
            className="font-garamond text-base md:text-lg text-foreground/85 max-w-2xl mx-auto mt-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Step into a space where student innovation meets industry-level insight.
            Present your vision, receive expert feedback, and navigate the real demands
            of building and defending a business idea.
          </p>

          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.45s" }}
          >
            <button
              onClick={handleApply}
              className="font-garamond text-base inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-warm text-primary-foreground font-medium shadow-glow transition-smooth hover:scale-[1.02]"
            >
              Apply now
            </button>
            <button
              onClick={() => navigate("/about")}
              className="font-garamond text-base inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass text-foreground transition-smooth hover:bg-white/15"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Explore grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="font-garamond text-xs uppercase tracking-[0.3em] text-accent mb-3">Explore</p>
              <h2 className="font-playfair text-4xl md:text-6xl text-gradient">Where to begin</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((c, i) => (
              <button
                key={c.to}
                id={c.id}
                onClick={() => navigate(c.to)}
                className="card-pulse-target group glass rounded-3xl p-7 text-left transition-smooth hover:bg-white/15 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center mb-6 shadow-glow">
                  <c.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-2xl mb-2">{c.title}</h3>
                <p className="font-garamond text-sm text-foreground/75 mb-6">{c.desc}</p>
                <div className="font-garamond inline-flex items-center gap-2 text-sm text-accent">
                  Open <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
