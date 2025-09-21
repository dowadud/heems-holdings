import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'
import { motion } from 'framer-motion'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'solid' | 'outline' | 'ghost'
  color?: 'navy' | 'gold' | 'green' | 'cream'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  asChild?: boolean
  animated?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'solid',
  color = 'navy',
  size = 'md',
  asChild = false,
  animated = true,
  className,
  ...props
}, ref) => {
  const Component = asChild ? 'span' : 'button'
  
  const variantStyles = {
    solid: {
      navy: 'bg-brand-navy text-brand-cream hover:bg-brand-navy/90 shadow-lg hover:shadow-xl',
      gold: 'bg-brand-gold text-brand-coal hover:bg-brand-gold/90 shadow-lg hover:shadow-xl',
      green: 'bg-brand-green text-brand-cream hover:bg-brand-green/90 shadow-lg hover:shadow-xl',
      cream: 'bg-brand-cream text-brand-coal hover:bg-brand-cream/90 shadow-lg hover:shadow-xl',
    },
    outline: {
      navy: 'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-brand-cream',
      gold: 'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-coal',
      green: 'border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-cream',
      cream: 'border-2 border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-coal',
    },
    ghost: {
      navy: 'text-brand-navy hover:bg-brand-navy/10',
      gold: 'text-brand-gold hover:bg-brand-gold/10',
      green: 'text-brand-green hover:bg-brand-green/10',
      cream: 'text-brand-cream hover:bg-brand-cream/10',
    },
  }

  const sizeStyles = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-sm',
    lg: 'h-12 px-8 text-base',
    xl: 'h-14 px-10 text-lg',
  }

  const buttonElement = (
    <Component
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-coal disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group',
        variantStyles[variant][color],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )

  if (animated && !asChild) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {buttonElement}
      </motion.div>
    )
  }

  return buttonElement
})

Button.displayName = 'Button'