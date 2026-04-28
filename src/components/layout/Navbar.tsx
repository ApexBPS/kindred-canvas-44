import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "@/assets/apex-logo.png";

export const navLinks = [
  { to: "/", label: "Home", cardId: null as string | null },
  { to: "/about", label: "About", cardId: "card-about" },
  { to: "/roles", label: "Roles & Application", cardId: "card-roles" },
  { to: "/procedure", label: "Procedure", cardId: "card-procedure" },
  { to: "/team", label: "Our Team", cardId: "card-team" },
  { to: "/collaborations", label: "Collaborations", cardId: "card-collaborations" },
  { to: "/categories", label: "Categories", cardId: "card-categories" },
];

const shineCard = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.remove("card-shine");
  void el.offsetWidth;
  el.classList.add("card-shine");
  window.setTimeout(() => el.classList.remove("card-shine"), 2200);
};

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY;
      if (goingDown && y > 80) setHidden(true);
      else if (!goingDown) setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, link: typeof navLinks[number]) => {
    if (!link.cardId) return; // Home — let it navigate normally
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => shineCard(link.cardId!), 250);
    } else {
      shineCard(link.cardId);
    }
  };

  return (
    <header
      className="fixed top-3 left-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-6xl animate-fade-in"
      style={{
        transform: hidden ? "translate(-50%, -160%)" : "translate(-50%, 0)",
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
        transition: "transform 450ms cubic-bezier(0.32,0.72,0,1), opacity 300ms ease",
        willChange: "transform, opacity",
      }}
    >
      <nav className="glass rounded-full pl-2 sm:pl-3 pr-2 py-1.5 sm:py-2 flex items-center gap-2 min-w-0">
        <Link
          to="/"
          className="flex items-center gap-2 pr-2 shrink-0"
          aria-label="Apex BPS — Home"
        >
          <img src={logo} alt="Apex BPS logo" className="h-7 w-7 sm:h-8 sm:w-8 object-contain" />
          <span className="font-playfair text-lg sm:text-xl text-gradient leading-none hidden xs:inline">
            Apex
          </span>
        </Link>

        {/* Scrollable links — fits any screen size, swipe/scroll horizontally if needed */}
        <div className="relative flex-1 min-w-0">
          <ul
            className="nav-scroll flex items-center gap-0.5 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pr-6 -mr-2"
            style={{ scrollbarWidth: "none" }}
          >
            {navLinks.map((l) => (
              <li key={l.to} className="snap-start shrink-0">
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={(e) => handleClick(e, l)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-full text-sm whitespace-nowrap transition-smooth ${
                      isActive
                        ? "bg-primary/90 text-primary-foreground shadow-glow"
                        : "text-foreground/85 hover:text-foreground hover:bg-white/10"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Right-edge fade so cut-off links hint at scrollability */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 h-full w-8 rounded-r-full"
            style={{
              background:
                "linear-gradient(to right, transparent, hsl(var(--background) / 0.45))",
            }}
          />
        </div>
      </nav>
    </header>
  );
};
