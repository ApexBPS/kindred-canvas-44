import { useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import vocLogo from "@/assets/voc-debate.png";
import ylLogo from "@/assets/youthlinker.png";

type Tint = "red" | "blue" | "none";

type Entry = {
  name: string;
  logo?: string;
  tint?: Tint;
  details?: string;
  placeholder?: boolean;
};

const VOC_DETAILS =
  "VOC will be joining Apex Business Pitch Summit as panelists for the Services & Experiences industry, offering insights, feedback, and perspective to support and elevate participating ideas.";

const YL_DETAILS =
  "Youthlinker joins Apex Business Pitch Summit as panelists for the Services & Experiences industry, delivering sharp insights and constructive feedback to help refine and elevate participants’ ideas.";

const panelists: Entry[] = [
  { name: "Voices of Change Debate Club", logo: vocLogo, tint: "red", details: VOC_DETAILS },
  { name: "Youthlinker", logo: ylLogo, tint: "blue", details: YL_DETAILS },
];

const collaborations: Entry[] = [
  { name: "Coming soon", placeholder: true },
  { name: "Coming soon", placeholder: true },
];

const tintStyles: Record<Tint, string> = {
  red: "glass border border-[hsl(0_70%_45%/0.35)] bg-[hsl(0_70%_30%/0.18)] hover:bg-[hsl(0_70%_30%/0.25)]",
  blue: "glass border border-[hsl(213_85%_55%/0.4)] bg-[hsl(213_85%_45%/0.18)] hover:bg-[hsl(213_85%_45%/0.25)]",
  none: "glass hover:bg-white/10",
};

const SectionHeader = ({ title }: { title: string }) => (
  <div className="max-w-5xl mx-auto mb-10 text-center">
    <h2 className="font-playfair text-4xl md:text-5xl text-gradient">{title}</h2>
    <div className="gradient-line mt-4 mx-auto max-w-xs" />
  </div>
);

const EntryCard = ({
  entry,
  i,
  onDetails,
}: {
  entry: Entry;
  i: number;
  onDetails: (e: Entry) => void;
}) => {
  if (entry.placeholder) {
    return (
      <div
        className="relative rounded-3xl p-7 glass border border-dashed border-white/15 bg-white/[0.03] flex items-center justify-center min-h-[160px] animate-fade-in"
        style={{ animationDelay: `${i * 0.06}s` }}
      >
        <span className="font-playfair text-xl text-muted-foreground/70 italic">
          {entry.name}
        </span>
      </div>
    );
  }
  return (
    <div
      className={`relative rounded-3xl p-7 transition-smooth animate-fade-in flex flex-col ${tintStyles[entry.tint ?? "none"]}`}
      style={{ animationDelay: `${i * 0.06}s` }}
    >
      <div className="flex items-center gap-5">
        {entry.logo && (
          <img
            src={entry.logo}
            alt={`${entry.name} logo`}
            loading="lazy"
            width={256}
            height={256}
            className="w-40 h-40 md:w-48 md:h-48 object-contain shrink-0 drop-shadow-lg"
          />
        )}
        <h3 className="font-playfair text-2xl md:text-3xl text-foreground leading-tight">
          {entry.name}
        </h3>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => onDetails(entry)}
          className="px-5 py-2 rounded-full glass-pill text-xs uppercase tracking-[0.2em] text-foreground/90 hover:bg-white/15 transition-smooth"
        >
          Details
        </button>
      </div>
    </div>
  );
};

const Section = ({
  title,
  items,
  onDetails,
}: {
  title: string;
  items: Entry[];
  onDetails: (e: Entry) => void;
}) => (
  <section className="mb-20">
    <SectionHeader title={title} />
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
      {items.map((p, i) => (
        <EntryCard key={`${title}-${p.name}-${i}`} entry={p} i={i} onDetails={onDetails} />
      ))}
    </div>
  </section>
);

const Collaborations = () => {
  const [active, setActive] = useState<Entry | null>(null);

  return (
    <PageShell kicker="Together" title="Collaborations">
      <p className="max-w-2xl mx-auto text-center text-muted-foreground -mt-8 mb-20 font-garamond">
        The panelists and partners shaping the Apex experience.
      </p>

      <Section title="Panelists" items={panelists} onDetails={setActive} />
      <Section title="Collaborations" items={collaborations} onDetails={setActive} />

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          className={`max-w-xl backdrop-blur-xl shadow-2xl ${
            active?.tint === "red"
              ? "border-[hsl(0_70%_50%/0.45)] bg-[hsl(0_55%_18%/0.55)]"
              : active?.tint === "blue"
                ? "border-[hsl(213_85%_60%/0.45)] bg-[hsl(213_70%_22%/0.55)]"
                : "border-white/15 bg-background/55"
          }`}
        >
          <DialogTitle className="font-playfair text-3xl md:text-4xl text-gradient pr-8">
            {active?.name}
          </DialogTitle>
          <div className="gradient-line max-w-[6rem]" />
          {active?.details && (
            <p
              key={active.name}
              className="font-garamond text-lg leading-relaxed text-foreground/95 animate-blur-in"
            >
              {active.details}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </PageShell>
  );
};

export default Collaborations;
