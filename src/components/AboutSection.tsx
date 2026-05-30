import React from "react";
import { motion } from "motion/react";
import { Laptop, QrCode, Briefcase, Smile, Layers } from "lucide-react";

export function AboutSection() {
  const stats = [
    {
      id: "projects",
      icon: <Layers size={26} className="text-orange-500" />,
      label: "Projects Completed",
      value: "150+",
    },
    {
      id: "qr-solutions",
      icon: <QrCode size={26} className="text-orange-500" />,
      label: "QR Solutions Delivered",
      value: "500+",
    },
    {
      id: "business-clients",
      icon: <Briefcase size={26} className="text-orange-500" />,
      label: "Business Clients",
      value: "300+",
    },
    {
      id: "satisfaction",
      icon: <Smile size={26} className="text-orange-500" />,
      label: "Client Satisfaction",
      value: "100%",
    },
  ];

  return (
    <section 
      id="about" 
      className="relative w-full py-24 sm:py-32 bg-[#050505] border-t border-neutral-900/60 overflow-hidden scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* ================= UPPER SECTION: Grid of Grayscale Image & Content ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Black & White Grayscale Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative group max-w-sm sm:max-w-md w-full aspect-[3/4] overflow-hidden rounded-[32px] border border-neutral-900 bg-neutral-950 shadow-2xl">
              {/* Image layer */}
              <img 
                src="/src/assets/images/about_creative_portrait_1779719614308.png"
                alt="Creative Director Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Vignette & Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-60" />
              <div className="absolute inset-0 border border-white/5 rounded-[32px] pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Copy & Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start gap-6 relative"
          >
            {/* Giant Monogram Background Behind Content */}
            <div className="absolute -top-12 -right-10 -z-10 text-[260px] font-extrabold tracking-tighter text-neutral-900/5 pointer-events-none select-none font-sans leading-none uppercase">
              ZEN
            </div>

            {/* Accent tag */}
            <span className="text-xs font-mono font-bold tracking-widest text-orange-500 uppercase">
              ABOUT US
            </span>

            {/* Heading styled identically to photo */}
            <div className="flex flex-col items-start gap-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight max-w-2xl">
                Smart Digital Solutions For <span className="text-orange-500">Modern Businesses</span>
              </h2>
              {/* Clean accent line matching screenshot style */}
              <div className="h-[2px] w-24 bg-orange-500 shadow-sm shadow-orange-500/20" />
            </div>

            {/* Paragraph Text */}
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl mt-2 font-sans select-text">
              We help brands grow through creative and innovative digital services designed to improve visibility, customer experience, and business performance. From professional websites to smart QR solutions, we create modern tools that make your business stand out.
            </p>

            {/* Highlights List Stack (Modern list block style with sleek custom borders) */}
            <div className="flex flex-col gap-5 mt-6 w-full max-w-xl">
              
              {/* Highlight 1: Website Development */}
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-neutral-950/40 border border-neutral-900 hover:border-orange-500/10 hover:bg-neutral-950/60 transition-all duration-300">
                <div className="text-2xl pt-0.5 shrink-0 select-none">⚡</div>
                <div>
                  <h4 className="font-bold text-white text-base">Website Development</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                    Modern, responsive, and high-performance websites crafted to strengthen your online presence and convert visitors into loyal customers.
                  </p>
                </div>
              </div>

              {/* Highlight 2: Digital QR Menus */}
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-neutral-950/40 border border-neutral-900 hover:border-orange-500/10 hover:bg-neutral-950/60 transition-all duration-300">
                <div className="text-2xl pt-0.5 shrink-0 select-none">🍽</div>
                <div>
                  <h4 className="font-bold text-white text-base">Digital QR Menus</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                    Interactive digital menus for restaurants and cafés that provide a fast, contactless, and premium customer experience.
                  </p>
                </div>
              </div>

              {/* Highlight 3: QR Business Cards */}
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-neutral-950/40 border border-neutral-900 hover:border-orange-500/10 hover:bg-neutral-950/60 transition-all duration-300">
                <div className="text-2xl pt-0.5 shrink-0 select-none">📱</div>
                <div>
                  <h4 className="font-bold text-white text-base">QR Business Cards</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                    Creative business cards with smart QR technology that instantly connect clients to your contact details, website, or social platforms.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* ================= LOWER SECTION: 4-Column Stats Dashboard ================= */}
        <div className="relative mt-24 sm:mt-32 pt-16 border-t border-neutral-900/50">
          
          {/* Background overlay text behind stats */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-[140px] font-extrabold tracking-[0.2em] text-neutral-900/5 pointer-events-none select-none font-sans leading-none uppercase max-w-full truncate">
            RESULTS
          </div>

          {/* Heading for Stats Dashboard */}
          <div className="flex flex-col items-center justify-center text-center gap-2 mb-12">
            <span className="text-xs font-mono font-bold tracking-[0.18em] text-orange-500 uppercase">
              PERFORMANCE METRICS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
              Our Results
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center gap-3.5 group rounded-[24px] p-6 bg-neutral-950/40 border border-neutral-900/60 hover:border-orange-500/15 hover:bg-neutral-950/80 transition-all duration-300 shadow-xl"
              >
                {/* Custom Glowing Icon */}
                <div className="p-3.5 rounded-full bg-orange-500/5 group-hover:bg-orange-500/10 border border-neutral-900 group-hover:border-orange-500/15 transition-all duration-300 shadow-sm shadow-orange-500/5">
                  {stat.icon}
                </div>

                {/* Big Stat Value with custom orange highlights */}
                <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-white group-hover:text-orange-500 transition-colors duration-300">
                  {stat.value}
                </span>

                {/* Stat label with premium modern spacing */}
                <span className="text-[10px] md:text-xs font-sans font-semibold tracking-wide text-neutral-400 capitalize">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
