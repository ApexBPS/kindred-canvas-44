import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { BackButton } from "@/components/layout/BackButton";
import { Footer } from "@/components/layout/Footer";
import { useReveal } from "@/hooks/use-reveal";

type Role = {
  title: string;
  desc: string;
  cta: { label: string; to?: string; href?: string; disabled?: boolean };
};

const roles: Role[] = [
  {
    title: "Candidates",
    desc: "Participants who present pre-developed business ideas. During the event, they demonstrate their ability to execute, refine, and follow through on their concepts, showcasing viability and potential.",
    cta: { label: "Apply Now", disabled: true },
  },
  {
    title: "Evaluators",
    desc: "Participants that assess participant submissions and assign scores based on the criteria and guidelines set by the panelists, ensuring a fair and consistent evaluation process.",
    cta: { label: "Apply Now", disabled: true },
  },
  {
    title: "Panelists",
    desc: "Industry experts who provide industry expertise, share valuable insights, and establish the evaluation criteria that guide the candidates. While they help shape the judging standards, they are not involved in scoring candidate submissions.",
    cta: { label: "View More", to: "/collaborations#panelists" },
  },
  {
    title: "Volunteers",
    desc: "Assist in pre-event preparation and help address participant needs. They support setup and ensure necessary resources are in place for the event to run smoothly.",
    cta: { label: "Closed", disabled: true },
  },
  {
    title: "Security",
    desc: "Responsible for maintaining a safe and controlled environment. They manage access, monitor activity, and ensure all participants follow event rules.",
    cta: { label: "Closed", disabled: true },
  },
  {
    title: "Press",
    desc: "Covers the event through media, interviews, and content creation. They document key moments, highlight candidates' work, and promote the event.",
    cta: { label: "Closed", disabled: true },
  },
];

const ctaBase =
  "inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] underline underline-offset-4 transition-smooth";
// dimmed beige (no glow) — swap to glowing variant when applications open
const ctaDimmed =
  "text-[hsl(40_35%_55%/0.55)] cursor-not-allowed pointer-events-none";
const ctaGlow =
  "text-[hsl(40_75%_70%)] hover:text-[hsl(40_90%_80%)] [text-shadow:0_0_10px_hsl(40_85%_65%/0.7)]";

const Roles = () => {
  useReveal();
  return (
  <div className="min-h-dvh">
    <Navbar />
    <BackButton />
    <main className="pt-32 px-6 pb-20">
      <section className="max-w-5xl mx-auto animate-fade-in">
        <h1
          className="font-playfair text-gradient leading-[1.05]"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
        >
          Discover Your Role
        </h1>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {roles.map((r, i) => {
            const cta = (
              <span className={`${ctaBase} ${r.cta.disabled ? ctaDimmed : ctaGlow}`}>
                {r.cta.label}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            );
            return (
              <article
                key={r.title}
                className="relative glass glass-bordered card-premium rounded-3xl p-7 pt-12 transition-smooth hover:bg-white/15 reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="absolute top-4 right-5">
                  {r.cta.to ? (
                    <Link to={r.cta.to}>{cta}</Link>
                  ) : r.cta.href ? (
                    <a href={r.cta.href} target="_blank" rel="noopener noreferrer">{cta}</a>
                  ) : (
                    cta
                  )}
                </div>
                <h3 className="font-playfair text-2xl md:text-3xl text-foreground">{r.title}</h3>
                <div className="gradient-line mt-3 mb-4 max-w-[80%]" />
                <p className="font-garamond text-base text-foreground/85 leading-relaxed">{r.desc}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
    <Footer />
  </div>
  );
};

export default Roles;
