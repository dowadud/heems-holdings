import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'solid' | 'outline'
  color?: 'navy' | 'gold' | 'green'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'solid',
  color = 'navy',
  size = 'md',
  asChild = false,
  className,
  ...props
}, ref) => {
  const Component = asChild ? 'span' : 'button'
  
  const variantStyles = {
    solid: {
      navy: 'bg-brand-navy text-brand-cream hover:opacity-90',
      gold: 'bg-brand-gold text-brand-navy hover:opacity-90',
      green: 'bg-brand-green text-brand-cream hover:opacity-90',
    },
    outline: {
      navy: 'border border-brand-navy text-brand-navy hover:bg-brand-navy/10',
      gold: 'border border-brand-gold text-brand-gold hover:bg-brand-gold/10',
      green: 'border border-brand-green text-brand-green hover:bg-brand-green/10',
    },
  }

  const sizeStyles = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-6 text-lg',
  }

  return (
    <Component
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-coal disabled:opacity-50 disabled:pointer-events-none',
        variantStyles[variant][color],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
})

Button.displayName = 'Button'
