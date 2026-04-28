import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const roles = [
  {
    title: "Candidates",
    desc: "Participants who present pre-developed business ideas. During the event, they demonstrate their ability to execute, refine, and follow through on their concepts, showcasing viability and potential.",
  },
  {
    title: "Adjudicators",
    desc: "Leads responsible for guiding candidates throughout the event. They provide feedback, ensure progress, and assess projects using the official scoring system.",
  },
  {
    title: "Industry Panel",
    desc: "Industry experts who support the event by offering insight to evaluators and providing guidance during scheduled shifts. They offer professional feedback to innovators but do not take part in final scoring.",
  },
  {
    title: "Volunteers",
    desc: "Assist in pre-event preparation and help address participant needs. They support setup and ensure necessary resources are in place for the event to run smoothly.",
  },
  {
    title: "Security",
    desc: "Responsible for maintaining a safe and controlled environment. They manage access, monitor activity, and ensure all participants follow event rules.",
  },
  {
    title: "Press",
    desc: "Covers the event through media, interviews, and content creation. They document key moments, highlight candidates' work, and promote the event.",
  },
];

const Roles = () => (
  <div className="min-h-dvh">
    <Navbar />
    <main className="pt-32 px-6">
      {/* Section 1 - left aligned */}
      <section className="max-w-5xl mx-auto animate-fade-in">
        <h1
          className="font-playfair text-gradient leading-[1.05]"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
        >
          Discover Your Role
        </h1>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {roles.map((r, i) => (
            <article
              key={r.title}
              className="glass rounded-3xl p-7 transition-smooth hover:bg-white/15 animate-fade-in"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <h3 className="font-playfair text-2xl md:text-3xl text-foreground">{r.title}</h3>
              <div className="gradient-line mt-3 mb-4 max-w-[80%]" />
              <p className="font-garamond text-base text-foreground/85 leading-relaxed">{r.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Section 2 - centered */}
      <section className="max-w-3xl mx-auto mt-32 mb-16 text-center animate-fade-in">
        <h2 className="font-playfair text-gradient" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
          Applications
        </h2>
        <div className="gradient-line my-8 max-w-md mx-auto" />
        <p className="font-crave text-foreground/95" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
          Coming Soon
        </p>
        <div className="gradient-line my-8 max-w-md mx-auto" />
      </section>
    </main>
    <Footer />
  </div>
);

export default Roles;
