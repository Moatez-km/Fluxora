import React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

interface ServicesSectionProps {
  onContact: (subject: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onContact }) => {
  const cards = [
    {
      id: "basic",
      title: "Website Development",
      description: "Custom-designed websites built for absolute speed, performance and brand impact.",
      isPopular: false,
      buttonText: "Get started",
      buttonStyle: "bg-white/5 border border-white/10 text-white hover:bg-white/10",
      accentColor: "border-orange-500/20 shadow-orange-500/5",
      borderColor: "border-neutral-800/80",
      bgStyle: "bg-white/[0.02]",
      features: [
        "Custom responsive layout design",
        "Fast loading speed & SEO optimized",
        "Modern slick transition animations",
        "Clean self-documented code structure",
        "Comprehensive cross-device checks",
      ],
    },
    {
      id: "premium",
      title: "Digital QR Menus",
      description: "Interactive QR code menus designed to elevate dining experience and boost restaurant sales.",
      isPopular: true,
      buttonText: "Get started",
      buttonStyle: "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-amber-700 hover:scale-[1.02]",
      accentColor: "border-orange-500/50 shadow-orange-500/15 shadow-2xl",
      borderColor: "border-orange-500/40",
      bgStyle: "bg-gradient-to-b from-orange-950/20 to-black/40 backdrop-blur-xl",
      features: [
        "Contactless instant scan system",
        "Real-time menu updating portal",
        "High-definition food category list",
        "Custom branded QR code download",
        "Priority 24/7 dedicated support",
      ],
    },
    {
      id: "enterprise",
      title: "QR Business Cards",
      description: "Smart digital cards that instantly connect potential clients to all your info with one scan.",
      isPopular: false,
      buttonText: "Contact sale",
      buttonStyle: "bg-white/5 border border-white/10 text-white hover:bg-white/10",
      accentColor: "border-orange-500/20 shadow-orange-500/5",
      borderColor: "border-neutral-800/80",
      bgStyle: "bg-white/[0.02]",
      features: [
        "Integrated NFC + QR mechanics",
        "Single-page multi-link profile hub",
        "Instant profile save on smartphones",
        "Comprehensive click analytics tracker",
        "Adaptive styling updates request",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 bg-black overflow-hidden border-t border-neutral-900/60 scroll-mt-28"
    >
      {/* Background soft ambient glowing orbs mirroring the dark violet ambiance but in warm orange */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center justify-center text-center gap-3 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight uppercase font-sans"
          >
            Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">your plan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-md sm:text-lg text-neutral-400 font-medium tracking-wide"
          >
            Unlock endless possibilities
          </motion.p>
        </div>

        {/* ================= 3-COLUMN SERVICES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl items-stretch">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className={`relative flex flex-col justify-between rounded-[28px] p-8 md:p-9 transition-all duration-500 border backdrop-blur-md ${card.borderColor} ${card.bgStyle} ${card.accentColor} group`}
            >
              {/* Featured Subtle Glow Ring for the Popular Middle Card */}
              {card.isPopular && (
                <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-orange-500/20 via-transparent to-transparent pointer-events-none" />
              )}

              {/* CARD TOP DETAILS */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors duration-300">
                    {card.title}
                  </h3>
                  {card.isPopular && (
                    <span className="text-[10px] uppercase font-mono tracking-widest font-extrabold px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/35 text-orange-400">
                      Popular
                    </span>
                  )}
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed min-h-[50px] mb-8 font-sans">
                  {card.description}
                </p>

                {/* CALL TO ACTION BUTTON */}
                <button
                  onClick={() => onContact(card.title)}
                  className={`w-full py-4 px-6 rounded-2xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 transform active:scale-[0.98] cursor-pointer ${card.buttonStyle}`}
                >
                  {card.buttonText}
                </button>

                {/* THIN HORIZONTAL LINE SEPARATOR MATCHING THE IMAGE STYLE */}
                <div className="w-full h-px bg-neutral-900 my-8" />

                {/* EXPLICIT CHECKMARK LISTS */}
                <ul className="flex flex-col gap-4">
                  {card.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-neutral-350 text-xs sm:text-sm font-sans font-medium">
                      
                      {/* Check icon in custom styled rounded container */}
                      <div className="w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Subtle Glowing Corner Effect on Hover */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-600/[0.02] rounded-full blur-2xl group-hover:bg-orange-600/[0.04] transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
