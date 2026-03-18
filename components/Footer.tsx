"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <h2 className="font-display text-3xl text-saffron mb-4">Aura Culinary</h2>
          <p className="font-sans text-foreground/40 leading-relaxed">
            A digital sanctuary for those who believe cooking is a form of poetry. Dedicated to the preservation of heritage through cinematic experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-20">
          <div>
            <h4 className="font-display text-xl mb-6">Explore</h4>
            <ul className="space-y-4 font-sans text-foreground/60">
              <li><Link href="/" className="hover:text-saffron transition-colors">Home</Link></li>
              <li><Link href="/recipe" className="hover:text-saffron transition-colors">The Recipe</Link></li>
              <li><Link href="/#legacy" className="hover:text-saffron transition-colors">Our Story</Link></li>
              <li><Link href="/#craft" className="hover:text-saffron transition-colors">Techniques</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-white/5 flex justify-between items-center font-sans text-[10px] uppercase tracking-widest text-foreground/20">
        <p>&copy; 2026 Aura Culinary. All Rights Reserved.</p>
        <p>Crafted for the Epicurean</p>
      </div>
    </footer>
  );
}
