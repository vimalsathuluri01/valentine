'use client'

import { useEffect, useRef, useState } from 'react'
import { Heart } from 'lucide-react'

// ============================================
// CUSTOMIZE HERE: Words that describe your loved one
// ============================================
const describingWords = [
  "KIND",
  "BRAVE",
  "BEAUTIFUL",
  "MINE",
  "SMART",
  "FUNNY",
  "CARING",
  "INSPIRING",
  "GORGEOUS",
  "PERFECT"
]

export default function WordsAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleWords, setVisibleWords] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    )

    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  // Stagger word reveal
  useEffect(() => {
    if (!isVisible) return

    const revealWord = (index: number) => {
      setTimeout(() => {
        setVisibleWords(prev => new Set([...prev, index]))
      }, index * 300)
    }

    describingWords.forEach((_, index) => {
      revealWord(index)
    })
  }, [isVisible])

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF0F3] to-[#FFF8F0] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8B4B8]/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F8B4C4] rounded-full opacity-5 blur-3xl" />

      <div ref={containerRef} className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className="text-center mb-12 md:mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-[#D4A574] mb-4">
            In A Word
          </p>
          <h2 
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#4A3F44] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            You Are
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="w-20 h-px bg-gradient-to-r from-transparent to-[#E8B4B8]" />
            <Heart className="text-[#F8B4C4]" size={18} fill="#F8B4C4" />
            <span className="w-20 h-px bg-gradient-to-l from-transparent to-[#E8B4B8]" />
          </div>
        </div>

        {/* Words Display */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {describingWords.map((word, index) => (
            <span
              key={word}
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold transition-all duration-700 ease-out cursor-default select-none"
              style={{
                fontFamily: 'var(--font-serif)',
                opacity: visibleWords.has(index) ? 1 : 0,
                transform: visibleWords.has(index) 
                  ? 'translateY(0) scale(1)' 
                  : 'translateY(20px) scale(0.9)',
                color: visibleWords.has(index) 
                  ? index % 3 === 0 
                    ? '#C98B9D' 
                    : index % 3 === 1 
                      ? '#D4A574' 
                      : '#4A3F44'
                  : '#F8E1E6',
                transitionDelay: `${index * 0.05}s`
              }}
            >
              {index < describingWords.length - 1 ? `${word} •` : word}
            </span>
          ))}
        </div>

        {/* Final message */}
        <div
          className="text-center mt-12"
          style={{
            opacity: visibleWords.size === describingWords.length ? 1 : 0,
            transform: visibleWords.size === describingWords.length 
              ? 'translateY(0)' 
              : 'translateY(20px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <p 
            className="font-serif text-xl sm:text-2xl text-[#C98B9D] italic"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            ...and so much more
          </p>
        </div>
      </div>
    </section>
  )
}
