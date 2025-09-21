'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { siteConfig } from '@/config/site'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-coal">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-coal/95 backdrop-blur-sm border-b border-brand-gold/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-gold rounded-full"></div>
              <span className="font-serif text-xl font-bold text-brand-cream">Heems Holdings</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-brand-cream hover:text-brand-gold transition-colors">The Firm</a>
              <a href="#strategies" className="text-brand-cream hover:text-brand-gold transition-colors">What We Do</a>
              <a href="#insights" className="text-brand-cream hover:text-brand-gold transition-colors">Insights</a>
              <a href="#contact" className="text-brand-cream hover:text-brand-gold transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO Section - Blackstone Style */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-navy via-brand-coal to-brand-green">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(198,161,91,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
        </div>
        
        <div className="relative z-10 text-center text-brand-cream px-6 max-w-5xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-brand-cream">
              Real Estate
            </h1>
            <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto text-brand-cream/90 leading-relaxed">
              We are a global leader in real estate investing. We seek to utilize our expertise and presence to generate attractive returns for our investors in any environment.
            </p>
            
            {/* Hero Stats - Blackstone Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
              <div className="text-center">
                <h3 className="text-sm uppercase tracking-wider text-brand-gold mb-2">Investor Capital Under Management</h3>
                <p className="text-4xl md:text-5xl font-bold text-brand-cream">$325B</p>
              </div>
              <div className="text-center">
                <h3 className="text-sm uppercase tracking-wider text-brand-gold mb-2">Value of Global Real Estate Portfolio</h3>
                <p className="text-4xl md:text-5xl font-bold text-brand-cream">$611B</p>
              </div>
            </div>
            
            <Button size="lg" variant="solid" color="gold">
              Explore Opportunities
            </Button>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO Section - Blackstone Style */}
      <section id="strategies" className="py-24 bg-brand-cream text-brand-coal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">WHAT WE DO</h2>
            <h3 className="text-2xl md:text-3xl font-medium max-w-4xl mx-auto leading-relaxed">
              We invest thematically in high-quality assets, focusing where we see outsized growth potential driven by global economic and demographic trends.
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <h4 className="text-xl font-bold mb-4 text-brand-navy">Conviction</h4>
              <p className="text-brand-coal/80 leading-relaxed">
                Our vast portfolio provides us with proprietary information across every major real estate asset class, allowing us to identify themes and invest capital with conviction.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h4 className="text-xl font-bold mb-4 text-brand-navy">Connectivity</h4>
              <p className="text-brand-coal/80 leading-relaxed">
                Our team operates as one globally integrated business, allowing us to identify opportunities through one investment review process.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <h4 className="text-xl font-bold mb-4 text-brand-navy">Scale</h4>
              <p className="text-brand-coal/80 leading-relaxed">
                The breadth of our portfolio gives us differentiated perspectives, while our significant capital base enables us to execute large transactions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR STRATEGIES Section - Blackstone Style */}
      <section className="py-24 bg-brand-coal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cream mb-8">OUR STRATEGIES</h2>
            <h3 className="text-2xl md:text-3xl font-medium text-brand-cream/90 max-w-4xl mx-auto leading-relaxed">
              We have invested successfully through all market cycles and across the entire risk spectrum.
            </h3>
            <p className="text-lg text-brand-cream/70 max-w-5xl mx-auto mt-6 leading-relaxed">
              Since we started investing in real estate in 1991, the growth of our business across both products and geographies has expanded our ability to provide practical and diverse solutions to our limited partners.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Opportunistic Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-brand-navy/20 border border-brand-gold/20 rounded-2xl p-8 hover:bg-brand-navy/30 transition-colors"
            >
              <h4 className="text-2xl font-bold text-brand-gold mb-6">Opportunistic</h4>
              <p className="text-brand-cream/80 leading-relaxed">
                Our opportunistic business seeks to acquire undermanaged, well-located assets across the world. We build businesses that are set up to manage the underlying properties and ultimately maximize their value by instituting best-in-class management.
              </p>
            </motion.div>

            {/* Core+ Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-brand-navy/20 border border-brand-gold/20 rounded-2xl p-8 hover:bg-brand-navy/30 transition-colors"
            >
              <h4 className="text-2xl font-bold text-brand-gold mb-6">Core+</h4>
              <p className="text-brand-cream/80 leading-relaxed">
                Our Core+ business features stabilized real estate with a long investment horizon and moderate leverage, where we can unlock additional value through focused asset management. We focus on logistics, residential, office, and retail assets in global gateway cities.
              </p>
            </motion.div>

            {/* Debt Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-brand-navy/20 border border-brand-gold/20 rounded-2xl p-8 hover:bg-brand-navy/30 transition-colors"
            >
              <h4 className="text-2xl font-bold text-brand-gold mb-6">Debt</h4>
              <p className="text-brand-cream/80 leading-relaxed">
                Our real estate debt business provides creative and comprehensive financing solutions across the capital structure and risk spectrum. We originate loans and invest in debt securities underpinned by high-quality real estate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP QUOTES Section - Blackstone Style */}
      <section className="py-24 bg-brand-navy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-brand-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full"></div>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-brand-cream mb-6 leading-relaxed">
                &ldquo;Our job is to see megatrends before they emerge and invest in the real estate assets that will benefit from the ways the world is changing.&rdquo;
              </blockquote>
              <cite className="text-brand-gold font-semibold">
                Nadhem Meghji<br />
                <span className="text-brand-cream/70 text-sm">Global Co-Head of Real Estate</span>
              </cite>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-brand-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full"></div>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-brand-cream mb-6 leading-relaxed">
                &ldquo;We are high-conviction, thematic investors. We outperform by concentrating our capital in our best ideas.&rdquo;
              </blockquote>
              <cite className="text-brand-gold font-semibold">
                Kathleen McCarthy<br />
                <span className="text-brand-cream/70 text-sm">Global Co-Head of Real Estate</span>
              </cite>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEWS & INSIGHTS Section - Blackstone Style */}
      <section id="insights" className="py-24 bg-brand-cream text-brand-coal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">News & Insights</h2>
            <p className="text-xl text-brand-coal/70 max-w-3xl mx-auto">Updates from Real Estate</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-brand-navy to-brand-green"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-navy">Evolving to Outperform</h3>
                <p className="text-brand-coal/70 leading-relaxed mb-4">
                  Global Co-Head of Real Estate discusses the asset types, geographies, and capital sources driving performance and growth across the industry.
                </p>
                <a href="#" className="text-brand-gold font-semibold hover:underline">Read More</a>
              </div>
            </motion.article>
            
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-brand-green to-brand-gold"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-navy">The Real Estate Recovery</h3>
                <p className="text-brand-coal/70 leading-relaxed mb-4">
                  Why we believe commercial real estate is on the path to recovery and the signs giving Heems Holdings confidence in the sector.
                </p>
                <a href="#" className="text-brand-gold font-semibold hover:underline">Watch Video</a>
              </div>
            </motion.article>
            
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-brand-gold to-brand-navy"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-navy">Market Opportunities</h3>
                <p className="text-brand-coal/70 leading-relaxed mb-4">
                  Reflecting on current market conditions and what&apos;s ahead for the real estate investment landscape in emerging markets.
                </p>
                <a href="#" className="text-brand-gold font-semibold hover:underline">Watch Video</a>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES Section - Blackstone Style */}
      <section className="py-24 bg-brand-coal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cream mb-8">CAREER OPPORTUNITIES</h2>
            <h3 className="text-2xl md:text-3xl font-medium text-brand-cream/90 max-w-4xl mx-auto leading-relaxed">
              Take the next step in your real estate career by exploring opportunities at Heems Holdings and our portfolio companies.
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <Button size="lg" variant="outline" color="gold">
                Careers at Heems Holdings Real Estate
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <Button size="lg" variant="outline" color="gold">
                Careers at Real Estate Portfolio Companies
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT Section */}
      <section id="contact" className="py-24 bg-brand-green">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cream mb-8">Get in Touch</h2>
            <p className="text-xl text-brand-cream/90 max-w-3xl mx-auto mb-12">
              Ready to explore premium real estate investment opportunities? Our dedicated team works directly with investors to provide tailored solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
              <Button size="lg" variant="solid" color="gold">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" color="navy">
                Download Investment Guide
              </Button>
            </div>
            
            <div className="text-brand-cream/80">
              <p className="mb-2">
                <strong>Email:</strong> <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-brand-gold transition-colors">{siteConfig.contactEmail}</a>
              </p>
              <p>
                <strong>Call:</strong> <a href={`tel:${siteConfig.contactPhone}`} className="hover:text-brand-gold transition-colors">{siteConfig.contactPhone}</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Blackstone Style */}
      <footer className="bg-brand-coal text-brand-cream py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full"></div>
                <span className="font-serif text-xl font-bold">Heems Holdings</span>
              </div>
              <p className="text-brand-cream/70 leading-relaxed">
                Global leader in real estate investing, focused on generating attractive returns through disciplined investment strategies.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-brand-gold">Quick Links</h4>
              <ul className="space-y-2 text-brand-cream/70">
                <li><a href="#" className="hover:text-brand-gold transition-colors">The Firm</a></li>
                <li><a href="#strategies" className="hover:text-brand-gold transition-colors">Our Strategies</a></li>
                <li><a href="#insights" className="hover:text-brand-gold transition-colors">Insights</a></li>
                <li><a href="#contact" className="hover:text-brand-gold transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-brand-gold">Investment Focus</h4>
              <ul className="space-y-2 text-brand-cream/70">
                <li>Opportunistic Real Estate</li>
                <li>Core+ Properties</li>
                <li>Real Estate Debt</li>
                <li>Global Markets</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-brand-gold">Get in Touch</h4>
              <div className="space-y-2 text-brand-cream/70">
                <p>Email: {siteConfig.contactEmail}</p>
                <p>Phone: {siteConfig.contactPhone}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-brand-gold/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-brand-cream/60 text-sm">
              <p>&copy; 2024 Heems Holdings LLC. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-brand-gold transition-colors">Legal</a>
                <a href="#" className="hover:text-brand-gold transition-colors">Privacy</a>
                <a href="#" className="hover:text-brand-gold transition-colors">Transparency</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}