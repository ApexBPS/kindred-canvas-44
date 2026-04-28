import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const preEvent = [
  {
    n: "01",
    t: "Category Release",
    d: "Business categories (e.g., baked goods, digital platforms, apparel, etc.) are officially announced to provide participants with a clear framework for their submissions. This allows students to identify the category that best aligns with their existing business idea or develop a new concept within their preferred field.",
  },
  {
    n: "02",
    t: "Idea Formation",
    d: "Participants begin refining their business concept by establishing its core purpose, target audience, value proposition, and overall structure. This stage focuses on developing a well-defined and strategic foundation for the idea before the application process.",
  },
  {
    n: "03",
    t: "Application Submission",
    d: "Applications are officially opened for participants to submit their business ideas under the category that best reflects their concept. This stage serves as the formal entry point into Apex BPS, where students present their initial vision and begin their competitive journey.",
  },
];

const inEvent = [
  {
    n: "Day 01",
    t: "Introduction",
    d: "Opening ceremony takes place, directorate give speeches and recap guidelines. Each candidate goes to their category's designated room and start introductions, meeting the adjudicators and the other candidates is crucial for the environment to grow. Candidates ask, adjudicators answer.",
  },
  {
    n: "Day 02",
    t: "Proposal Speeches",
    d: "Candidates present brief speeches showcasing how their idea has value, benefit, and creativity. Adjudicators get to understand the ideas more and start scoring using the official scoring system. Other candidates may ask questions as well. Copying and plagiarism are EXTREMELY prohibited as all ideas must be original, however taking inspiration or collaborating with other candidates is allowed (3 candidates per collaboration maximum).",
  },
  {
    n: "Day 03",
    t: "Final Presentation & Marketing Scheme",
    d: "Candidates develop fully detailed pitches and present a marketing scheme for their idea, they could market using anything, whether it was making flyers or printing their logo on a t-shirt. Adjudicators finalize the winners and submit them to the directorate, during the closing ceremony awards will be handed out, and may the best idea reach its Apex.",
  },
];

const Timeline = ({ items }: { items: { n: string; t: string; d: string }[] }) => (
  <div className="relative max-w-5xl mx-auto">
    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
    <div className="space-y-6">
      {items.map((s, i) => (
        <div
          key={s.n}
          className="relative pl-16 md:pl-24 animate-fade-in"
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          <div className="absolute left-0 md:left-1 top-2 flex items-center gap-3">
            <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl glass-strong flex items-center justify-center font-playfair text-foreground/90 text-sm md:text-base text-center leading-tight px-1">
              {s.n}
            </div>
          </div>
          <div className="glass rounded-3xl p-7 transition-smooth hover:bg-white/15">
            <h3 className="font-playfair text-2xl md:text-3xl text-foreground">{s.t}</h3>
            <div className="gradient-line mt-3 mb-4 max-w-[60%]" />
            <p className="font-garamond text-base text-foreground/85 leading-relaxed">{s.d}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Procedure = () => {
  const stepsRef = useRef<HTMLDivElement>(null);
  return (
    <div className="min-h-dvh">
      <Navbar />
      <main className="pt-32 px-6">
        {/* Section 1 - left aligned */}
        <section className="max-w-5xl mx-auto animate-fade-in">
          <h1
            className="font-playfair text-gradient leading-[1.05]"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
          >
            Event Procedure
          </h1>
          <p className="font-garamond text-base md:text-lg text-foreground/85 leading-relaxed mt-6 max-w-2xl">
            Discover the plan for Apex Business Pitch Summit. We've structured the event to test the
            real-world skills of a successful business idea, guiding you through preparation, delivery,
            and evaluation.
          </p>
          <button
            onClick={() => stepsRef.current?.scrollIntoView({ behavior: "smooth" })}
            className="font-garamond mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-warm text-primary-foreground font-medium shadow-glow transition-smooth hover:scale-[1.02]"
          >
            View Steps <ArrowDown size={16} />
          </button>
        </section>

        {/* Section 2 - Pre-Event */}
        <section ref={stepsRef} className="mt-32">
          <div className="max-w-5xl mx-auto mb-10">
            <p className="font-garamond uppercase tracking-[0.3em] text-xs text-accent mb-3">Phase one</p>
            <h2
              className="font-playfair text-gradient leading-[1.05]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              Pre-Event Phase
            </h2>
          </div>
          <Timeline items={preEvent} />
        </section>

        {/* Section 3 - In-Event */}
        <section className="mt-32 mb-10">
          <div className="max-w-5xl mx-auto mb-10">
            <p className="font-garamond uppercase tracking-[0.3em] text-xs text-accent mb-3">Phase two</p>
            <h2
              className="font-playfair text-gradient leading-[1.05]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              In-Event Phase
            </h2>
          </div>
          <Timeline items={inEvent} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Procedure;
