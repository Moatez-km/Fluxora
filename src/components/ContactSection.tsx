import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MessageSquare, MapPin, Check } from "lucide-react";

interface ContactSectionProps {
  selectedSubject?: string;
}

export function ContactSection({ selectedSubject }: ContactSectionProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Website Development",
    message: "",
  });

  useEffect(() => {
    if (selectedSubject) {
      setFormState((prev) => ({
        ...prev,
        subject: selectedSubject,
      }));
    }
  }, [selectedSubject]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Simulate API dispatch
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: "",
        email: "",
        subject: "Website Development",
        message: "",
      });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 bg-black border-t border-neutral-900/60 overflow-hidden scroll-mt-28"
    >
      {/* Dynamic ambient background glow */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/[0.03] rounded-full blur-[160px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Two-column Grid identical to the reference design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: SLEEK CONTACT FORM BLOCK ================= */}
          <div className="lg:col-span-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-neutral-950/60 border border-neutral-900 rounded-[24px] p-8 sm:p-10 shadow-3xl backdrop-blur-md relative overflow-hidden"
            >
              {/* Highlight bar at top */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
              
              <div className="mb-8">
                <span className="text-xs font-mono font-bold tracking-[0.18em] text-orange-500 uppercase">
                  CONTACT US
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                  Get In Touch
                </h3>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500">
                      <Check size={28} strokeWidth={2.5} />
                    </div>
                    <h4 className="font-extrabold text-white text-lg sm:text-xl">
                      Message Dispatched!
                    </h4>
                    <p className="text-sm text-neutral-400 max-w-xs leading-normal">
                      Thank you for connecting. Our specialized team will reach back with customized proposals for your plans.
                    </p>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="flex flex-col gap-5">
                    
                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-neutral-400 font-sans tracking-wide">
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your Name..."
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-neutral-900/40 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 font-sans"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-neutral-400 font-sans tracking-wide">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="example@yourmail.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-neutral-900/40 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 font-sans"
                      />
                    </div>

                    {/* Subject Select Box (As requested for the three plans) */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-neutral-400 font-sans tracking-wide">
                        Subject / Interested Plan
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 font-sans appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' class='lucide lucide-chevron-down' viewBox='0 0 24 24'><polyline points='6 9 12 15 18 9'/></svg>")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 16px center',
                          backgroundSize: '12px'
                        }}
                      >
                        <option value="Website Development" className="bg-neutral-950 text-white">Website Development</option>
                        <option value="Digital QR Menus" className="bg-neutral-950 text-white">Digital QR Menus</option>
                        <option value="QR Business Cards" className="bg-neutral-950 text-white">QR Business Cards</option>
                      </select>
                    </div>

                    {/* Message Area */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-neutral-400 font-sans tracking-wide">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Type Here..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-neutral-900/40 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 font-sans resize-none"
                      />
                    </div>

                    {/* Submit Button styled like reference */}
                    <button
                      type="submit"
                      className="w-full mt-2 py-4 px-6 rounded-full border border-orange-500 text-orange-400 font-bold text-xs uppercase tracking-wider hover:bg-orange-500 hover:text-white transition-all duration-300 md:active:scale-[0.99] cursor-pointer text-center"
                    >
                      Send Now
                    </button>

                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: INFO STACK & ACCURATE GOOGLE MAPS ================= */}
          <div className="lg:col-span-6 w-full flex flex-col gap-10">
            
            {/* Header / Intro text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4 text-left"
            >
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-sans select-text">
                We design and engineer bespoke software components and smart offline QR linkages for modern digital presence. Reach out to coordinate with our regional integration engineers.
              </p>
            </motion.div>

            {/* Grid of Contact Elements with elegant white-outline icons and orange tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Phone info card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-neutral-950/40 border border-neutral-900 hover:border-orange-500/10 hover:bg-neutral-950/60 transition-all duration-300 group">
                <div className="w-11 h-11 shrink-0 rounded-full border border-neutral-800 group-hover:border-orange-500/20 flex items-center justify-center text-white group-hover:text-orange-500 transition-colors duration-300 bg-neutral-950">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-sans font-bold text-neutral-500 uppercase tracking-widest leading-none mb-1">
                    Phone Number
                  </h4>
                  <a href="tel:+62824032567" className="text-sm sm:text-base font-bold text-white hover:text-orange-400 transition-colors">
                    +6282 4032 567
                  </a>
                </div>
              </div>

              {/* Email address info card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-neutral-950/40 border border-neutral-900 hover:border-orange-500/10 hover:bg-neutral-950/60 transition-all duration-300 group">
                <div className="w-11 h-11 shrink-0 rounded-full border border-neutral-800 group-hover:border-orange-500/20 flex items-center justify-center text-white group-hover:text-orange-500 transition-colors duration-300 bg-neutral-950">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-sans font-bold text-neutral-500 uppercase tracking-widest leading-none mb-1">
                    Email Address
                  </h4>
                  <a href="mailto:Example@Email.Com" className="text-sm sm:text-base font-bold text-white hover:text-orange-400 transition-colors">
                    Example@Email.Com
                  </a>
                </div>
              </div>

              {/* Whatsapp info card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-neutral-950/40 border border-neutral-900 hover:border-orange-500/10 hover:bg-neutral-950/60 transition-all duration-300 group">
                <div className="w-11 h-11 shrink-0 rounded-full border border-neutral-800 group-hover:border-orange-500/20 flex items-center justify-center text-white group-hover:text-orange-500 transition-colors duration-300 bg-neutral-950">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-sans font-bold text-neutral-500 uppercase tracking-widest leading-none mb-1">
                    Whatsapp
                  </h4>
                  <a href="https://wa.me/0822457253" target="_blank" rel="noreferrer" className="text-sm sm:text-base font-bold text-white hover:text-orange-400 transition-colors">
                    082-245-7253
                  </a>
                </div>
              </div>

              {/* Our Office info card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-neutral-950/40 border border-neutral-900 hover:border-orange-500/10 hover:bg-neutral-950/60 transition-all duration-300 group">
                <div className="w-11 h-11 shrink-0 rounded-full border border-neutral-800 group-hover:border-orange-500/20 flex items-center justify-center text-white group-hover:text-orange-500 transition-colors duration-300 bg-neutral-950">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-sans font-bold text-neutral-500 uppercase tracking-widest leading-none mb-1">
                    Our Office
                  </h4>
                  <p className="text-sm sm:text-base font-bold text-white leading-tight">
                    Juri-Gagarin-Ring 22, 99084 Erfurt
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded interactive Google Map accurate to the Juri-Gagarin-Ring 22, Erfurt coordinates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-64 sm:h-72 rounded-[24px] overflow-hidden border border-neutral-900/80 shadow-2xl relative"
            >
              <iframe
                title="Office Location Map"
                src="https://maps.google.com/maps?q=Juri-Gagarin-Ring%2022,%20Erfurt,%20Germany&t=m&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "brightness(0.7) contrast(1.2) invert(0.9) hue-rotate(180deg)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
