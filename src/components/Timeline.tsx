'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

const MILESTONES = [
  {
    date: "Day One",
    title: "The Shift",
    description: "I didn't know it then, but that was the last day I would ever have to face the world entirely on my own."
  },
  {
    date: "The First Meeting",
    title: "The Ease",
    description: "It felt less like auditioning for a stranger and more like finally being allowed to rest. It wasn't about impressing you; it was about recognizing you."
  },
  {
    date: "The Realization",
    title: "The Silence",
    description: "It wasn't lightning striking. It was the Tuesday you knew I was tired without me saying a word. You had already learned my silence."
  },
  {
    date: "Today",
    title: "The Certainty",
    description: "We are building a life out of small moments. The inside jokes. The shared coffee. The quiet certainty that I chose right."
  }
]

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="relative py-24 md:py-48 max-w-4xl mx-auto px-6">

      {/* The Thread of Fate - Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] h-full -translate-x-1/2 bg-muted">
        <motion.div
          style={{ height }}
          className="w-full bg-gradient-to-b from-primary via-rose-400 to-primary origin-top"
        />
      </div>

      <div className="space-y-32 md:space-y-64">
        {MILESTONES.map((milestone, i) => (
          <Milestone key={i} data={milestone} index={i} />
        ))}
      </div>

    </section>
  )
}

function Milestone({ data, index }: { data: typeof MILESTONES[0], index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "relative flex flex-col md:flex-row gap-8 md:gap-0 items-center",
        isEven ? "md:flex-row-reverse" : ""
      )}
    >
      {/* Content Side */}
      <div className={cn("flex-1 text-center md:text-left", isEven ? "md:text-right" : "")}>
        <span className="text-xs font-sans tracking-[0.2em] text-primary uppercase block mb-2">
          {data.date}
        </span>
        <h3 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
          {data.title}
        </h3>
        <p className="font-sans text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0 inline-block">
          {data.description}
        </p>
      </div>

      {/* Center Node */}
      <div className="relative z-10 w-4 h-4 rounded-full bg-background border-2 border-primary shrink-0 md:mx-12">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1.5, opacity: 0.5 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-primary rounded-full -z-10"
        />
      </div>

      {/* Empty Side for Balance */}
      <div className="flex-1 hidden md:block" />

    </motion.div>
  )
}
