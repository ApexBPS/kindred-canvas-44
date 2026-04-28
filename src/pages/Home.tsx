import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Home = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate("/?highlight=roles");
    // brief delay to allow nav to be visible, then trigger highlight
    setTimeout(() => {
      const el = document.getElementById("nav-roles");
      if (el) {
        el.classList.add("highlight-pulse");
        el.scrollIntoView({ behavior: "smooth", block: "nearest" });
        setTimeout(() => el.classList.remove("highlight-pulse"), 60_000);
      }
    }, 50);
  };

  return (
    <div className="min-h-dvh">
      <Navbar />

      <section className="relative min-h-[92vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="font-garamond uppercase tracking-[0.45em] text-xs md:text-sm text-foreground/85 mb-8 animate-fade-in"
          >
            Where ideas meet their apex
          </p>

          <h1
            className="font-playfair text-gradient leading-[0.85] animate-fade-in"
            style={{ fontSize: "clamp(6rem, 18vw, 14rem)", animationDelay: "0.1s" }}
          >
            Apex
          </h1>

          <h2
            className="font-playfair text-foreground/95 leading-[1] mt-2 animate-fade-in"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", animationDelay: "0.2s" }}
          >
            Business Pitch Summit
          </h2>

          <p
            className="font-garamond text-base md:text-lg text-foreground/85 max-w-2xl mx-auto mt-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Step into a space where student innovation meets industry-level insight.
            Present your vision, receive expert feedback, and navigate the real demands
            of building and defending a business idea.
          </p>

          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.45s" }}
          >
            <button
              onClick={handleApply}
              className="font-garamond text-base inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-warm text-primary-foreground font-medium shadow-glow transition-smooth hover:scale-[1.02]"
            >
              Apply now
            </button>
            <button
              onClick={() => navigate("/about")}
              className="font-garamond text-base inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass text-foreground transition-smooth hover:bg-white/15"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
