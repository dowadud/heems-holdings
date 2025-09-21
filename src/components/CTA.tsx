'use client'

import { motion } from 'framer-motion'
import { Button } from './Button'
import { siteConfig } from '@/config/site'

export function CTA() {
  return (
    <section className="py-20 bg-brand-gold">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-brand-navy"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            {siteConfig.cta.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {siteConfig.cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              asChild
              size="lg" 
              variant="solid"
              color="gold"
            >
              <a href={siteConfig.ctaPrimaryHref}>
                {siteConfig.cta.primaryButton}
              </a>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              color="navy"
            >
              <a href={siteConfig.ctaSecondaryHref}>
                {siteConfig.cta.secondaryButton}
              </a>
            </Button>
          </div>
          
          <div className="text-sm text-brand-navy/70">
            <a 
              href={`mailto:${siteConfig.contactEmail}`}
              className="hover:text-brand-navy transition-colors"
            >
              Email: {siteConfig.contactEmail}
            </a>
            <span className="mx-2">•</span>
            <a 
              href={`tel:${siteConfig.contactPhone}`}
              className="hover:text-brand-navy transition-colors"
            >
              Call: {siteConfig.contactPhone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
