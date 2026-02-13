'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const WORDS = [
    { text: "KIND", color: "text-rose-400" },
    { text: "BRAVE", color: "text-orange-300" },
    { text: "BEAUTIFUL", color: "text-primary" },
    { text: "MINE", color: "text-emerald-700/60" },
    { text: "SMART", color: "text-sky-400" },
    { text: "FUNNY", color: "text-amber-400" },
    { text: "CARING", color: "text-rose-300" },
    { text: "INSPIRING", color: "text-violet-400" },
    { text: "GORGEOUS", color: "text-primary" },
    { text: "PERFECT", color: "text-foreground font-black" },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        }
    },
}

export default function Words() {
    return (
        <section className="min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-background relative my-24 py-12">
            {/* Background Noise/Blur for chaotic feel */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] animate-pulse-slow pointer-events-none" />

            <div className="relative z-10 w-full max-w-5xl px-6 text-center">
                <p className="font-serif text-sm md:text-md tracking-[0.2em] text-muted-foreground/60 mb-6 uppercase">
                    In a word
                </p>

                <h2 className="font-serif text-5xl md:text-8xl text-foreground mb-12">
                    You Are
                </h2>

                <div className="flex justify-center mb-16">
                    <span className="text-2xl text-rose-300">♥</span>
                </div>

                <motion.div
                    className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-x-8 md:gap-y-6 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {WORDS.map((word, i) => (
                        <motion.div
                            key={word.text}
                            className="flex items-center gap-x-4 md:gap-x-8"
                            variants={itemVariants}
                        >
                            <span className={cn(
                                "font-serif text-3xl md:text-6xl font-bold tracking-tight",
                                word.color
                            )}>
                                {word.text}
                            </span>
                            {/* Separator dot, but not after the last item */}
                            {i < WORDS.length - 1 && (
                                <span className="text-muted-foreground/30 text-2xl md:text-4xl">•</span>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 font-serif text-xl md:text-3xl text-muted-foreground/60 italic"
                >
                    ...and so much more
                </motion.p>
            </div>
        </section>
    )
}
