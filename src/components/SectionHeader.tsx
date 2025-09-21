'use client'

import { motion } from 'framer-motion'

export interface SectionHeaderProps {
  title: string
  overline?: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ 
  title, 
  overline, 
  description, 
  centered = true 
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''}`}
    >
      {overline && (
        <div className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-2">
          {overline}
        </div>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-cream mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-brand-cream/80 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
