import React from "react";
import { motion } from "motion/react";
import { Cpu, Facebook, Linkedin, Twitter, Hash } from "lucide-react";

export function Footer() {
  const columns = [
    {
      title: "Solutions",
      links: [
        { label: "Industries", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "MCA", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "Join our Team", href: "#" },
        { label: "Hire us", href: "#" },
        { label: "Careers", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Resources", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Onhovered", href: "#", isHighlighted: true }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "API Docs", href: "#" },
        { label: "Ticket System", href: "#" },
        { label: "Status Page", href: "#" },
        { label: "Contacts", href: "#contact" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Industries", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "MCA", href: "#" }
      ]
    },
    {
      title: "Contacts",
      links: [
        { label: "Join our Team", href: "#" },
        { label: "Hire us", href: "#" },
        { label: "Careers", href: "#" }
      ]
    }
  ];

  return (
    <footer className="relative w-full bg-black pt-20 overflow-hidden select-none">
      
      {/* Decorative Wavy SVG Top Border representing the smooth fluid waves from reference */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 translate-y-[-99%]">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] sm:h-[80px] text-neutral-950 fill-current"
        >
          <path
            d="M0,60 C240,110 400,20 720,70 C1040,120 1200,10 1440,55 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      {/* Main Footer Inner Content - Styled in dark premium theme with orange accents */}
      <div className="relative z-20 w-full bg-neutral-950 border-t border-neutral-900/60 pb-16 pt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
          
          {/* ================= TOP BRANDING & SOCIAL MEDIA LINE ================= */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-neutral-900/80">
            
            {/* Logo and Copyright information */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shadow-lg shadow-orange-500/10">
                <Cpu size={22} className="animate-pulse" />
              </div>
              <div>
                <h4 className="text-lg font-black tracking-tight text-white uppercase font-sans">
                  Fluxora
                </h4>
                <p className="text-xs text-neutral-500 font-mono tracking-wide mt-0.5">
                  &copy; 2026 Fluxora Inc. All rights reserved.
                </p>
              </div>
            </div>

            {/* Social media icons styled directly from request with a gold/orange tint */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900/60 border border-neutral-800/80 hover:border-orange-500/40 hover:bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900/60 border border-neutral-800/80 hover:border-orange-500/40 hover:bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900/60 border border-neutral-800/80 hover:border-orange-500/40 hover:bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all duration-300"
              >
                <Hash size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900/60 border border-neutral-800/80 hover:border-orange-500/40 hover:bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all duration-300"
              >
                <Twitter size={16} />
              </a>
            </div>

          </div>

          {/* ================= COLUMN LISTS GRID ================= */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
            {columns.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                
                {/* Column Title in Orange matching request */}
                <h5 className="text-xs uppercase font-mono tracking-[0.16em] font-extrabold text-orange-500">
                  {col.title}
                </h5>

                {/* Column Links list */}
                <ul className="flex flex-col gap-3">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className={`text-xs sm:text-sm font-medium transition-all duration-300 block py-0.5 ${
                          link.isHighlighted
                            ? "text-orange-400 underline decoration-orange-500/50 underline-offset-4 hover:text-orange-300"
                            : "text-neutral-450 hover:text-orange-400"
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

          {/* ================= DYNAMIC BOTTOM EMBELLISHMENT ================= */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-900/40 text-[10px] font-mono text-neutral-650">
            <div>
              Designed with &hearts; in Germany • Pixel-perfect alignment and zero-to-one precision.
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span>System servers fully synchronized</span>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
