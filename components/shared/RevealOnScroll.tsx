"use client";

import { motion, Variants } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function RevealOnScroll({ 
  children, 
  variants = fadeUp, 
  className 
}: { 
  children: React.ReactNode; 
  variants?: Variants; 
  className?: string;
}) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
