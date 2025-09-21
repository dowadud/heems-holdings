import { motion } from 'framer-motion'
import { Button } from './Button'
import { siteConfig } from '@/config/site'

export function CTA() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-cream mb-6">
          Ready to Invest in Premium Real Estate?
        </h2>
        <p className="text-xl text-brand-cream/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join sophisticated investors who trust Heems Holdings for strategic real estate opportunities and exceptional returns.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            size="xl" 
            variant="solid" 
            color="gold"
            asChild
          >
            <a href={siteConfig.ctaPrimaryHref}>
              {siteConfig.ctaPrimaryText}
            </a>
          </Button>
          
          <Button 
            size="xl" 
            variant="outline" 
            color="cream"
            asChild
          >
            <a href={siteConfig.ctaSecondaryHref}>
              {siteConfig.ctaSecondaryText}
            </a>
          </Button>
        </div>
        
        <div className="text-brand-cream/70 space-y-2">
          <p>
            <strong>Email:</strong>{' '}
            <a 
              href={`mailto:${siteConfig.contactEmail}`} 
              className="text-brand-gold hover:text-brand-gold/80 transition-colors"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
          <p>
            <strong>Call:</strong>{' '}
            <a 
              href={`tel:${siteConfig.contactPhone}`}
              className="text-brand-gold hover:text-brand-gold/80 transition-colors"
            >
              {siteConfig.contactPhone}
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}