/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Compass } from "lucide-react";
import { NAVIGATION_ITEMS } from "../data";
import { NavItem } from "../types";

interface HeaderProps {
  onOpenSandbox?: () => void;
  onOpenContact?: () => void;
  brandText?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenSandbox,
  onOpenContact,
  brandText = "Fluxora" 
 }) => {
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Generate beautiful real-time EST/EDT or UTC clock for premium immersion
    const updateTime = () => {
      const now = new Date();
      // Format to HH:MM:SS AM/PM
      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(timeStr);

      // Dynamically calculate if CET time is within 08:00 AM - 18:00 PM
      try {
        const cetTimeStr = now.toLocaleTimeString("en-US", {
          timeZone: "Europe/Paris",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        const parts = cetTimeStr.split(":");
        const hours = parseInt(parts[0], 10);
        const minutes = parseInt(parts[1], 10);
        const totalMinutes = hours * 60 + minutes;
        setIsOpen(totalMinutes >= 8 * 60 && totalMinutes < 18 * 60);
      } catch (e) {
        // Fallback to local timezone calculation if custom formatting fails
        const localHour = now.getHours();
        setIsOpen(localHour >= 8 && localHour < 18);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-black/40 backdrop-blur-md border-b border-neutral-900/40 px-6 lg:px-12 py-4 flex items-center justify-between">
      {/* 1. Brand Logo Container */}
      <div className="flex items-center gap-3">
        <div className="relative w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden">
          <div className="absolute w-3 h-3 bg-orange-600 rounded-full animate-ping opacity-60" />
          <Compass className="w-4 h-4 text-orange-500 relative z-10" />
        </div>
        <span className="font-display font-bold text-lg tracking-tight text-white">
          {brandText}
        </span>
      </div>

      {/* 2. Desktop Navigation list */}
      <nav className="hidden lg:flex items-center gap-8 bg-neutral-900/40 border border-neutral-800/40 px-6 py-2.5 rounded-full">
        {NAVIGATION_ITEMS.map((item: NavItem) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => {
              if (item.id === "contact" && onOpenContact) {
                e.preventDefault();
                onOpenContact();
              }
            }}
            className={`group text-xs font-medium text-neutral-400 hover:text-white transition-colors relative flex items-center gap-1`}
          >
            {item.label}
            {item.hasDropdown && (
              <ChevronDown size={12} className="text-neutral-500 group-hover:text-white transition-colors" />
            )}
            {item.id === "home" && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500" />
            )}
          </a>
        ))}
      </nav>

      {/* 3. Timezone and Primary Action Action button */}
      <div className="flex items-center gap-6">
        {/* GMT / EST timezone clock display */}
        <div className="hidden md:flex flex-col items-end text-right">
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono font-medium">
            Agency Time
          </span>
          <span className="text-[11px] text-neutral-300 font-mono font-medium flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-emerald-500" : "bg-rose-500"} animate-pulse`} />
            08:00 AM — 18:00 PM (CET)
          </span>
        </div>

        {/* Action Button: "Let's Write" */}
        <button
          onClick={onOpenSandbox}
          className="group relative px-5 py-2 rounded-full overflow-hidden bg-neutral-900 hover:bg-white text-white hover:text-black border border-neutral-800 font-medium text-xs transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-lg"
        >
          <span>Let's Write</span>
          <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </header>
  );
};
