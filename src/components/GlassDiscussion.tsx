import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Heart, Flame, Sparkles, Check, Paperclip, Mail, ShieldCheck } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

interface GlassDiscussionProps {
  isOpen: boolean;
  onClose: () => void;
  isAgencyOpen: boolean;
}

const PRESETS = [
  {
    label: "✦ Zero-to-One Philosophy",
    prompt: "Tell me about your starting from zero philosophy."
  },
  {
    label: "✦ Design Style & Identity",
    prompt: "What is your main aesthetic style?"
  },
  {
    label: "✦ Work Timeline",
    prompt: "How fast do you execute products?"
  },
  {
    label: "✦ Direct Consultation",
    prompt: "Can I schedule a brief call?"
  }
];

export const GlassDiscussion: React.FC<GlassDiscussionProps> = ({
  isOpen,
  onClose,
  isAgencyOpen,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "bot",
      text: "Hi there! 👋\nMy name is Lexa. How can I assist you today?",
      timestamp: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => "sess-" + Math.random().toString(36).substring(2, 11));
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    // 1. Add User Message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    // 2. Trigger Typing animation
    setIsTyping(true);

    try {
      const webhookUrl = "http://localhost:5678/webhook/923b864d-0531-4613-921e-dd65ba925ff0/chat";
      
      const payload = {
        message: textToSend,
        chatInput: textToSend,
        sessionId: sessionId,
      };

      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Server returned status code: ${res.status}`);
      }

      let replyText = "";
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const responseData = await res.json();
        if (typeof responseData === "string") {
          replyText = responseData;
        } else if (Array.isArray(responseData)) {
          const first = responseData[0];
          if (first) {
            if (typeof first === "string") {
              replyText = first;
            } else if (first && typeof first === "object") {
              replyText = first.output || first.text || first.response || first.message || JSON.stringify(first);
            }
          } else {
            replyText = "Empty response array received from webhook.";
          }
        } else if (responseData && typeof responseData === "object") {
          replyText = responseData.output || responseData.text || responseData.response || responseData.message || responseData.msg || JSON.stringify(responseData);
        } else {
          replyText = JSON.stringify(responseData);
        }
      } else {
        replyText = await res.text();
      }

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: replyText || "Received empty output from the webhook.",
        timestamp: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);

    } catch (error: any) {
      console.warn("Could not connect to localhost chat webhook:", error);

      const botErrorMsg: Message = {
        id: `bot-err-${Date.now()}`,
        sender: "bot",
        text: "⚠️ Connection to the assistant server (http://localhost:5678) is offline. Please make sure n8n or your webhook service is started with permitted CORS headers.",
        timestamp: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botErrorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="glass-discussion-widget"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 210 }}
          className="fixed bottom-6 right-6 z-50 w-full max-w-[370px] xs:max-w-[400px] h-[520px] rounded-3xl overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.85)] flex flex-col pointer-events-auto bg-[#0a0a0af0] border border-neutral-800/85 backdrop-blur-2xl text-left"
        >
          {/* Subtle Orange Flare Ambient Backdrop */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-900 bg-neutral-950/40 relative">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-orange-500/15 border border-orange-500/20 flex items-center justify-center text-orange-500 shadow-md">
                  <Flame size={18} className="animate-pulse" />
                </div>
                {/* Real-time Online Indicator based on actual operational hours */}
                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-neutral-950 ${isAgencyOpen ? "bg-emerald-500" : "bg-rose-500"} animate-pulse`} />
              </div>
              <div>
                <h4 className="text-[13px] font-sans font-bold tracking-wide text-white flex items-center gap-1.5">
                  Fluxora Specialist
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-neutral-900 text-neutral-400 font-normal">
                    AI
                  </span>
                </h4>
                <p className="text-[10px] text-neutral-400 font-mono mt-0.5 flex items-center gap-1.5">
                  {isAgencyOpen ? "Directly Online" : "Away • Auto Concierge"}
                </p>
              </div>
            </div>

            <button
              id="close-chat-widget"
              onClick={onClose}
              className="p-1.5 rounded-lg border border-neutral-900 hover:border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:text-white transition-all cursor-pointer"
            >
              <X size={15} />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 font-sans text-xs scrollbar-thin select-text">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"} max-w-full`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl max-w-[88%] leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-white text-black font-medium rounded-tr-sm shadow-md"
                      : "bg-neutral-900/90 text-neutral-100 border border-neutral-850 rounded-tl-sm shadow-sm"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
                <span className="text-[9px] text-neutral-500 font-mono mt-1 px-1">
                  {msg.timestamp}
                </span>
              </motion.div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start">
                <div className="px-4 py-3 rounded-2xl bg-neutral-900/90 border border-neutral-850 rounded-tl-sm text-neutral-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Quick-reply chips */}
          <div className="px-4 pb-2 pt-1 flex flex-wrap gap-1.5 relative z-10 select-none">
            {PRESETS.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p.prompt)}
                className="text-[10px] bg-neutral-900 border border-neutral-850 hover:bg-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white px-2.5 py-1.5 rounded-full cursor-pointer transition-all duration-200"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Message Input Area */}
          <form onSubmit={handleFormSubmit} className="p-3 border-t border-neutral-900 bg-neutral-950/40 flex items-center gap-2 relative">
            <input
              id="chat-input-field"
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Query our starting formula..."
              className="flex-grow bg-[#0f0f0f] border border-neutral-850 focus:border-orange-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-orange-500/30 transition-all font-sans"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 bg-orange-600 hover:bg-orange-500 disabled:bg-neutral-900 disabled:text-neutral-600 text-white rounded-xl transition-all cursor-pointer flex items-center justify-center shrink-0"
            >
              <Send size={14} />
            </button>
          </form>

          {/* Dynamic Small Trust Footnote */}
          <div className="bg-neutral-950 px-4 py-2 border-t border-neutral-950 flex items-center gap-1.5 text-[9px] text-neutral-500 font-mono">
            <ShieldCheck size={11} className="text-orange-500" />
            <span>Encrypted zero-to-one design inquiry socket.</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
