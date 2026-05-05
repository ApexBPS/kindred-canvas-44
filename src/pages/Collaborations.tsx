import { PageShell } from "@/components/layout/PageShell";
import vocLogo from "@/assets/voc-debate.png";

type Entry = {
  name: string;
  logo?: string;
  tinted?: boolean;
};

const panelists: Entry[] = [
  { name: "Voices of Change Debate Club", logo: vocLogo, tinted: true },
];

const collaborations: Entry[] = [
  { name: "Voices of Change Debate Club", logo: vocLogo, tinted: true },
];

const SectionHeader = ({ title }: { title: string }) => (
  <div className="max-w-5xl mx-auto mb-10 text-center">
    <h2 className="font-playfair text-4xl md:text-5xl text-gradient">{title}</h2>
    <div className="gradient-line mt-4 mx-auto max-w-xs" />
  </div>
);

const EntryCard = ({ entry, i }: { entry: Entry; i: number }) => (
  <div
    className={`relative rounded-3xl p-7 transition-smooth animate-fade-in flex flex-col ${
      entry.tinted
        ? "glass border border-[hsl(0_70%_45%/0.35)] bg-[hsl(0_70%_30%/0.18)] hover:bg-[hsl(0_70%_30%/0.25)]"
        : "glass hover:bg-white/10"
    }`}
    style={{ animationDelay: `${i * 0.06}s` }}
  >
    <div className="flex items-center gap-5">
      {entry.logo && (
        <img
          src={entry.logo}
          alt={`${entry.name} logo`}
          className="w-20 h-20 object-contain rounded-full shrink-0"
        />
      )}
      <h3 className="font-playfair text-2xl md:text-3xl text-foreground leading-tight">
        {entry.name}
      </h3>
    </div>
    <div className="mt-6 flex justify-end">
      <button className="px-5 py-2 rounded-full glass-pill text-xs uppercase tracking-[0.2em] text-foreground/90 hover:bg-white/15 transition-smooth">
        Details
      </button>
    </div>
  </div>
);

const Section = ({ title, items }: { title: string; items: Entry[] }) => (
  <section className="mb-20">
    <SectionHeader title={title} />
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
      {items.map((p, i) => (
        <EntryCard key={`${title}-${p.name}-${i}`} entry={p} i={i} />
      ))}
    </div>
  </section>
);

const Collaborations = () => (
  <PageShell kicker="Together" title="Collaborations">
    <p className="max-w-2xl mx-auto text-center text-muted-foreground -mt-8 mb-20 font-garamond">
      The panelists and partners shaping the Apex experience.
    </p>

    <Section title="Panelists" items={panelists} />
    <Section title="Collaborations" items={collaborations} />
  </PageShell>
);

export default Collaborations;
