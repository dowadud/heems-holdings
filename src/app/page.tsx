'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/Button'
import { StatCard } from '@/components/StatCard'
import { SectionHeader } from '@/components/SectionHeader'
import { CTA } from '@/components/CTA'
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
      {/* HERO Section - Full-bleed video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          {/* Fallback gradient if video fails */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-coal to-brand-green" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-brand-coal/60" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-brand-cream px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Hero Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block bg-brand-gold/20 backdrop-blur-sm text-brand-gold px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-brand-gold/30"
            >
              Heems Holdings LLC
            </motion.div>
            
            {/* Bold Headline */}
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-brand-cream leading-tight">
              Real Estate
              <span className="block text-brand-gold">Excellence</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto text-brand-cream/90 leading-relaxed">
              Disciplined investment strategy focused on premium properties and sustainable long-term growth across high-value markets worldwide.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button size="xl" variant="solid" color="gold">
                Explore Opportunities
              </Button>
              <Button size="xl" variant="outline" color="cream">
                Download Prospectus
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-brand-cream/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-brand-cream/50 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS Section - Animated Statistics */}
      <section className="py-24 bg-brand-coal relative">
        <div className="container mx-auto px-6">
          <SectionHeader
            overline="Performance"
            title="Proven Track Record"
            description="Our commitment to excellence is reflected in our portfolio performance and investor satisfaction."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StatCard value={325} suffix="B+" label="Assets Under Management" />
            <StatCard value={240} suffix="+" label="Properties in Portfolio" />
            <StatCard value={35} suffix="+" label="Years of Excellence" />
          </div>
        </div>
      </section>

      {/* STICKY PANELS Section - Parallax Sector Panels */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeader
            overline="Our Focus"
            title="Strategic Sectors"
            description="We concentrate our expertise across three core real estate sectors, each offering unique opportunities for growth and value creation."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Logistics & Industrial", 
                image: "/images/sectors/sector-1.jpg", 
                transform: y1,
                description: "E-commerce driven demand for modern distribution facilities and last-mile delivery centers." 
              },
              { 
                title: "Residential Development", 
                image: "/images/sectors/sector-2.jpg", 
                transform: y2,
                description: "Premium housing solutions in high-growth metropolitan markets with strong demographic trends." 
              },
              { 
                title: "Hospitality & Retail", 
                image: "/images/sectors/sector-3.jpg", 
                transform: y3,
                description: "Experiential properties positioned for the evolving consumer landscape and travel recovery." 
              }
            ].map((panel, index) => (
              <motion.div
                key={panel.title}
                style={{ y: panel.transform }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-coal/90 via-brand-coal/40 to-transparent" />
                <div className="absolute inset-0 bg-brand-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-cream mb-4">
                    {panel.title}
                  </h3>
                  <p className="text-brand-cream/80 leading-relaxed mb-6">
                    {panel.description}
                  </p>
                  <Button variant="outline" color="cream" size="sm">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BAND Section */}
      <section className="py-20 bg-brand-green relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,161,91,0.1)_1px,transparent_1px)] bg-[length:60px_60px]" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-brand-cream leading-relaxed">
              <span className="text-brand-gold font-bold text-6xl">&ldquo;</span>
              We believe in the transformative power of strategic real estate investment to create lasting value and meaningful impact across communities worldwide.
              <span className="text-brand-gold font-bold text-6xl">&rdquo;</span>
            </blockquote>
            <cite className="block mt-8 text-brand-gold text-xl font-semibold">
              — Heems Holdings Leadership Team
            </cite>
          </motion.div>
        </div>
      </section>

      {/* HORIZONTAL GALLERY Section */}
      <section className="py-24 bg-brand-coal">
        <div className="container mx-auto px-6">
          <SectionHeader
            overline="Portfolio Showcase"
            title="Featured Properties"
            description="A curated selection of our most prestigious real estate investments and developments."
            className="mb-16"
          />
          
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-track-brand-coal scrollbar-thumb-brand-gold/30 hover:scrollbar-thumb-brand-gold/50">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="flex-none w-80 h-64 relative rounded-2xl overflow-hidden ring-1 ring-brand-gold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold group cursor-pointer"
                  tabIndex={0}
                >
                  <img
                    src={`/images/gallery/gallery-${i}.jpg`}
                    alt={`Premium Property ${i}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-coal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-brand-cream font-semibold text-lg">Premium Development {i}</h4>
                    <p className="text-brand-cream/70 text-sm">Market Leading Location</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-navy">
        <div className="container mx-auto px-6">
          <SectionHeader
            overline="Common Questions"
            title="Frequently Asked Questions"
            description="Everything you need to know about investing with Heems Holdings."
            className="mb-16"
          />
          
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "What types of properties does Heems Holdings focus on?",
                answer: "We specialize in premium commercial and residential properties across logistics, hospitality, and residential sectors, with a focus on high-growth markets and sustainable returns. Our portfolio includes Class A office buildings, luxury residential developments, modern industrial facilities, and experiential retail properties."
              },
              {
                question: "What is the minimum investment amount?",
                answer: "Investment minimums vary by opportunity and investor type. For our flagship funds, the minimum investment is typically $1M for institutional investors and $250K for qualified individuals. We also offer structured products with lower minimums for accredited investors."
              },
              {
                question: "How does Heems Holdings select its investment opportunities?",
                answer: "Our disciplined approach includes comprehensive market analysis, rigorous due diligence on property fundamentals, evaluation of long-term growth potential, and assessment of ESG factors. We leverage our extensive network and proprietary research to identify value-creation opportunities."
              },
              {
                question: "What kind of returns can investors expect?",
                answer: "While past performance doesn&apos;t guarantee future results, our focus on premium properties in strategic locations has historically delivered competitive risk-adjusted returns. Our target returns vary by strategy, ranging from 8-12% for core properties to 15-20% for opportunistic investments."
              },
              {
                question: "How can I get started with Heems Holdings?",
                answer: "Contact our investor relations team to discuss your investment goals and learn about current opportunities. We&apos;ll provide detailed information about our investment process, fund structures, and help you determine the best approach for your portfolio."
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-brand-green overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-green/95 to-brand-green/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(198,161,91,0.15),transparent)] bg-[length:100px_100px]" />
        
        <div className="relative container mx-auto px-6">
          <CTA />
        </div>
      </section>
    </div>
  )
}

// FAQ Component with animations
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border border-brand-gold/20 rounded-2xl overflow-hidden backdrop-blur-sm"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 text-left bg-brand-navy/50 hover:bg-brand-navy/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-brand-cream text-xl pr-8">{question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-brand-gold text-3xl font-light flex-shrink-0"
          >
            +
          </motion.div>
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-8 py-6 bg-brand-navy/30 text-brand-cream/90 leading-relaxed text-lg">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  )
}