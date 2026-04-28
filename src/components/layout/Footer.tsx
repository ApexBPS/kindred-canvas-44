import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="relative mt-32 px-6 pb-10">
    <div className="max-w-6xl mx-auto glass rounded-3xl p-10 grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-crave text-5xl text-gradient leading-none mb-2">Apex</h3>
        <p className="text-sm text-muted-foreground max-w-xs font-garamond">
          Business Pitch Summit — where student innovation meets industry-level insight.
        </p>
      </div>
      <div className="text-sm space-y-2 font-garamond">
        <p className="text-foreground/70 mb-3 uppercase tracking-widest text-xs">Explore</p>
        <Link to="/about" className="block hover:text-accent transition-smooth">About</Link>
        <Link to="/roles" className="block hover:text-accent transition-smooth">Roles & Application</Link>
        <Link to="/procedure" className="block hover:text-accent transition-smooth">Procedure</Link>
        <Link to="/team" className="block hover:text-accent transition-smooth">Our Team</Link>
      </div>
      <div className="text-sm space-y-2 font-garamond">
        <p className="text-foreground/70 mb-3 uppercase tracking-widest text-xs">Summit</p>
        <p className="text-muted-foreground">Dates & Venue: TBA</p>
        <p className="text-muted-foreground">Applications opening soon.</p>
      </div>
    </div>
    <p className="text-center text-xs text-muted-foreground mt-6 font-garamond">
      © {new Date().getFullYear()} Apex BPS.
    </p>
  </footer>
);
