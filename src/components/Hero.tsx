'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const PARTNER_NAME = "Himalasya"

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-background">

      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-rose-100/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-orange-50/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      {/* Header / Meta */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between items-start z-10"
      >
        <span className="text-xs md:text-sm font-sans tracking-widest uppercase text-muted-foreground">
          Made with Love from Bobby
        </span>
        <span className="text-xs md:text-sm font-sans tracking-widest uppercase text-muted-foreground">
          {new Date().getFullYear()}
        </span>
      </motion.div>

      {/* Massive Typography - The Core */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
        <div className="relative w-full max-w-[90vw] md:max-w-[80vw]">
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-12 left-0 md:-left-8 text-xs md:text-sm font-sans tracking-[0.3em] text-primary uppercase"
          >
            It Was Always You
          </motion.div>

          <h1 className="font-serif text-[18vw] leading-[0.8] tracking-tighter text-foreground mix-blend-multiply">
            <motion.span
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="block"
            >
              {PARTNER_NAME}
            </motion.span>
          </h1>

          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
            className="h-[2px] bg-primary mt-4 md:mt-8"
          />
        </div>
      </div>

      {/* Footer / Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex justify-between items-end z-10"
      >
        <div className="hidden md:block text-xs font-sans text-muted-foreground max-w-[200px]">
          This is not a website. <br />
          This is a memory.
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Begin</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="text-primary w-6 h-6" strokeWidth={1.5} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
