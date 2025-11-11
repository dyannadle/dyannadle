import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent",
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
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col space-y-1.5 md:hidden"
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

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300 ease-in-out overflow-hidden",
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
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
