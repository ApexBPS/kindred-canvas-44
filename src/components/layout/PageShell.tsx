import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackButton } from "./BackButton";

export const PageShell = ({
  children,
  title,
  kicker,
  align = "center",
  titleFont = "playfair",
}: {
  children: ReactNode;
  title: string;
  kicker?: string;
  align?: "center" | "left";
  titleFont?: "playfair" | "crave" | "garamond";
}) => {
  const alignCls = align === "left" ? "text-left" : "text-center";
  const fontCls =
    titleFont === "crave" ? "font-playfair" : titleFont === "garamond" ? "font-garamond" : "font-playfair";
  return (
    <div className="min-h-dvh relative">
      <Navbar />
      <BackButton />
      <main className="pt-32 px-6 relative">
        <div aria-hidden className="absolute inset-x-0 top-0 h-[420px] pointer-events-none overflow-hidden -z-10">
          <div className="blob" style={{ width: 480, height: 480, top: "-10%", left: "-8%", background: "radial-gradient(circle, hsl(42 90% 75% / 0.35), transparent 70%)" }} />
          <div className="blob" style={{ width: 420, height: 420, top: "-6%", right: "-6%", background: "radial-gradient(circle, hsl(213 80% 70% / 0.30), transparent 70%)", animationDelay: "-8s" }} />
        </div>
        <section className={`max-w-6xl mx-auto mb-16 animate-fade-in ${alignCls}`}>
          {kicker && (
            <div
              className={`inline-block glass glass-bordered rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-accent mb-6`}
            >
              {kicker}
            </div>
          )}
          <h1 className={`${fontCls} text-5xl md:text-7xl text-gradient leading-[1.05]`}>{title}</h1>
          <div className="divider-shine mt-8 max-w-xs mx-auto" aria-hidden />
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
};
