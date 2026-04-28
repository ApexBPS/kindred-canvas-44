import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/"))}
      className="fixed top-4 left-4 z-40 glass rounded-full pl-3 pr-4 py-2 flex items-center gap-2 font-garamond text-sm text-foreground/90 hover:bg-white/15 transition-smooth shadow-glass"
      aria-label="Go back"
    >
      <ArrowLeft size={16} />
      <span>Back</span>
    </button>
  );
};
