import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  // null = measuring; true = links fit; false = collapse to burger
  const [linksFit, setLinksFit] = useState<boolean | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const measureRef = useRef<HTMLUListElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);

  // Hide-on-scroll-down
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

  // Measure: do the links fit beside the logo within the available pill width?
  useLayoutEffect(() => {
    const measure = () => {
      const nav = navRef.current;
      const list = measureRef.current;
      const logoEl = logoRef.current;
      if (!nav || !list || !logoEl) return;

      const navWidth = nav.clientWidth;
      const logoWidth = logoEl.offsetWidth;
      const linksWidth = list.scrollWidth;
      // burger button + paddings + safety gap
      const reserved = 56;
      const fits = linksWidth + logoWidth + reserved <= navWidth;
      setLinksFit(fits);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (navRef.current) ro.observe(navRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const handleClick = (e: React.MouseEvent, link: typeof navLinks[number]) => {
    setOpen(false);
    if (!link.cardId) return; // Home — let it navigate normally
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => shineCard(link.cardId!), 250);
    } else {
      shineCard(link.cardId);
    }
  };

  const showLinks = linksFit === true;
  const showBurger = linksFit !== true; // also true while measuring (null) so nothing flashes

  return (
    <header
      ref={headerRef}
      className="fixed top-3 left-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-6xl animate-fade-in"
      style={{
        transform: hidden ? "translate(-50%, -160%)" : "translate(-50%, 0)",
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
        transition: "transform 450ms cubic-bezier(0.32,0.72,0,1), opacity 300ms ease",
        willChange: "transform, opacity",
      }}
    >
      <nav
        ref={navRef}
        className="glass rounded-full pl-2 pr-2 py-1.5 sm:pl-3 sm:py-2 flex items-center justify-between gap-2 relative overflow-hidden"
      >
        <Link
          ref={logoRef}
          to="/"
          className="flex items-center gap-2 pr-2 shrink-0"
          aria-label="Apex BPS — Home"
        >
          <img src={logo} alt="Apex BPS logo" className="h-7 w-7 sm:h-8 sm:w-8 object-contain" />
          <span className="font-playfair text-lg sm:text-xl text-gradient leading-none">
            Apex
          </span>
        </Link>

        {/* Hidden measurer — always rendered, never visible, used to detect overflow */}
        <ul
          ref={measureRef}
          aria-hidden="true"
          className="absolute -z-10 top-0 left-0 invisible pointer-events-none flex items-center gap-0.5"
        >
          {navLinks.map((l) => (
            <li key={`m-${l.to}`}>
              <span className="px-3 py-2 text-sm whitespace-nowrap inline-block">{l.label}</span>
            </li>
          ))}
        </ul>

        {/* Real links — only when they fit */}
        {showLinks && (
          <ul className="flex items-center gap-0.5 min-w-0">
            {navLinks.map((l) => (
              <li key={l.to}>
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
        )}

        {/* Burger — when links don't fit */}
        {showBurger && (
          <button
            className="p-2 rounded-full hover:bg-white/10 shrink-0"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </nav>

      {open && showBurger && (
        <div className="mt-2 glass rounded-3xl p-3 animate-scale-in max-h-[70vh] overflow-y-auto">
          <ul className="flex flex-col gap-1">
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
                        : "text-foreground/85 hover:bg-white/10"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
