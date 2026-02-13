'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const LETTER = [
  "I have rewritten this a thousand times.",
  "Maybe because no words feel big enough.",
  "Love isn't a straight line. It is a beautiful, messy collection of moments that fold into each other until they become a life.",
  "You are my favorite moment.",
  "The quiet mornings. The loud laughter. The peace of just existing in the same room.",
  "Thank you for being my witness to this life.",
  "Thank you for being my heart."
]

export default function Letter() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-20%" })
  const [activeLine, setActiveLine] = useState(-1)

  useEffect(() => {
    if (isInView) {
      // Stagger the lines appearing
      const interval = setInterval(() => {
        setActiveLine(prev => {
          const next = prev + 1
          if (next >= LETTER.length) {
            clearInterval(interval)
            return prev
          }
          return next
        })
      }, 2000) // Slow, deliberate pacing
      return () => clearInterval(interval)
    }
  }, [isInView])

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center py-24 px-6 bg-background">
      <div className="max-w-2xl w-full space-y-12">
        {LETTER.map((line, i) => (
          <TypingLine
            key={i}
            text={line}
            startTyping={i <= activeLine}
            delay={0}
          />
        ))}
      </div>
    </section>
  )
}

function TypingLine({ text, startTyping, delay }: { text: string, startTyping: boolean, delay: number }) {
  const [displayed, setDisplayed] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!startTyping) return

    let current = ""
    let index = 0

    const typeChar = () => {
      if (index >= text.length) {
        setIsComplete(true)
        return
      }

      // Randomize typing speed for "organic" feel
      const speed = 50 + Math.random() * 80

      setTimeout(() => {
        current += text[index]
        setDisplayed(current)
        index++
        typeChar()
      }, speed)
    }

    const timeout = setTimeout(typeChar, delay)
    return () => clearTimeout(timeout)
  }, [startTyping, text, delay])

  return (
    <div className="min-h-[2rem] md:min-h-[3rem]">
      <p className="font-serif text-2xl md:text-4xl text-foreground leading-tight">
        {displayed}
        {startTyping && !isComplete && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
          />
        )}
      </p>
    </div>
  )
}
