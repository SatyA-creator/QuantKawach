'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Server, 
  Fingerprint, 
  RefreshCw, 
  Shield,
  ArrowRight,
  Check,
  Layers,
  Plug,
  Lock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SectionWrapper, FadeIn } from '@/components/section-wrapper'
import { FeatureCard } from '@/components/feature-card'

const productFeatures = [
  {
    icon: Plug,
    title: 'Gateway Plugin Architecture',
    description: 'Integrates seamlessly with existing API gateways like Kong, NGINX, or AWS API Gateway without requiring any modifications to backend services.',
    benefits: [
      'No code changes required',
      'Works with any REST API',
      'Simple configuration-based setup'
    ]
  },
  {
    icon: Fingerprint,
    title: 'Device-Bound Identity',
    description: 'Each banking endpoint receives a hardware-anchored cryptographic identity that cannot be cloned or transferred.',
    benefits: [
      'Hardware security module integration',
      'Unique per-device keys',
      'Tamper-resistant binding'
    ]
  },
  {
    icon: RefreshCw,
    title: 'Zero Infrastructure Change',
    description: 'Deploy post-quantum security without modifying existing banking applications, databases, or network architecture.',
    benefits: [
      'Preserve current investments',
      'No downtime during deployment',
      'Gradual rollout capability'
    ]
  }
]

const architectureComponents = [
  {
    icon: Layers,
    title: 'HTTP Wrapper Layer',
    description: 'Transparent encryption layer that wraps standard HTTP/HTTPS traffic with post-quantum protection'
  },
  {
    icon: Lock,
    title: 'Key Management',
    description: 'Secure key generation, distribution, and rotation using quantum-safe algorithms'
  },
  {
    icon: Server,
    title: 'Gateway Integration',
    description: 'Native plugins for popular API gateways with minimal configuration overhead'
  },
  {
    icon: Shield,
    title: 'Security Monitor',
    description: 'Real-time threat detection and anomaly monitoring for quantum-safe communications'
  }
]

export default function ProductPage() {
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
              <Shield className="w-4 h-4 text-accent" />
              Product
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance"
            >
              Product Overview
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              QuantKawach delivers enterprise-grade post-quantum security through a simple gateway plugin, protecting banking APIs without changing your infrastructure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Built for the unique requirements of Indian banking infrastructure
            </p>
          </FadeIn>

          <div className="space-y-16">
            {productFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex p-3 bg-accent/10 rounded-xl mb-4">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative aspect-square max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
                    <div className="absolute inset-4 border-2 border-dashed border-border rounded-xl flex items-center justify-center">
                      <feature.icon className="w-24 h-24 text-primary/20" />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-accent/20 rounded-full animate-pulse" />
                    <div className="absolute bottom-8 left-8 w-6 h-6 bg-primary/20 rounded-full animate-pulse delay-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Architecture */}
      <SectionWrapper className="bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Architecture Components
            </h2>
            <p className="text-lg text-muted-foreground">
              Modular design for flexibility and reliability
            </p>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {architectureComponents.map((component, index) => (
              <FeatureCard
                key={component.title}
                icon={component.icon}
                title={component.title}
                description={component.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
    

      <Footer />
    </div>
  )
}
