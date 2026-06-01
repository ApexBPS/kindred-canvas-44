import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { BackButton } from "@/components/layout/BackButton";
import { Footer } from "@/components/layout/Footer";
import { useReveal } from "@/hooks/use-reveal";

const members: { name: string; role: string }[] = [
  { name: "Layal Abounaem", role: "Director-General" },
  { name: "Ziad Tarek Hindi", role: "Deputy Director" },
  { name: "Ahmed Idris", role: "Deputy Director" },
  { name: "Joe ElFeghaly", role: "Chief of Staff" },
  { name: "Yanal Hilan", role: "Operations Director" },
  { name: "Lamar Nawar", role: "Events Director" },
  { name: "Dareen Al-Najjar", role: "Social Affairs Director" },
  { name: "Karim Noamany", role: "Operations Associate" },
  { name: "Ahmed Elamir", role: "Operations Associate" },
  { name: "Lana AlHaj", role: "Operations Associate" },
  { name: "Mohamed El Safadi", role: "Events Associate" },
  { name: "Sadeen Abdulaziz", role: "Events Associate" },
  { name: "Sally Elmasry", role: "Events Associate" },
  { name: "Bateel Mashabi", role: "Design Director" },
  { name: "Lamar Albtaddini", role: "Design Director" },
  { name: "Rudina Shabana", role: "Social Affairs Associate" },
  { name: "Lujain Hijazi", role: "Social Affairs Associate" },
  { name: "Zayd Sham", role: "Social Affairs Associate" },
];

const Team = () => {
  const membersRef = useRef<HTMLDivElement>(null);
  useReveal();
  return (
    <div className="min-h-dvh">
      <Navbar />
      <BackButton />
      <main className="pt-32 px-6">
        {/* Section 1 */}
        <section className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1
            className="font-playfair text-gradient leading-[1.05]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
          >
            The Directorate
          </h1>
          <p className="font-garamond text-base md:text-lg text-foreground/85 leading-relaxed mt-8 max-w-3xl mx-auto">
            Apex members are dedicated to creating an event that goes beyond expectations. Every team
            member works with commitment, creativity, and attention to detail to ensure each part of the
            experience runs smoothly, from planning and coordination to execution on event day. Their goal
            is not just to host an event, but to build an unforgettable platform where innovation,
            collaboration, and opportunity come together at the highest level.
          </p>
          <button
            onClick={() => membersRef.current?.scrollIntoView({ behavior: "smooth" })}
            aria-label="See members"
            className="mx-auto mt-12 w-14 h-14 rounded-full glass-strong flex items-center justify-center hover:bg-white/15 transition-smooth animate-float"
          >
            <ArrowDown size={20} />
          </button>
        </section>

        {/* Section 2 */}
        <section ref={membersRef} className="mt-32">
          <div className="max-w-5xl mx-auto text-center mb-14">
            <h2
              className="font-playfair text-gradient leading-[1.05]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              Our Leadership Team
            </h2>
            <p className="font-garamond text-base md:text-lg text-foreground/85 mt-5 max-w-2xl mx-auto">
              The minds behind Apex BPS, dedicated to transform ideas into reality.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {members.map((m, i) => (
              <div
                key={m.name}
                className="text-center reveal"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="font-garamond uppercase tracking-[0.06em] text-xl md:text-2xl text-foreground leading-tight">
                  {m.name}
                </div>
                <div className="font-garamond italic text-sm text-foreground/75 mt-1">
                  {m.role}
                </div>
                {/* iOS-core translucent gradient under each member */}
                <div className="ios-reveal rounded-full h-3 mt-4 mx-6" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
