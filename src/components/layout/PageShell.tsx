import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

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
    <div className="min-h-dvh">
      <Navbar />
      <main className="pt-32 px-6">
        <section className={`max-w-6xl mx-auto mb-16 animate-fade-in ${alignCls}`}>
          {kicker && (
            <div
              className={`inline-block glass-pill px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-accent mb-6 ${
                align === "left" ? "" : ""
              }`}
            >
              {kicker}
            </div>
          )}
          <h1 className={`${fontCls} text-5xl md:text-7xl text-gradient leading-[1.05]`}>{title}</h1>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
};
