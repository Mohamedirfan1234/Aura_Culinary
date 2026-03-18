"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ScrollSection from "@/components/ScrollSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <main className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero_kesari.png"
            alt="Artisan Saffron Rava Kesari Background"
            fill
            className="object-cover brightness-[0.3] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ letterSpacing: "0.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.2em", opacity: 0.6 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="text-xs uppercase font-sans tracking-[0.5em] mb-6 block text-saffron"
            >
              A Masterclass in Texture
            </motion.span>
            
            <h1 className="font-display text-7xl md:text-9xl mb-8 leading-tight tracking-tight">
              Artisan Saffron <br />
              <span className="italic text-cardamom">Rava Kesari</span>
            </h1>
            
            <p className="font-sans text-xl md:text-2xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Indulge in a cinematic journey through the golden alchemy of roasted semolina, aromatic cardamom, and hand-plucked saffron.
            </p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-30">Scroll to Explore</p>
              <div className="w-[1px] h-12 bg-gradient-to-b from-saffron/50 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Saffron Legacy Section */}
      <ScrollSection id="legacy" className="px-4 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10">
            <Image 
              src="/assets/saffron_infusion.png"
              alt="Saffron Filaments"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="space-y-8">
            <span className="text-saffron font-display text-2xl italic">The Saffron Legacy</span>
            <h2 className="font-display text-5xl md:text-7xl leading-tight">Harvested from the <br/> <span className="text-foreground/40">Folds of Time</span></h2>
            <p className="font-sans text-xl text-foreground/60 leading-relaxed font-light">
              Saffron is not merely an ingredient; it is a story. Hand-plucked in the dawn light of autumn, each thread represents the pinnacle of patience. In our Rava Kesari, it acts as the master conductor, orchestrating a symphony of color and floral resonance.
            </p>
          </div>
        </div>
      </ScrollSection>

      {/* Culinary Craftsmanship Section */}
      <ScrollSection id="craft" className="px-4 md:px-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-24">
            <h2 className="font-display text-5xl md:text-8xl mb-8">Culinary <span className="italic text-cardamom">Craft</span></h2>
            <p className="font-sans text-foreground/40 tracking-[0.2em] uppercase text-xs">The Holy Trinity of Ingredients</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Ghee", desc: "Clarified gold, providing a nutty depth and silken mouthfeel.", img: "/assets/roasting_semolina.png" },
              { title: "Semolina", desc: "Fine-grained rava, roasted to a precise golden tan.", img: "/assets/roasting_semolina.png" },
              { title: "Cardamom", desc: "The cool, aromatic soul that balances the warmth of saffron.", img: "/assets/aromatic_milk.png" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <h3 className="font-display text-3xl text-saffron">{item.title}</h3>
                <p className="font-sans text-foreground/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Call to Action Section */}
      <ScrollSection className="justify-center text-center">
        <div className="max-w-4xl px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="space-y-12"
          >
            <h3 className="font-display text-6xl md:text-8xl leading-tight">Ready to Begin the <br/> <span className="italic text-saffron">Alchemy?</span></h3>
            <Link href="/recipe" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#F4B41A", color: "#000" }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-16 py-6 bg-transparent border border-saffron/50 text-saffron rounded-full overflow-hidden transition-all duration-500 flex items-center gap-4 mx-auto"
              >
                <span className="font-display text-2xl tracking-wider uppercase">Open the Masterclass</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </ScrollSection>

      <Footer />
    </div>
  );
}
