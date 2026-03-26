'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Shield, 
  ArrowRight,
  Smartphone,
  Building2,
  Banknote,
  Globe,
  Check,
  Clock,
  Users,
  Lock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SectionWrapper, FadeIn } from '@/components/section-wrapper'

const rbiBenefits = [
  {
    title: 'UPI Security',
    icon: Smartphone,
    description: 'Quantum-resistant protection for 10+ billion monthly UPI transactions across all participating banks.',
    benefits: [
      'End-to-end encryption for P2P transfers',
      'Secure merchant payment flows',
      'Protected QR code transactions'
    ]
  },
  {
    title: 'RTGS Protection',
    icon: Building2,
    description: 'Real-Time Gross Settlement system protection for high-value interbank transfers.',
    benefits: [
      'Immediate settlement security',
      'High-value transaction integrity',
      'Interbank communication protection'
    ]
  },
  {
    title: 'NEFT Security',
    icon: Banknote,
    description: 'National Electronic Funds Transfer security for batch settlement operations.',
    benefits: [
      'Batch processing protection',
      'Settlement file encryption',
      'Message authentication'
    ]
  },
  {
    title: 'API Security',
    icon: Globe,
    description: 'Comprehensive protection for all RBI-regulated banking APIs and interfaces.',
    benefits: [
      'Open Banking API protection',
      'Account aggregator security',
      'Third-party integration safety'
    ]
  }
]

const keyBenefits = [
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Meet evolving RBI cybersecurity guidelines with quantum-ready infrastructure'
  },
  {
    icon: Clock,
    title: 'Future-Proof Security',
    description: 'Protect against both current and future quantum computing threats'
  },
  {
    icon: Users,
    title: 'Customer Trust',
    description: 'Demonstrate commitment to highest security standards for customer data'
  },
  {
    icon: Lock,
    title: 'Data Sovereignty',
    description: 'Ensure sensitive financial data remains protected within Indian jurisdiction'
  }
]

export default function UseCasesPage() {
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
              <Building2 className="w-4 h-4 text-accent" />
              Use Cases
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance"
            >
              Benefits to RBI
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Securing RBI-regulated payment systems with quantum-resistant cryptography for UPI, RTGS, NEFT, and API infrastructure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Payment Systems */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Payment System Protection
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive security for all major Indian payment infrastructures
            </p>
          </FadeIn>

          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
            {rbiBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 border-b border-border">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-accent/10 transition-colors">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-primary">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.benefits.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <div className="flex-shrink-0 w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Key Benefits */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Strategic Benefits
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Why RBI-regulated institutions should adopt post-quantum security
            </p>
          </FadeIn>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10"
              >
                <div className="inline-flex p-3 bg-primary-foreground/10 rounded-lg mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Statistics */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                Scale of Protection
              </h2>
              <p className="text-lg text-muted-foreground">
                The magnitude of Indian payment infrastructure we secure
              </p>
            </FadeIn>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { value: '10B+', label: 'Monthly UPI Transactions' },
                { value: '300+', label: 'Banks Protected' },
                { value: '24/7', label: 'Real-time Monitoring' },
                { value: '100%', label: 'RBI Compliant' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-5 text-center sm:p-6"
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
                Ready to Deploy?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Learn about deployment requirements and implementation timeline
              </p>
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-primary px-8 text-primary-foreground hover:bg-primary/90 sm:w-auto"
              >
                <Link href="/deployment">
                  View Deployment
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
