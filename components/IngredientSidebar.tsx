"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Ingredient {
  name: string;
  amount: string;
  stepIds: number[];
  image: string;
}

interface IngredientSidebarProps {
  currentStep: number;
  ingredients: Ingredient[];
}

export default function IngredientSidebar({ currentStep, ingredients }: IngredientSidebarProps) {
  return (
    <aside className="sticky top-32 h-fit space-y-8 pr-12 border-r border-white/5">
      <h3 className="font-display text-3xl text-saffron mb-10 tracking-tight">
        The Ritual <br />
        <span className="text-sm font-sans uppercase tracking-[0.3em] text-foreground/40">Essential Elements</span>
      </h3>
      
      <div className="space-y-6">
        {ingredients.map((item, idx) => {
          const isActive = item.stepIds.includes(currentStep);
          
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0.3 }}
              animate={{ 
                opacity: isActive ? 1 : 0.3,
                x: isActive ? 10 : 0,
                color: isActive ? "#F4B41A" : "#FDFBF7"
              }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-between gap-4 group cursor-default"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest">{item.name}</span>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                        className="h-[1px] bg-saffron mt-1"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <span className={`font-display italic text-lg whitespace-nowrap ${isActive ? 'text-saffron' : 'text-foreground/40'}`}>
                {item.amount}
              </span>
            </motion.div>
          );
        })}
      </div>
      
      <div className="pt-12">
        <div className="p-4 rounded-2xl glass bg-cardamom/5 border-cardamom/20">
          <p className="text-xs font-sans text-cardamom uppercase tracking-widest leading-relaxed">
            Chef's Note: Ensure the saffron is freshly bloomed for maximum aromatic depth.
          </p>
        </div>
      </div>
    </aside>
  );
}
