import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Prizes from "./pages/Prizes";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import { SideGallery } from "./components/SideGallery";
import { MusicProvider } from "./context/MusicContext";
import MusicToggle from "./components/MusicToggle";
import Schedule from "./pages/Schedule";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MusicProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/elevate2026">
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/events" element={<Events />} />
                <Route path="/prizes" element={<Prizes />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/schedule" element={<Schedule />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
            <SideGallery />
            <MusicToggle />
          </BrowserRouter>
        </MusicProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
