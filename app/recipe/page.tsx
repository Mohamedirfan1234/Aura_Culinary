"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import IngredientSidebar from "@/components/IngredientSidebar";
import StepCard from "@/components/StepCard";
import HandsFreeToggle from "@/components/HandsFreeToggle";

const INGREDIENTS = [
  { name: "Saffron Strands", amount: "1/2 tsp", stepIds: [1, 3], image: "/assets/saffron_infusion.png" },
  { name: "Semolina (Rava)", amount: "1 Cup", stepIds: [2, 4], image: "/assets/roasting_semolina.png" },
  { name: "Ghee", amount: "1/2 Cup", stepIds: [2, 4, 5], image: "/assets/roasting_semolina.png" },
  { name: "Sugar", amount: "1.5 Cups", stepIds: [4], image: "/assets/aromatic_milk.png" },
  { name: "Cardamom pods", amount: "4-5 pods", stepIds: [3, 4], image: "/assets/aromatic_milk.png" },
  { name: "Warm Milk", amount: "2.5 Cups", stepIds: [3, 4], image: "/assets/aromatic_milk.png" },
  { name: "Cashews & Raisins", amount: "Garnish", stepIds: [5], image: "/assets/hero_kesari.png" },
];

const STEPS = [
  {
    id: 1,
    title: "The Saffron Infusion",
    description: "Begin with the heart of the dish. Crush the saffron strands slightly with a mortar and pestle. Soak them in two tablespoons of warm milk for at least 20 minutes to extract the deep golden hue and floral aroma.",
    image: "/assets/saffron_infusion.png",
  },
  {
    id: 2,
    title: "Roasting the Semolina",
    description: "In a heavy-bottomed brass or steel pan, heat 2 tablespoons of ghee. Add the semolina and roast on low heat. Listen to the gentle sizzle as it turns from ivory to a soft golden tan. The kitchen should fill with a nutty, comforting fragrance.",
    image: "/assets/roasting_semolina.png",
  },
  {
    id: 3,
    title: "Aromatic Preparation",
    description: "Bring the remaining milk and water to a gentle simmer in a separate vessel. Whisk in the saffron milk and crushed cardamom. This golden liquid is the soul of your Rava Kesari—ensure it is steaming hot but not boiling vigorously.",
    image: "/assets/aromatic_milk.png",
  },
  {
    id: 4,
    title: "The Golden Alchemy",
    description: "This is the moment of precision. Gradually pour the hot saffron milk into the roasted semolina while whisking constantly to prevent lumps. Once the milk is absorbed, fold in the sugar and the remaining ghee. Watch as the mixture transforms into a shimmering, silky texture.",
    image: "/assets/hero_kesari.png",
  },
  {
    id: 5,
    title: "Final Flourish & Plating",
    description: "Fry the cashews and raisins in a teaspoon of ghee until the cashews are golden and raisins plump. Garnish your Rava Kesari generously. Serve warm in a shallow ceramic bowl, allowing the steam to carry the saffron scent to your guests.",
    image: "/assets/hero_kesari.png",
  }
];

export default function RecipePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isHandsFree, setIsHandsFree] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepId = parseInt(entry.target.id.replace("step-", ""));
          setCurrentStep(stepId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const steps = document.querySelectorAll("[id^='step-']");
    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  // Hands-Free Auto-Scroll logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHandsFree && currentStep < STEPS.length) {
      interval = setInterval(() => {
        const nextStep = document.getElementById(`step-${currentStep + 1}`);
        if (nextStep && containerRef.current) {
          containerRef.current.scrollTo({
            top: nextStep.offsetTop - 100,
            behavior: "smooth"
          });
        }
      }, 15000); // Scroll every 15 seconds
    }
    return () => clearInterval(interval);
  }, [isHandsFree, currentStep]);

  return (
    <main className="min-h-screen pt-32 px-4 md:px-12 bg-background selection:bg-saffron selection:text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-20">
        
        {/* Sticky Left Column: Ingredients */}
        <div className="hidden lg:block relative">
          <IngredientSidebar currentStep={currentStep} ingredients={INGREDIENTS} />
        </div>

        {/* Scrollable Right Column: Steps */}
        <div 
          ref={containerRef}
          className="h-[calc(100vh-200px)] overflow-y-auto no-scrollbar snap-y-mandatory pr-4 pb-40"
        >
          <div className="max-w-3xl">
            {STEPS.map((step) => (
              <StepCard 
                key={step.id} 
                {...step} 
                isHandsFree={isHandsFree}
              />
            ))}
            
            {/* Final Completion Slide */}
            <section className="min-h-[60vh] flex flex-col items-center justify-center text-center snap-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="glass p-12 rounded-[3rem] border-saffron/20 max-w-xl relative overflow-hidden"
              >
                <div className="relative h-64 w-full mb-8 rounded-2xl overflow-hidden">
                  <Image 
                    src="/assets/hero_kesari.png"
                    alt="Final Masterpiece"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-5xl mb-6 text-saffron">Bon Appétit</h3>
                <p className="font-sans text-foreground/60 mb-8 leading-relaxed">
                  You have successfully crafted a masterpiece. May every bite be a reminder of the gold in your kitchen.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="px-8 py-4 bg-saffron text-black rounded-full font-display text-xl"
                >
                  Return to Top
                </motion.button>
              </motion.div>
            </section>
          </div>
        </div>
      </div>

      <HandsFreeToggle 
        isActive={isHandsFree} 
        onToggle={() => setIsHandsFree(!isHandsFree)} 
      />

      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-saffron filter blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cardamom filter blur-[150px] rounded-full" />
      </div>
    </main>
  );
}
