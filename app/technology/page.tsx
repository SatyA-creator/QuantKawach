'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Shield, 
  ArrowRight,
  Atom,
  Binary,
  Fingerprint,
  Shuffle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SectionWrapper, FadeIn } from '@/components/section-wrapper'

const algorithms = [
  {
    title: 'ML-DSA-65',
    subtitle: 'Digital Signatures',
    description: 'Module-Lattice Digital Signature Algorithm providing quantum-resistant authentication for all API requests. NIST standardized with proven security margins.',
    icon: Fingerprint
  },
  {
    title: 'Kyber-768',
    subtitle: 'Key Encapsulation',
    description: 'Lattice-based key encapsulation mechanism for secure session key establishment. Enables perfect forward secrecy with quantum resistance.',
    icon: Shuffle
  },
  {
    title: 'ChaCha20-Poly1305',
    subtitle: 'Symmetric Encryption',
    description: 'High-performance authenticated encryption for payload protection. Hardware-accelerated on modern processors for minimal latency.',
    icon: Binary
  },
  {
    title: 'QRNG',
    subtitle: 'Random Number Generation',
    description: 'Quantum Random Number Generation for true cryptographic entropy. Ensures unpredictable key material that cannot be reproduced.',
    icon: Atom
  }
]

const innovations = [
  {
    title: 'Hybrid Cryptography',
    description: 'Combines classical and post-quantum algorithms for defense-in-depth. If one algorithm is compromised, the other maintains security.'
  },
  {
    title: 'Zero-Knowledge Proofs',
    description: 'Enables transaction verification without exposing sensitive data. Supports privacy-preserving compliance auditing.'
  },
  {
    title: 'Threshold Signatures',
    description: 'Distributes signing authority across multiple parties. No single point of compromise for critical operations.'
  },
  {
    title: 'Agile Crypto Framework',
    description: 'Algorithm-agnostic design allows seamless upgrades as new standards emerge. Future-proof architecture.'
  }
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary/50 to-background pb-14 pt-24 sm:pb-16 sm:pt-28 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium mb-6"
            >
              <Atom className="w-4 h-4 text-accent" />
              Technology
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance"
            >
              Cryptographic Foundation
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Built on NIST-standardized post-quantum algorithms with proven security guarantees for protecting Indian banking infrastructure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Algorithm Selection */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Algorithm Selection
            </h2>
            <p className="text-lg text-muted-foreground">
              Carefully chosen cryptographic primitives optimized for banking workloads
            </p>
          </FadeIn>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {algorithms.map((algo, index) => (
              <motion.div
                key={algo.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-xl bg-card border border-border p-6 lg:p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                  <algo.icon className="w-full h-full" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent-foreground rounded-full mb-3">
                        {algo.subtitle}
                      </span>
                      <h3 className="font-mono font-bold text-2xl text-primary">
                        {algo.title}
                      </h3>
                    </div>
                    <div className="p-2 bg-secondary rounded-lg">
                      <algo.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {algo.description}
                  </p>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Key Innovations */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Key Technical Innovations
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Advanced cryptographic techniques tailored for financial services
            </p>
          </FadeIn>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                <h3 className="font-semibold text-lg mb-3">{innovation.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  {innovation.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Performance */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                Performance Optimized
              </h2>
              <p className="text-lg text-muted-foreground">
                Minimal overhead for real-time payment processing
              </p>
            </FadeIn>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { value: '<5ms', label: 'Encryption Latency' },
                { value: '100K+', label: 'TPS Capacity' },
                { value: '99.99%', label: 'Availability' },
                { value: '0', label: 'Infrastructure Changes' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl bg-secondary/50 p-5 text-center sm:p-6"
                >
                  <div className="font-mono text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                Learn About Security Architecture
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Discover how QuantKawach protects against current and future threats
              </p>
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-primary px-8 text-primary-foreground hover:bg-primary/90 sm:w-auto"
              >
                <Link href="/security">
                  View Security
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
