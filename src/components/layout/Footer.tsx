import { Link } from "react-router-dom";
import { Phone, Mail, Instagram } from "lucide-react";

export const Footer = () => (
  <footer className="relative mt-32 px-6 pb-10">
    <div className="max-w-6xl mx-auto mb-8 divider-shine" aria-hidden />
    <div className="relative max-w-6xl mx-auto glass glass-bordered rounded-3xl p-10 grid md:grid-cols-4 gap-8 overflow-hidden">
      <div aria-hidden className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsl(42 81% 75% / 0.22), transparent 70%)" }} />
      <div className="md:col-span-1 relative">
        <h3 className="font-playfair text-5xl text-gradient leading-none mb-2">Apex</h3>
        <p className="text-sm text-muted-foreground max-w-xs font-garamond">
          Business Pitch Summit — where ideas meet their Apex.
        </p>
      </div>

      <div className="text-sm space-y-2 font-garamond relative">
        <p className="text-foreground/70 mb-3 uppercase tracking-widest text-xs">Explore</p>
        {[
          ["/", "Home"],
          ["/about", "About"],
          ["/roles", "Roles & Application"],
          ["/procedure", "Procedure"],
          ["/team", "Our Team"],
          ["/collaborations", "Collaborations"],
          ["/categories", "Industries"],
        ].map(([to, label]) => (
          <Link
            key={to}
            to={to}
            className="group block text-muted-foreground hover:text-accent transition-smooth"
          >
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">{label}</span>
          </Link>
        ))}
      </div>

      <div className="text-sm space-y-2 font-garamond relative">
        <p className="text-foreground/70 mb-3 uppercase tracking-widest text-xs">Summit</p>
        <p className="text-muted-foreground">Dates & Venue: TBA</p>
        <p className="text-muted-foreground">Applications opening soon.</p>
      </div>

      <div className="text-sm space-y-3 font-garamond relative">
        <p className="text-foreground/70 mb-3 uppercase tracking-widest text-xs">Contact</p>
        <a
          href="tel:+966508767377"
          className="group flex items-start gap-2 text-muted-foreground hover:text-accent transition-smooth"
        >
          <Phone size={14} className="mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
          <span>+966 508 767 377</span>
        </a>
        <a
          href="mailto:apexbusinesspitchsummit@gmail.com"
          className="group flex items-start gap-2 text-muted-foreground hover:text-accent transition-smooth break-all"
        >
          <Mail size={14} className="mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
          <span>apexbusinesspitchsummit@gmail.com</span>
        </a>
        <a
          href="https://www.instagram.com/apex.bps/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-2 text-muted-foreground hover:text-accent transition-smooth"
        >
          <Instagram size={14} className="mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
          <span>apex.bps</span>
        </a>
      </div>
    </div>
    <p className="text-center text-xs text-muted-foreground mt-6 font-garamond">
      © {new Date().getFullYear()} Apex BPS.
    </p>
  </footer>
);
