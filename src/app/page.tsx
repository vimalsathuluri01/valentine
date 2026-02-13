'use client'

import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import Words from '@/components/Words'
import Letter from '@/components/Letter'
import Counter from '@/components/Counter'
import Surprise from '@/components/Surprise'

export default function Home() {
  return (
    <main className="bg-background selection:bg-rose-200 selection:text-rose-900">
      <Hero />
      <Timeline />
      <Words />
      <Letter />
      <Counter />
      <Surprise />

      <footer className="py-12 text-center bg-background border-t border-muted/20">
        <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground/40">
          For Himalasya • {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  )
}
