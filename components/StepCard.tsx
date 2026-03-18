"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface StepCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  isHandsFree: boolean;
}

export default function StepCard({ id, title, description, image, isHandsFree }: StepCardProps) {
  return (
    <section 
      id={`step-${id}`}
      className="min-h-[90vh] flex flex-col justify-center py-20 snap-center relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-10%" }}
        className="max-w-4xl"
      >
        <span className="font-display text-8xl md:text-[12rem] text-white/5 absolute -top-10 -left-10 select-none">
          {id}
        </span>
        
        <div className="relative z-10">
          <motion.h2 
            className={`font-display text-saffron mb-8 ${isHandsFree ? 'text-7xl leading-tight' : 'text-5xl md:text-6xl'}`}
          >
            {title}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.p 
              className={`font-sans text-foreground/80 leading-relaxed ${isHandsFree ? 'text-3xl' : 'text-lg md:text-xl'}`}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="relative aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-[filter] duration-700 border border-white/10"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
