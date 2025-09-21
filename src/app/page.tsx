'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { StatCard } from '@/components/StatCard'
import { CTA } from '@/components/CTA'
import { Button } from '@/components/Button'
import { siteConfig } from '@/config/site'
import { useRef, useState } from 'react'

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  // Parallax transforms for sticky panels
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -75])

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-coal">
      {/* HERO Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Badge */}
        <div className="absolute top-8 left-8 z-20 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-semibold">
          Heems Holdings
        </div>
        
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/60 via-brand-coal/40 to-brand-green/60" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center text-brand-cream px-6 max-w-4xl"
        >
          {/* TODO(Nadhir): replace hero copy */}
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 text-brand-cream">
            Real Estate
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-brand-cream/90 leading-relaxed">
            Disciplined investment strategy focused on premium properties and sustainable long-term growth across high-value markets.
          </p>
          <Button size="lg" variant="solid" color="gold">
            Explore Opportunities
          </Button>
        </motion.div>
      </section>

      {/* STATS Section */}
      <section className="py-24 bg-brand-coal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <StatCard value={356} suffix="B+" label="Assets Under Management" />
            <StatCard value={240} suffix="+" label="Properties Managed" />
            <StatCard value={35} suffix="+" label="Years Experience" />
          </motion.div>
        </div>
      </section>

      {/* STICKY PANELS Section */}
      <section className="py-24 bg-brand-coal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4">
              Our Expertise
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-cream mb-6">
              Specialized Sectors
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* TODO(Nadhir): update sector titles and links */}
            {[
              { title: "Logistics", image: "/images/panel-1.jpg", transform: y1 },
              { title: "Residential", image: "/images/panel-2.jpg", transform: y2 },
              { title: "Hospitality", image: "/images/panel-3.jpg", transform: y3 }
            ].map((panel, index) => (
              <motion.div
                key={panel.title}
                style={{ y: panel.transform }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-coal/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-serif text-2xl font-bold text-brand-cream">
                    {panel.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BAND Section */}
      <section className="py-16 bg-brand-navy">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <blockquote className="font-serif text-2xl md:text-3xl font-light text-brand-cream leading-relaxed">
              <span className="text-brand-gold font-bold">—</span>
              {" "}We believe in the power of strategic real estate investment to create lasting value and meaningful impact across communities.
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* HORIZONTAL GALLERY Section */}
      <section className="py-24 bg-brand-coal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4">
              Portfolio Showcase
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-cream">
              Featured Properties
            </h2>
          </motion.div>
          
          <div className="sticky top-0">
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-track-brand-coal scrollbar-thumb-brand-gold/30">
              {/* TODO(Nadhir): swap gallery images */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex-none w-80 h-64 relative rounded-2xl overflow-hidden ring-1 ring-brand-gold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold group cursor-pointer"
                  tabIndex={0}
                >
                  <img
                    src={`/images/gallery-${i}.jpg`}
                    alt={`Property ${i}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-coal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-navy">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4">
              Common Questions
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-cream">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What types of properties does Heems Holdings focus on?",
                answer: "We specialize in premium commercial and residential properties across logistics, hospitality, and residential sectors, with a focus on high-growth markets and sustainable returns."
              },
              {
                question: "What is the minimum investment amount?",
                answer: "Investment minimums vary by opportunity and investor type. We work with both institutional and accredited individual investors to find suitable investment levels."
              },
              {
                question: "How does Heems Holdings select its investment opportunities?",
                answer: "Our disciplined approach includes comprehensive market analysis, due diligence on property fundamentals, and evaluation of long-term growth potential in each target market."
              },
              {
                question: "What kind of returns can investors expect?",
                answer: "While past performance doesn't guarantee future results, our focus on premium properties in strategic locations has historically delivered competitive risk-adjusted returns for our investors."
              },
              {
                question: "How can I get started with Heems Holdings?",
                answer: "Contact our investment team to discuss your goals and learn about current opportunities. We'll provide detailed information about our investment process and available options."
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Texture */}
      <section className="relative py-24 bg-brand-green overflow-hidden">
        {/* Texture Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-green/95 to-brand-green/90" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,rgba(198,161,91,0.1),transparent)] bg-[length:100px_100px]" />
        
        <div className="relative">
          <CTA />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-coal text-brand-cream py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-brand-gold">Heems Holdings LLC</h3>
              <p className="text-brand-cream/80 leading-relaxed">
                Premium real estate investment and development company specializing in strategic opportunities across high-growth markets.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-brand-gold">Contact Information</h4>
              <div className="space-y-2 text-brand-cream/80">
                <p>Email: {siteConfig.contactEmail}</p>
                <p>Phone: {siteConfig.contactPhone}</p>
                <p>Address: {siteConfig.contact.address}</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-brand-gold">Investment Services</h4>
              <ul className="text-brand-cream/80 space-y-2">
                <li>Commercial Real Estate</li>
                <li>Residential Development</li>
                <li>Property Management</li>
                <li>Asset Optimization</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-brand-gold/20 mt-12 pt-8 text-center text-brand-cream/60">
            <p>&copy; 2024 Heems Holdings LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// FAQ Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border border-brand-gold/20 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-brand-navy hover:bg-brand-navy/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-brand-cream text-lg">{question}</h3>
          <div className={`text-brand-gold text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
            +
          </div>
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-brand-navy/50 text-brand-cream/80 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  )
}