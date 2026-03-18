"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function ScrollSection({ children, className = "", id }: ScrollSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, margin: "-20%" }}
      className={`min-h-screen py-32 flex items-center relative overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
}
