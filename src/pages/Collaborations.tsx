import { CSSProperties, useEffect } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { PartnerCarousel, Partner } from "@/components/PartnerCarousel";


import vocLogo from "@/assets/partners/voc-debate.png.asset.json";
import youthLogo from "@/assets/partners/youthlinker.png.asset.json";
import interimLogo from "@/assets/partners/interim.png.asset.json";
import serosLogo from "@/assets/partners/seros.png.asset.json";
import biteLogo from "@/assets/partners/bite.png.asset.json";
import candyLogo from "@/assets/partners/candyjoy.png.asset.json";
import yashLogo from "@/assets/partners/yash.png.asset.json";
import tibianLogo from "@/assets/partners/tibian.png.asset.json";
import snoozLogo from "@/assets/partners/snoozmnky.png.asset.json";

type Entry = {
  name: string;
  placeholder?: boolean;
};

const panelists: Partner[] = [
  {
    name: "VOC Debate Club",
    logo: vocLogo.url,
    tint: "0 65% 32%",
    description:
      "VOC is a non-profit organization committed to elevating youth voices in Saudi Arabia, empowering Saudi youth to think critically, speak with confidence, and find their voice, offering feedback and guidance to candidates at Apex BPS.",
  },
  {
    name: "YouthLinker",
    logo: youthLogo.url,
    tint: "25 95% 55%",
    description:
      "YouthLinker connects students across the Middle East with meaningful opportunities, student-led initiatives, and extracurricular experiences, bringing insight and guidance to candidates at Apex BPS.",
  },
  {
    name: "Interim Studios",
    logo: interimLogo.url,
    tint: "30 10% 55%",
    description:
      "Interim explores filmmaking through cinematic storytelling and short film production, sharing creative direction and media-based guidance within the Services & Experiences industry at Apex BPS.",
  },
  {
    name: "Serossweets",
    logo: serosLogo.url,
    tint: "22 55% 32%",
    description:
      "Serossweets creates handcrafted cookies and dessert creations designed for gifts, events, and everyday occasions, while sharing culinary insight and guidance at Apex BPS.",
  },
  {
    name: "Bite",
    logo: biteLogo.url,
    tint: "340 50% 70%",
    description:
      "Bite is a brownie based dessert business that specializes in event catering, bringing dessert industry experience and culinary guidance to candidates at Apex BPS!",
  },
  {
    name: "Candy Joy",
    logo: candyLogo.url,
    tint: "340 80% 65%",
    description:
      "Candy Joy specializes in colorful candy assortments, customized jars, and sweet gift concepts for celebrations and special occasions, while offering creative guidance within the Culinary industry at Apex BPS.",
  },
  {
    name: "Yash Club",
    logo: yashLogo.url,
    tint: "260 55% 70%",
    description:
      "Yash Club blends creativity and fashion through modern clothing collections inspired by streetwear trends, offering insight and guidance within the Physical Products industry at Apex BPS.",
  },
  {
    name: "Tibian",
    logo: tibianLogo.url,
    tint: "220 80% 50%",
    description:
      "Tibian specializes in event materials, branding products, and creative production solutions for modern events and initiatives, while providing industry-based guidance at Apex BPS.",
  },
  {
    name: "Snoozmnky",
    logo: snoozLogo.url,
    tint: "50 70% 55%",
    description:
      "Snoozmnky creates modern hoodie and streetwear pieces inspired by comfort, creativity, and self-expression, while offering fashion and branding guidance within the Physical Products industry at Apex BPS.",
  },
];

const sponsors: Entry[] = [{ name: "Coming soon", placeholder: true }];
const attendees: Entry[] = [{ name: "Coming soon", placeholder: true }];

const SectionHeader = ({ title }: { title: string }) => (
  <div className="max-w-5xl mx-auto mb-10 text-center">
    <h2 className="font-playfair text-4xl md:text-5xl text-gradient">{title}</h2>
    <div className="gradient-line mt-4 mx-auto max-w-xs" />
  </div>
);

const PlaceholderCard = ({ entry, i }: { entry: Entry; i: number }) => (
  <div
    className="relative rounded-3xl p-7 glass border border-dashed border-white/15 bg-white/[0.03] flex items-center justify-center min-h-[160px] reveal"
    style={{ transitionDelay: `${i * 60}ms` } as CSSProperties}
  >
    <span className="font-playfair text-xl text-muted-foreground/70 italic">{entry.name}</span>
  </div>
);

const Section = ({
  title,
  items,
  id,
}: {
  title: string;
  items: Entry[];
  id?: string;
}) => (
  <section id={id} className="mb-20 scroll-mt-32">
    <SectionHeader title={title} />
    <div className="max-w-5xl mx-auto grid gap-5">
      {items.map((p, i) => (
        <PlaceholderCard key={`${title}-${i}`} entry={p} i={i} />
      ))}
    </div>
  </section>
);

const Collaborations = () => {
  return (
    <PageShell kicker="Together" title="Collaborations">
      <p className="max-w-2xl mx-auto text-center text-muted-foreground -mt-8 mb-20 font-garamond px-4">
        The panelists and partners shaping the Apex experience.
      </p>

      <section id="panelists" className="mb-20 scroll-mt-32">
        <SectionHeader title="Panelists" />
        <div className="reveal">
          <PartnerCarousel partners={panelists} />
        </div>
      </section>

      <Section title="Sponsors" items={sponsors} />
      <Section title="Attendees" items={attendees} />
    </PageShell>
  );
};

export default Collaborations;
