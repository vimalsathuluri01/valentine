'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Gift, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Surprise() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)

    // Fire confetti
    const duration = 3 * 1000
    const end = Date.now() + duration

    const colors = ['#cf4d6f', '#eaddcf', '#ffffff']

      ; (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        })
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      })()
  }

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-background px-6 py-24">
      <div className="relative text-center max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="gift"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0, rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-8"
            >
              <p className="font-serif text-2xl text-muted-foreground italic">
                I have one more thing to ask you...
              </p>

              <button
                onClick={handleOpen}
                className="group relative flex items-center justify-center w-32 h-32 rounded-full bg-primary text-primary-foreground shadow-2xl hover:scale-110 transition-transform duration-300"
              >
                <Gift className="w-12 h-12 animate-pulse-slow" strokeWidth={1.5} />
                <div className="absolute inset-0 rounded-full border border-primary/50 animate-ping opacity-20" />
              </button>

              <span className="text-xs font-sans tracking-widest text-muted-foreground uppercase opacity-60">
                Click to Open
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.5, duration: 1 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="relative">
                <Heart className="w-24 h-24 text-primary fill-primary animate-pulse-slow" />
                <div className="absolute top-0 left-0 w-full h-full bg-primary/20 blur-3xl animate-pulse" />
              </div>

              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Will you be my <br />
                <span className="text-primary italic">Valentine?</span>
              </h1>

              <p className="font-sans text-muted-foreground tracking-wide max-w-md mx-auto leading-relaxed">
                I promise to make every day feel like this one. <br />
                Today, tomorrow, and forever.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="mt-12"
              >
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-primary/60 border-b border-primary/20 pb-2">
                  Say Yes
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
