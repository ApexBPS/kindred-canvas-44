import { useState, CSSProperties } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Phone, Mail, Instagram } from "lucide-react";

type Entry = {
  name: string;
  logo?: string;
  /** HSL triplet, e.g. "0 70% 45%". When set, tints panel + modal. */
  tint?: string;
  details?: string;
  placeholder?: boolean;
};

const panelists: Entry[] = [{ name: "Coming soon", placeholder: true }];

const sponsors: Entry[] = [{ name: "Coming soon", placeholder: true }];
const attendees: Entry[] = [{ name: "Coming soon", placeholder: true }];

const tintStyle = (tint?: string): CSSProperties =>
  tint
    ? {
        backgroundColor: `hsl(${tint} / 0.18)`,
        borderColor: `hsl(${tint} / 0.4)`,
      }
    : {};

const modalTintStyle = (tint?: string): CSSProperties =>
  tint
    ? {
        // pull lightness down a bit for the modal background
        backgroundColor: `hsl(${tint.replace(/\d+%\s*$/, (m) =>
          `${Math.max(15, parseInt(m) - 25)}%`,
        )} / 0.55)`,
        borderColor: `hsl(${tint} / 0.5)`,
      }
    : {};

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
        className="relative rounded-3xl p-7 glass border border-dashed border-white/15 bg-white/[0.03] flex items-center justify-center min-h-[160px] reveal"
        style={{ transitionDelay: `${i * 60}ms` }}
      >
        <span className="font-playfair text-xl text-muted-foreground/70 italic">
          {entry.name}
        </span>
      </div>
    );
  }
  return (
    <div
      className="relative rounded-3xl p-6 transition-smooth reveal flex flex-col glass border hover:bg-white/10"
      style={{ transitionDelay: `${i * 60}ms`, ...tintStyle(entry.tint) }}
    >
      <div className="flex items-center gap-4">
        {entry.logo && (
          <div className="w-20 h-20 shrink-0 flex items-center justify-center">
            <img
              src={entry.logo}
              alt={`${entry.name} logo`}
              loading="lazy"
              className="w-[160px] h-[160px] object-contain drop-shadow-lg"
            />
          </div>
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
  id,
  wide,
}: {
  title: string;
  items: Entry[];
  onDetails: (e: Entry) => void;
  id?: string;
  wide?: boolean;
}) => (
  <section id={id} className="mb-20 scroll-mt-32">
    <SectionHeader title={title} />
    <div className={`max-w-5xl mx-auto grid gap-5 ${wide ? "" : "md:grid-cols-2"}`}>
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

      <Section id="panelists" title="Panelists" items={panelists} onDetails={setActive} />
      <Section title="Sponsors" items={sponsors} onDetails={setActive} wide />
      <Section title="Attendees" items={attendees} onDetails={setActive} wide />

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          className="max-w-xl backdrop-blur-xl shadow-2xl border bg-background/55"
          style={modalTintStyle(active?.tint)}
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
