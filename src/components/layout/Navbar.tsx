import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      if (goingDown && y > 80) setHidden(true);
      else if (!goingDown) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleClick = (e: React.MouseEvent, link: typeof navLinks[number]) => {
    setMenuOpen(false);
    if (!link.cardId) return;
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => shineCard(link.cardId!), 300);
    } else {
      shineCard(link.cardId);
    }
  };

  return (
    <header
      className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-4 flex justify-center animate-fade-in pointer-events-none"
      style={{
        transform: hidden ? "translateY(-160%)" : "translateY(0)",
        opacity: hidden ? 0 : 1,
        transition: "transform 450ms cubic-bezier(0.32,0.72,0,1), opacity 300ms ease",
        willChange: "transform, opacity",
      }}
    >
      <nav className="glass rounded-full pl-3 pr-2 py-1.5 sm:py-2 flex items-center gap-2 w-full sm:w-auto pointer-events-auto">
        <Link
          to="/"
          className="flex items-center gap-2 pr-1 shrink-0"
          aria-label="Apex BPS — Home"
        >
          <img src={logo} alt="Apex BPS logo" className="h-7 w-7 sm:h-8 sm:w-8 object-contain" />
        </Link>

        {/* Desktop / tablet: centered scrollable links inside the pill */}
        <div className="relative hidden sm:block">
          <ul
            className="nav-scroll flex items-center gap-0.5 overflow-x-auto overflow-y-hidden scroll-smooth max-w-[min(70vw,820px)] pr-6"
            style={{ scrollbarWidth: "none" }}
          >
            {navLinks.map((l) => (
              <li key={l.to} className="shrink-0">
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
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 h-full w-8 rounded-r-full"
            style={{
              background:
                "linear-gradient(to right, transparent, hsl(var(--background) / 0.45))",
            }}
          />
        </div>

        {/* Mobile: burger button + spacer to keep the logo on the left */}
        <div className="flex-1 sm:hidden" />
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="sm:hidden ml-1 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 text-foreground transition-smooth"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden mt-2 origin-top transition-all duration-300 ${
          menuOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
        style={{ transformOrigin: "top right" }}
      >
        <ul className="glass-strong rounded-3xl p-2 flex flex-col">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                onClick={(e) => handleClick(e, l)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-2xl text-sm transition-smooth ${
                    isActive
                      ? "bg-primary/90 text-primary-foreground"
                      : "text-foreground/90 hover:bg-white/10"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
