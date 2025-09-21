'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export interface StatCardProps {
  label: string
  value: number
  suffix?: string
}

export function StatCard({ label, value, suffix = '' }: StatCardProps) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isInView])

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const duration = 2000 // 2 seconds
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center p-6 rounded-2xl bg-[#121417] ring-1 ring-white/5"
    >
      <div className="font-serif text-4xl md:text-5xl font-bold text-brand-gold mb-2 tabular-nums">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-brand-cream text-lg">
        {label}
      </div>
    </motion.div>
  )
}
