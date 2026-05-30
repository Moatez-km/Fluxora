/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Compass, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DESIGN_CARDS } from "../data";

export const RightSlideCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? DESIGN_CARDS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === DESIGN_CARDS.length - 1 ? 0 : prev + 1));
  };

  const currentCard = DESIGN_CARDS[currentIndex];

  return (
    <div className="w-full max-w-sm rounded-[24px] bg-neutral-900/30 border border-neutral-800/60 p-5 backdrop-blur-md relative overflow-hidden select-none hover:border-neutral-700/60 transition-colors duration-500">
      
      {/* Decorative Back Light Flare inside the card */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Card Header Section */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-900/60">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          <span className="text-[10px] text-neutral-400 font-mono tracking-widest uppercase">
            Active Showcase
          </span>
        </div>
        <button className="text-neutral-550 hover:text-white transition-colors cursor-pointer">
          <Maximize2 size={11} />
        </button>
      </div>

      {/* Dynamic Slide Content */}
      <div className="relative min-h-[140px] flex gap-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.3 }}
            className="flex w-full gap-5 text-left"
          >
            {/* Geometric Letter Box 'N', 'Z', 'Λ' (Just like the icon panel in the original image!) */}
            <div className="w-24 h-28 shrink-0 bg-neutral-950 rounded-2xl border border-neutral-850 flex items-center justify-center relative shadow-inner group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/20 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Large Abstract Monogram Emblem */}
              <span className="font-display font-extrabold text-[28px] text-zinc-100 tracking-tight relative z-10 transition-transform duration-500 group-hover:scale-110">
                {currentCard.cardLogoText}
               </span>
              
              {/* Corner tech grids */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-neutral-800" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-neutral-800" />
            </div>

            {/* Slide Title and Tag description */}
            <div className="flex flex-col justify-center flex-1 gap-1">
              <span className="text-xs text-neutral-500 font-mono">
                Concept {currentCard.indexText}/0{DESIGN_CARDS.length}
              </span>
              <h3 className="text-lg font-display font-bold text-white tracking-tight leading-tight mt-1">
                {currentCard.title}
              </h3>
              <p className="text-[11px] text-neutral-400 mt-1 lines-clamp-2 leading-relaxed">
                {currentCard.tagline}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation controls */}
      <div className="flex items-center justify-between border-t border-neutral-900/60 pt-4 mt-4">
        <div className="flex items-center gap-1">
          {DESIGN_CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-6 bg-orange-500" : "w-1.5 bg-neutral-800"
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-7 h-7 rounded-full bg-neutral-950/60 border border-neutral-850 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-all active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-7 h-7 rounded-full bg-neutral-950/60 border border-neutral-850 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-all active:scale-95 cursor-pointer"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
