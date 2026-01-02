import React from 'react';
import { SOCIAL_LINKS, NAV_LINKS } from '@/data/constants';
import { UI_TEXT } from '@/data/uiConstants';
import { Mail, Linkedin, Github, ChevronRight, ArrowUp, MapPin, Heart } from 'lucide-react';
import SystemClock from './ui/SystemClock';
import BackToTop from './ui/BackToTop';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-gradient-to-t from-black/90 via-black/50 to-transparent border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Let's collaborate on innovative projects
          </p>
        </div>

        {/* Quote Card (Added per user request) */}
        <div className="flex justify-center mb-16">
          <div className="relative max-w-3xl p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center group hover:border-cyan-500/30 transition-all duration-500">
            {/* Decorative Quotes */}
            <span className="absolute top-4 left-6 text-4xl text-cyan-500/40 font-serif">“</span>
            <span className="absolute bottom-[-10px] right-6 text-4xl text-cyan-500/40 font-serif transform rotate-180">“</span>

            {/* Sparkles/Decorations */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa] animate-pulse" style={{ animationDelay: '1.5s' }} />

            <p className="text-lg md:text-xl text-gray-300 italic font-light leading-relaxed">
              Enthusiastic and collaborative team player with a strong work ethic, eager to learn and contribute to a fast-paced tech-driven and research-intensive learning environment.
            </p>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

          {/* Column 1: Bio & Social (Left - 5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                DY
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Deepak Yannadle</h3>
                <p className="text-cyan-400 text-sm tracking-wider font-medium">Software Engineer & Collaborator</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Creating AI & ML solutions, deploying reliable cloud infrastructure, and automating workflows with CI/CD. Open to innovative ideas and collaborative projects.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Email Card */}
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="group flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 min-w-[200px]">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Email</span>
                  <span className="text-sm font-medium text-gray-200 group-hover:text-white truncate">{SOCIAL_LINKS.email}</span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 min-w-[200px]">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Linkedin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">LinkedIn</span>
                  <span className="text-sm font-medium text-gray-200">Deepak Yannadle</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Explore (Center - 2 cols) */}
          <div className="lg:col-span-2 lg:pl-8">
            <h3 className="text-lg font-bold text-white mb-6">Explore</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="group flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                    <ChevronRight size={16} className="mr-2 text-gray-600 group-hover:text-cyan-500 transition-colors opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: System Status (Right - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-end">
            <div className="w-full max-w-sm bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
              {/* Connecting Lines Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full" />

              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                System Status
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin size={18} />
                    <span className="text-xs uppercase tracking-wider">Location</span>
                  </div>
                  <span className="text-cyan-400 font-medium">INDIA [IN]</span>
                </div>

                {/* Time */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-xs uppercase tracking-wider text-gray-400">Local Time</span>
                  <SystemClock />
                </div>

                {/* Status */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Open to Work
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Verified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>© {currentYear} Deepak Yannadle. All rights reserved.</p>

          <div className="flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> in India
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all group"
          >
            Back to Top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
