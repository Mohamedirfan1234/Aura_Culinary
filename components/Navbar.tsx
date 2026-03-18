"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import { ChefHat } from "lucide-react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScrollY.current = latest;
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 glass rounded-b-2xl mx-4 mt-4"
    >
      <Link href="/" className="flex items-center gap-3 group">
        <ChefHat className="w-8 h-8 text-saffron group-hover:scale-110 transition-transform" />
        <span className="font-display text-2xl tracking-wide">Aura Culinary</span>
      </Link>

      <div className="flex items-center gap-8 font-sans text-xs uppercase tracking-widest text-foreground/80">
        <Link href="/" className="hover:text-saffron transition-colors">Home</Link>
        <Link href="/#legacy" className="hover:text-saffron transition-colors">Story</Link>
        <Link href="/recipe" className="hover:text-saffron transition-colors">Recipe</Link>
        <Link href="/#craft" className="hover:text-saffron transition-colors">Techniques</Link>
        <div className="h-6 w-px bg-white/20" />
      </div>
    </motion.nav>
  );
}
