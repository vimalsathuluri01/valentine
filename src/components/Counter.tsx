'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// DATE WE MET: January 25, 2026 (Adjust as needed)
const START_DATE = new Date('2026-01-25T00:00:00')

export default function Counter() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = now.getTime() - START_DATE.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-32 px-6 bg-background border-y border-border/40">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-sans tracking-[0.3em] text-muted-foreground uppercase block mb-6">
            Since January 25, 2026
          </span>

          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-16">
            Every Second Counts
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>

          <p className="mt-16 font-serif italic text-xl md:text-2xl text-muted-foreground/80">
            "And I have loved you for every single one of them."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function TimeUnit({ value, label }: { value: number, label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <span className="font-sans font-light text-5xl md:text-7xl text-foreground tabular-nums tracking-tighter">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs font-sans tracking-widest text-muted-foreground mt-4 uppercase">
        {label}
      </span>
    </div>
  )
}
