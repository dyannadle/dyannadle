import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense } from "react";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import BackToTop from "@/components/ui/BackToTop";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import TechBackground from "@/components/ui/TechBackground";
import SafeTechBackground from "@/components/ui/SafeTechBackground";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import { ThemeProvider } from "@/context/ThemeContext";
import Terminal from "@/components/ui/Terminal"; // Added Terminal import

import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

// Simple fallback for PageLoader if missing
const PageLoader = () => (
  <div className="flex items-center justify-center h-screen bg-black text-white">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider>
        {/* Using Safe CSS-3D Engine for guaranteed stability + visuals */}
        <SafeTechBackground />
        <Terminal />

        <TooltipProvider delayDuration={0}>
          <div className="relative z-10 min-h-screen flex flex-col font-sans">
            <Toaster />
            <Sonner />
            <CustomCursor />
            <BackToTop />
            <ScrollProgress />

            <BrowserRouter>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
