import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Roles from "./pages/Roles.tsx";
import Procedure from "./pages/Procedure.tsx";
import Team from "./pages/Team.tsx";
import Collaborations from "./pages/Collaborations.tsx";
import Categories from "./pages/Categories.tsx";
import NotFound from "./pages/NotFound.tsx";
import { ScrollToTop } from "./components/layout/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/procedure" element={<Procedure />} />
          <Route path="/team" element={<Team />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
