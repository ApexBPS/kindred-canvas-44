import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="relative mt-32 px-6 pb-10">
    <div className="max-w-6xl mx-auto glass rounded-3xl p-10 grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-serif text-3xl text-gradient mb-2">Aurora</h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          A collective shaping ideas through clarity, craft, and collaboration.
        </p>
      </div>
      <div className="text-sm space-y-2">
        <p className="text-foreground/60 mb-3 uppercase tracking-widest text-xs">Explore</p>
        <Link to="/roles" className="block hover:text-accent transition-smooth">Roles & Application</Link>
        <Link to="/procedure" className="block hover:text-accent transition-smooth">Procedure</Link>
        <Link to="/team" className="block hover:text-accent transition-smooth">Our Team</Link>
        <Link to="/categories" className="block hover:text-accent transition-smooth">Categories</Link>
      </div>
      <div className="text-sm space-y-2">
        <p className="text-foreground/60 mb-3 uppercase tracking-widest text-xs">Contact</p>
        <p className="text-muted-foreground">hello@aurora.org</p>
        <p className="text-muted-foreground">Open to collaborations worldwide.</p>
      </div>
    </div>
    <p className="text-center text-xs text-muted-foreground mt-6">© {new Date().getFullYear()} Aurora Collective.</p>
  </footer>
);
