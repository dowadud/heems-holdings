import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export interface SectionHeaderProps {
  overline?: string
  title: string
  description?: string | ReactNode
  className?: string
  centered?: boolean
  animated?: boolean
}

export function SectionHeader({ 
  overline, 
  title, 
  description, 
  className = '', 
  centered = true,
  animated = true 
}: SectionHeaderProps) {
  const content = (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {overline && (
        <div className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4">
          {overline}
        </div>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brand-cream mb-6">
        {title}
      </h2>
      {description && (
        <div className="text-xl md:text-2xl text-brand-cream/80 max-w-4xl mx-auto leading-relaxed">
          {description}
        </div>
      )}
    </div>
  )

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}