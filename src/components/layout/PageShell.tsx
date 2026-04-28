import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Orbs = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="orb animate-drift" style={{ width: 520, height: 520, top: "-10%", left: "-10%", background: "hsl(var(--sky) / 0.5)" }} />
    <div className="orb animate-drift" style={{ width: 480, height: 480, top: "20%", right: "-15%", background: "hsl(var(--sand) / 0.45)", animationDelay: "-4s" }} />
    <div className="orb animate-drift" style={{ width: 600, height: 600, bottom: "-20%", left: "20%", background: "hsl(var(--cocoa) / 0.55)", animationDelay: "-8s" }} />
  </div>
);

export const PageShell = ({ children, title, kicker }: { children: ReactNode; title: string; kicker?: string }) => (
  <div className="min-h-dvh">
    <Orbs />
    <Navbar />
    <main className="pt-32 px-6">
      <section className="max-w-6xl mx-auto text-center mb-16 animate-fade-in">
        {kicker && (
          <div className="inline-block glass-pill px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent mb-6">
            {kicker}
          </div>
        )}
        <h1 className="font-serif text-5xl md:text-7xl text-gradient leading-[1.05]">{title}</h1>
      </section>
      {children}
    </main>
    <Footer />
  </div>
);
