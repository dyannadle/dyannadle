import React from "react";
import { Mail, Linkedin, Phone, MessageSquare } from "lucide-react";

const Footer: React.FC = () => {
  // const { getLinkByName } = useLinks("social");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="overflow-hidden relative py-10 text-white bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl animate-float animation-delay-300"></div>
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between items-center md:flex-row">
          <div className="mb-4 text-center md:mb-0 md:text-left">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
              Deepak Yannadle
            </h3>
            <p className="mt-1 text-white/70">
              Software Tester & Quality Assurance Professional
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:gap-8 md:justify-end">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Education", href: "#education" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="relative transition-all duration-300 hover:text-blue-300 hover:scale-110 group hover:translate-y-[-2px]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent to-transparent via-white/20"></div>

        <div className="flex flex-col justify-between items-center text-sm md:flex-row text-white/60">
          <p className="flex gap-2 items-center">
            © {currentYear} Deepak Yannadle. All rights reserved.
            <span className="hidden md:inline">•</span>
            <span className="text-blue-300">Made with ❤️</span>
          </p>
          <div className="flex mt-4 space-x-6 md:mt-0">
            {[
              {
                href: "mailto:dyannadle05@gmail.com",
                icon: <Mail size={18} />,
                label: "Email",
                target: "_blank",
              },
              {
                href: "https://www.linkedin.com/in/deepak-yannadle-4319771a1/",
                icon: <Linkedin size={18} />,
                label: "LinkedIn",
                target: "_blank",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.target}
                rel={social.target ? "noopener noreferrer" : undefined}
                className="transition-all duration-300 transform hover:text-blue-300 hover:scale-125 hover:rotate-12"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
