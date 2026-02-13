'use client'

import { useEffect, useRef, useState } from 'react'
import { Heart, Sparkles } from 'lucide-react'

// ============================================
// CUSTOMIZE HERE: Your personal reasons why you love them
// ============================================
const reasons = [
  {
    id: 1,
    reason: "Your laugh — it's not just beautiful, it's contagious. When you laugh, I can't help but smile.",
    emoji: "😊"
  },
  {
    id: 2,
    reason: "The way you care about everyone around you, often putting their needs before your own.",
    emoji: "💝"
  },
  {
    id: 3,
    reason: "Your incredible strength, even when you don't realize how strong you truly are.",
    emoji: "💪"
  },
  {
    id: 4,
    reason: "How you make the best cup of coffee, but more importantly, how you always make sure I have one.",
    emoji: "☕"
  },
  {
    id: 5,
    reason: "Your intelligence and the way your eyes light up when you talk about things you're passionate about.",
    emoji: "✨"
  },
  {
    id: 6,
    reason: "The way you look at me, like I'm the only person in the room — even when there's a whole crowd.",
    emoji: "👀"
  },
  {
    id: 7,
    reason: "Your patience with me, even when I'm being difficult or forgetful or just plain annoying.",
    emoji: "🙏"
  },
  {
    id: 8,
    reason: "Every little note you leave me, every small gesture that shows you're thinking of me.",
    emoji: "📝"
  },
  {
    id: 9,
    reason: "Your adventurous spirit and your willingness to try new things (even when you're scared).",
    emoji: "🗺️"
  },
  {
    id: 10,
    reason: "The way you remember the little things I say, even when I don't remember saying them.",
    emoji: "🧠"
  },
  {
    id: 11,
    reason: "Your beautiful soul — the kind that makes the world a better place just by existing in it.",
    emoji: "🌟"
  },
  {
    id: 12,
    reason: "How you always know exactly what to say when I'm down, and how your presence alone can heal.",
    emoji: "💫"
  },
  {
    id: 13,
    reason: "Your cute morning voice and sleepy eyes, before the world has fully woken you up.",
    emoji: "🌅"
  },
  {
    id: 14,
    reason: "The way you dance when you think no one's watching — and how beautiful you look doing it.",
    emoji: "💃"
  },
  {
    id: 15,
    reason: "Simply because you're you — uniquely, wonderfully, perfectly you.",
    emoji: "❤️"
  }
]

// Custom hook for intersection observer
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return { ref, isInView }
}

// Reason card component with stagger animation
function ReasonCard({ 
  reason, 
  index, 
  isInView 
}: { 
  reason: typeof reasons[0]
  index: number
  isInView: boolean 
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative bg-white rounded-2xl p-5 sm:p-6 shadow-md shadow-[#F8B4C4]/10 border border-[#F8E1E6] transition-all duration-500 cursor-default ${
        isHovered ? 'shadow-xl shadow-[#E8B4B8]/20 -translate-y-1' : ''
      }`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView 
          ? 'translateY(0)' 
          : 'translateY(30px)',
        transition: `all 0.6s ease-out ${index * 0.08}s`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Number badge */}
      <div 
        className={`absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center font-serif text-white font-semibold text-sm transition-all duration-300 ${
          isHovered 
            ? 'bg-gradient-to-br from-[#E8B4B8] to-[#C98B9D] scale-110' 
            : 'bg-gradient-to-br from-[#F8B4C4] to-[#E8B4B8]'
        }`}
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {reason.id}
      </div>

      {/* Content */}
      <div className="flex gap-3 sm:gap-4">
        <span className="text-2xl flex-shrink-0 mt-0.5">{reason.emoji}</span>
        <p className="font-sans text-[#4A3F44] leading-relaxed text-sm sm:text-base">
          {reason.reason}
        </p>
      </div>

      {/* Hover decoration */}
      <div 
        className={`absolute bottom-2 right-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Heart className="text-[#F8B4C4]" size={16} fill="#F8B4C4" />
      </div>
    </div>
  )
}

export default function Reasons() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8F0] to-[#FFF0F3] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8B4B8]/50 to-transparent" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#F8B4C4] rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-[#E8B4B8] rounded-full opacity-5 blur-3xl" />

      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div
          className="text-center mb-12 md:mb-16"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-[#D4A574]" size={24} />
          </div>
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-[#D4A574] mb-4">
            Just a Few of Them
          </p>
          <h2 
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#4A3F44] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Reasons I Love You
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="w-20 h-px bg-gradient-to-r from-transparent to-[#E8B4B8]" />
            <Heart className="text-[#F8B4C4]" size={18} fill="#F8B4C4" />
            <span className="w-20 h-px bg-gradient-to-l from-transparent to-[#E8B4B8]" />
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={reason.id}
              reason={reason}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Closing note */}
        <div
          className="text-center mt-12"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 1.5s'
          }}
        >
          <p className="font-serif italic text-lg text-[#C98B9D]" style={{ fontFamily: 'var(--font-serif)' }}>
            And a million more reasons I discover every day...
          </p>
        </div>
      </div>
    </section>
  )
}
