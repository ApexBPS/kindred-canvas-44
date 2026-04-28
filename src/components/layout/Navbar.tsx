import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/roles", label: "Roles & Application" },
  { to: "/procedure", label: "Procedure" },
  { to: "/team", label: "Our Team" },
  { to: "/collaborations", label: "Collaborations" },
  { to: "/categories", label: "Categories" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY;
      // Hide when scrolling down past 80px, show when scrolling up
      if (goingDown && y > 80) setHidden(true);
      else if (!goingDown) setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl animate-fade-in"
      style={{
        transform: hidden ? "translate(-50%, -160%)" : "translate(-50%, 0)",
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
        transition: "transform 450ms cubic-bezier(0.32,0.72,0,1), opacity 300ms ease",
        willChange: "transform, opacity",
      }}
    >
      <nav className="glass rounded-full px-3 py-2 flex items-center justify-between gap-2">
        <Link to="/" className="px-4 py-1 font-playfair text-2xl text-gradient leading-none">
          Apex
        </Link>
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                id={l.to === "/roles" ? "nav-roles" : undefined}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm tracking-wide transition-smooth ${
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
        <button
          className="lg:hidden p-2 rounded-full hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden mt-2 glass rounded-3xl p-3 animate-scale-in">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
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
