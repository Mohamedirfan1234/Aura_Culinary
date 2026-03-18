"use client";

import { motion } from "framer-motion";
import { Hand, MousePointer2 } from "lucide-react";

interface HandsFreeToggleProps {
  isActive: boolean;
  onToggle: () => void;
}

export default function HandsFreeToggle({ isActive, onToggle }: HandsFreeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-10 right-10 z-50 flex items-center gap-3 px-6 py-4 rounded-full glass transition-all duration-500 shadow-2xl ${
        isActive ? 'ring-4 ring-saffron/30 scale-110' : ''
      }`}
    >
      <div className={`p-2 rounded-full transition-colors ${isActive ? 'bg-saffron text-black' : 'bg-white/5 text-foreground'}`}>
        {isActive ? <Hand className="w-6 h-6" /> : <MousePointer2 className="w-6 h-6" />}
      </div>
      
      <div className="text-left">
        <p className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold opacity-60">Mode</p>
        <p className="font-display text-lg tracking-wide whitespace-nowrap">
          {isActive ? 'Hands-Free Active' : 'Precision Control'}
        </p>
      </div>
      
      {isActive && (
        <motion.div
          layoutId="glow"
          className="absolute inset-0 rounded-full blur-xl bg-saffron/20 -z-10"
        />
      )}
    </motion.button>
  );
}
