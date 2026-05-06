import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/"))}
      className="fixed top-20 left-3 sm:top-4 sm:left-4 z-40 glass rounded-full pl-2.5 pr-3 sm:pl-3 sm:pr-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 font-garamond text-xs sm:text-sm text-foreground/90 hover:bg-white/15 transition-smooth"
      aria-label="Go back"
    >
      <ArrowLeft size={14} className="sm:w-4 sm:h-4" />
      <span>Back</span>
    </button>
  );
};
