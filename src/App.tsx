import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import BackToTop from "@/components/ui/BackToTop";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import StarryBackground from "@/components/ui/StarryBackground";
import LiveBackground from "@/components/ui/LiveBackground";
import { ThemeProvider } from "@/context/ThemeContext";

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
        <SmoothScroll>
          <LiveBackground />
          <StarryBackground />
          <TooltipProvider delayDuration={0}>
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
          </TooltipProvider>
        </SmoothScroll>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
