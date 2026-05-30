/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Star, MessageSquare, ArrowUpRight, Award, MapPin, MousePointerClick, Heart, Layers, Sliders, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./components/Header";
import { SilhouetteHero } from "./components/SilhouetteHero";
import { CopySuite } from "./components/CopySuite";
import { ProductSection } from "./components/ProductSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { GlassDiscussion } from "./components/GlassDiscussion";

export default function App() {
  // Slogan copied exactly from the image
  const ORIGINAL_SLOGAN = "We start from zero, delivering only what matters.";
  const ORIGINAL_TAG = "| Creative Agency";

  const [slogan, setSlogan] = useState(ORIGINAL_SLOGAN);
  const [tag, setTag] = useState(ORIGINAL_TAG);
  
  // Sandbox editor tools
  const [sandboxOpen, setSandboxOpen] = useState(false);
  const [activeEditorField, setActiveEditorField] = useState<"slogan" | "tag">("slogan");
  const [chatActive, setChatActive] = useState(false);
  const [inquiryText, setInquiryText] = useState("");
  const [submittedInquiry, setSubmittedInquiry] = useState(false);
  const [contactSubject, setContactSubject] = useState("Website Development");
  const [isAgencyOpen, setIsAgencyOpen] = useState(true);

  useEffect(() => {
    const checkTime = () => {
      try {
        const now = new Date();
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
        setIsAgencyOpen(totalMinutes >= 8 * 60 && totalMinutes < 18 * 60);
      } catch (e) {
        const localHour = new Date().getHours();
        setIsAgencyOpen(localHour >= 8 && localHour < 18);
      }
    };
    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const characterMatch = slogan.length === ORIGINAL_SLOGAN.length;

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryText.trim()) return;
    setSubmittedInquiry(true);
    setTimeout(() => {
      setSubmittedInquiry(false);
      setInquiryText("");
      setChatActive(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-[100dvh] w-full bg-[#000000] text-white flex flex-col justify-between overflow-x-hidden font-sans">
      
      {/* Immersive Portrait Background Video Loop */}
      <div className="absolute inset-0 z-0 h-[100dvh] w-full overflow-hidden pointer-events-none select-none">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3E2DXo9TkRfQMuBN1waujBOC2eq/hf_20260525_175741_b6b331a7-cc4f-405d-9abd-43ca3d8ba27b.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-65"
        />
        {/* Transition black gradient only in the bottom of the video */}
        <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* 1. Sleek Navigation Header */}
      <Header 
        onOpenSandbox={() => {
          setActiveEditorField("slogan");
          setSandboxOpen(true);
        }} 
        onOpenContact={() => {
          const el = document.getElementById("contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* 2. Primary Three-pane Hero Grid */}
      <main className="relative flex-grow w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-20">
        
        {/* ================= LEFT COLUMN: Core Content & CTA ================= */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-6 lg:gap-8 relative z-30">
          
          {/* Subtitle / Category Tag (Dynamic Sandbox-supported field!) */}
          <div className="flex items-center gap-2 group">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs font-mono font-semibold tracking-wide text-orange-500 flex items-center gap-1 cursor-pointer"
              onClick={() => {
                setActiveEditorField("tag");
                setSandboxOpen(true);
              }}
              title="Click to edit tag copy"
            >
              {tag}
              <span className="opacity-0 group-hover:opacity-100 ml-1.5 p-0.5 rounded bg-neutral-900 border border-neutral-800 text-[9px] text-neutral-350 font-sans transition-opacity shadow-sm">
                Edit Label (17)
              </span>
            </motion.span>
          </div>

          {/* Heading - "We start from zero, delivering only what matters." */}
          <div className="relative group w-full">
            <h2 
              onClick={() => {
                setActiveEditorField("slogan");
                setSandboxOpen(true);
              }}
              title="Click to edit slogan copy"
              className="text-[38px] sm:text-[46px] md:text-[52px] xl:text-[60px] font-sans font-extrabold leading-[1.05] tracking-tighter text-white cursor-pointer select-text hover:text-neutral-200 transition-colors"
            >
              {slogan}
            </h2>
            <div className="absolute -top-6 right-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 pointer-events-none bg-neutral-900 border border-neutral-800 px-2 py-1 rounded text-[10px] text-neutral-400 font-mono shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Slogan Copied | {slogan.length} chars {characterMatch ? "✔" : ""}
            </div>
          </div>

          {/* Ratings badge and count metrics */}
          <div className="flex items-center gap-3 bg-neutral-900/60 border border-neutral-850/40 px-4 py-2 rounded-2xl shadow-sm">
            <div className="flex items-center gap-0.5" aria-label="5 Star rating badge">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-orange-500 text-orange-500" />
              ))}
            </div>
            <div className="w-px h-3 bg-neutral-800" />
            <span className="text-[11px] font-semibold text-neutral-400 font-sans tracking-wide">
              5000+ Customers
            </span>
          </div>

          {/* Slogan Capsule Control Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Chat With Us Pill Action */}
            <button
              id="cta-chat-button"
              onClick={() => setChatActive(true)}
              className="group pl-5 pr-2 py-2 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs transition-all duration-300 flex items-center gap-3.5 shadow-xl hover:shadow-orange-550/10 active:scale-95 cursor-pointer font-sans"
            >
              <span>Chat With Us</span>
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white transition-transform group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </div>
            </button>

            {/* Our Works Secondary Action */}
            <a
              href="#works"
              id="cta-works-button"
              className="px-6 py-3.5 rounded-full border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/40 text-neutral-300 hover:text-white font-semibold text-xs transition-all duration-300 active:scale-95 cursor-pointer backdrop-blur-sm"
            >
              Our Works
            </a>
          </div>
        </div>

        {/* ================= CENTER COLUMN: Immersive Portrait Silhouette ================= */}
        <div className="lg:col-span-5 h-[300px] sm:h-[400px] lg:h-full flex items-center justify-center relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-transparent via-orange-500/[0.01] to-transparent blur-3xl pointer-events-none" />
          
          {/* Glowing Visor Silhouette Profile Layer */}
          <SilhouetteHero />
        </div>
      </main>

      {/* 2.5 Creative Agency Product Showcase Grid Section */}
      <ProductSection />

      {/* 2.8 About Us Section */}
      <AboutSection />

      {/* 2.7 Premium Services Section */}
      <ServicesSection onContact={(subject) => {
        setContactSubject(subject);
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }} />

      {/* 2.9 Contact Us Section */}
      <ContactSection selectedSubject={contactSubject} />

      {/* 3. New Premium Wavy Footer with Custom Columns & Orange Accents */}
      <Footer />

      {/* ================= INTERACTIVE FLOATING SIDEBAR DRAWER: SANDBOX TOOL ================= */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
        
        <AnimatePresence>
          {sandboxOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
            >
              <CopySuite
                label={activeEditorField === "slogan" ? "Agency Main Slogan" : "Agency Category Tag"}
                originalText={activeEditorField === "slogan" ? ORIGINAL_SLOGAN : ORIGINAL_TAG}
                currentText={activeEditorField === "slogan" ? slogan : tag}
                onChange={activeEditorField === "slogan" ? setSlogan : setTag}
                isOpen={sandboxOpen}
                onClose={() => setSandboxOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ================= INTERACTIVE COMPONENT: GLASS DISCUSSION IN RIGHT BOTTOM ================= */}
      <GlassDiscussion
        isOpen={chatActive}
        onClose={() => setChatActive(false)}
        isAgencyOpen={isAgencyOpen}
      />
    </div>
  );
}
