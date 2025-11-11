import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4",
        "glass border-b border-border/20",
        scrolled && "shadow-lg"
      )}
    >
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        <a
          href="#home"
          className={cn(
            "font-bold text-xl tracking-tight transition-opacity duration-300",
            scrolled ? "text-foreground" : "text-foreground",
          )}
        >
          Deepak Yannadle
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 link-underline hover:scale-110 hover:text-blue-600",
                scrolled ? "text-foreground" : "text-foreground",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col space-y-1.5"
          >
            <span
              className={cn(
                "block h-0.5 w-6 bg-current transition-transform duration-300",
                mobileMenuOpen && "rotate-45 translate-y-2",
              )}
            ></span>
            <span
              className={cn(
                "block h-0.5 w-6 bg-current transition-opacity duration-300",
                mobileMenuOpen && "opacity-0",
              )}
            ></span>
            <span
              className={cn(
                "block h-0.5 w-6 bg-current transition-transform duration-300",
                mobileMenuOpen && "-rotate-45 -translate-y-2",
              )}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 glass border-b border-border/20 shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-[100vh] py-4" : "max-h-0 py-0",
        )}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-center text-foreground"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
