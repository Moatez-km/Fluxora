/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { PRODUCT_CARDS } from "../data";
import { ProductCard } from "../types";

// Mini Custom Star Asterisk SVG to replicate the exact elegant orange indicator seen in the reference photo
const StarAsterisk = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-[#ff5500]"
  >
    <path d="M12 2l1.6 4.9H19l-4.1 3 1.6 4.9-4.1-3-4.1 3 1.6-4.9-4.1-3h5.4z" />
    <path d="M12 6l1 3h3.2l-2.6 1.9 1 3-2.6-1.9-2.6 1.9 1-3-2.6-1.9h3.2z" opacity="0.5" />
  </svg>
);

export const ProductSection: React.FC = () => {
  return (
    <section 
      id="product-section" 
      className="relative w-full bg-black py-24 px-6 lg:px-12 overflow-hidden border-t border-neutral-900/40 scroll-mt-28"
    >
      {/* Dynamic Background subtle ambient spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/[0.02] to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Subtle Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <span className="text-xs uppercase tracking-widest font-mono text-orange-500 font-semibold mb-2 block">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white leading-tight">
              Designing platforms with absolute pixel precision.
            </h2>
          </div>
          <p className="text-xs text-neutral-400 font-mono tracking-wide max-w-xs leading-relaxed text-left md:text-right">
            Every screen, curve, and frame is built to feel exceptionally rapid, smooth, and authentic.
          </p>
        </div>

        {/* The Staggered Flex Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-6">
          {PRODUCT_CARDS.map((card: ProductCard, idx: number) => {
            // Setup staggered vertical transforms to mimic the beautiful reference layout heights
            const staggeredClass = 
              idx === 0 ? "lg:-translate-y-4" : 
              idx === 1 ? "lg:translate-y-4" : 
              idx === 2 ? "lg:-translate-y-2" : 
              "lg:translate-y-6";

            return (
              <InteractiveCard 
                key={card.id} 
                card={card} 
                staggeredClass={staggeredClass} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface InteractiveCardProps {
  card: ProductCard;
  staggeredClass: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ card, staggeredClass }) => {
  const [hovered, setHovered] = useState(false);

  // Smooth mouse coordinates tracking for 3D card tilt & vibrant moving background image action
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Transform vectors for the card rotation (tilt)
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  // Transform vectors for the vibrant background image shift (creates 3D layered parallax depth!)
  const imgTranslateX = useTransform(x, [0, 1], [-7, 7]);
  const imgTranslateY = useTransform(y, [0, 1], [-7, 7]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    // Smooth snap spring back to center
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div className={`w-full h-full flex items-center justify-center ${staggeredClass}`}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative w-full min-h-[440px] rounded-[32px] overflow-hidden p-8 flex flex-col justify-between transition-shadow duration-500 shadow-2xl group cursor-pointer ${
          card.isDark 
            ? "bg-neutral-950 text-white border border-neutral-900 shadow-black/80 hover:border-neutral-800" 
            : "bg-neutral-100 text-neutral-950 border border-neutral-200 shadow-neutral-200/50 hover:border-neutral-300"
        }`}
      >
        {/* Simple & Dynamic Background Image or Video with Vibrant Hover Move Animation */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[32px]">
          <div 
            className={`absolute inset-0 z-10 transition-opacity duration-500 ${
              card.isDark 
                ? "bg-gradient-to-t from-black/45 via-black/15 to-transparent opacity-65 group-hover:opacity-50" 
                : "bg-gradient-to-t from-neutral-100 via-neutral-100/40 to-transparent opacity-40"
            }`} 
          />
          
          {card.videoUrl ? (
            <motion.div
              style={{
                x: imgTranslateX,
                y: imgTranslateY,
                scale: hovered ? 1.08 : 1.02,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 25 }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                src={card.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover brightness-[0.75] group-hover:brightness-[0.80] transition-all duration-500"
              />
            </motion.div>
          ) : (
            <motion.img
              src={card.imageUrl}
              alt={card.title}
              referrerPolicy="no-referrer"
              style={{
                x: imgTranslateX,
                y: imgTranslateY,
                scale: hovered ? 1.08 : 1.02,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 25 }}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 brightness-[0.95]"
            />
          )}
        </div>

        {/* Card Content - TOP: Tech/Strategic Pill Label */}
        <div className="relative z-20 flex justify-between items-start" style={{ transform: "translateZ(15px)" }}>
          <span 
            className={`text-[10px] font-mono font-bold tracking-wider px-3.5 py-1.5 rounded-full border transition-all ${
              card.isDark
                ? "bg-black/40 text-neutral-300 border-neutral-800/60"
                : "bg-white/80 text-neutral-800 border-neutral-300/60"
            }`}
          >
            {card.tag}
          </span>
        </div>

        {/* Card Content - BOTTOM: Title, description, and Custom Star emblem */}
        <div className="relative z-20 flex flex-col items-start gap-4 text-left" style={{ transform: "translateZ(25px)" }}>
          {/* Replicating the distinct custom orange indicator badge above layout texts */}
          <div className="p-1 rounded bg-orange-600/10 border border-orange-500/10">
            <StarAsterisk />
          </div>

          <div className="flex flex-col gap-2.5">
            <h3 
              className={`text-xl sm:text-2xl font-display font-extrabold tracking-tight leading-[1.1] transition-colors duration-300 ${
                card.isDark ? "text-white" : "text-neutral-950"
              }`}
            >
              {card.title}
            </h3>
            <p 
              className={`text-[12px] sm:text-[13px] leading-relaxed transition-all duration-300 ${
                card.isDark ? "text-neutral-400 group-hover:text-neutral-300" : "text-neutral-600 group-hover:text-neutral-800"
              }`}
            >
              {card.description}
            </p>
          </div>
        </div>

        {/* Hover corner glow */}
        {card.isDark && (
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        )}
      </motion.div>
    </div>
  );
};
