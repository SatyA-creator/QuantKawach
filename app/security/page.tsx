'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Shield, 
  ArrowRight,
  Lock,
  Eye,
  AlertTriangle,
  Key,
  Check,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SectionWrapper, FadeIn } from '@/components/section-wrapper'

const attacks = [
  {
    name: 'Man-in-the-Middle',
    threat: 'Interception of API traffic between banks',
    protection: 'Post-quantum authenticated key exchange ensures intercepted data cannot be decrypted',
    icon: Eye
  },
  {
    name: 'Harvest Now, Decrypt Later',
    threat: 'Collection of encrypted data for future quantum decryption',
    protection: 'Quantum-resistant algorithms make stored encrypted data permanently secure',
    icon: AlertTriangle
  },
  {
    name: 'Key Compromise',
    threat: 'Theft of cryptographic keys',
    protection: 'Device-bound keys with hardware security modules prevent extraction',
    icon: Key
  },
  {
    name: 'Replay Attacks',
    threat: 'Reuse of captured authentication tokens',
    protection: 'Timestamp-bound signatures and rotating session keys invalidate replayed requests',
    icon: Lock
  }
]

const securityLayers = [
  {
    layer: 'Transport',
    description: 'Post-quantum TLS with hybrid key exchange',
    components: ['Kyber-768 KEM', 'X25519 fallback', 'Certificate pinning']
  },
  {
    layer: 'Application',
    description: 'Request-level signing and encryption',
    components: ['ML-DSA-65 signatures', 'ChaCha20-Poly1305', 'Request binding']
  },
  {
    layer: 'Identity',
    description: 'Hardware-anchored device authentication',
    components: ['HSM integration', 'Device attestation', 'Zero-trust model']
  },
  {
    layer: 'Monitoring',
    description: 'Real-time threat detection and response',
    components: ['Anomaly detection', 'Audit logging', 'Incident response']
  }
]

const securityModel = [
  {
    title: 'Defense in Depth',
    description: 'Multiple independent security layers ensure no single point of failure'
  },
  {
    title: 'Zero Trust Architecture',
    description: 'Every request is authenticated and authorized regardless of network position'
  },
  {
    title: 'Cryptographic Agility',
    description: 'Algorithms can be upgraded without service disruption as standards evolve'
  },
  {
    title: 'Minimal Attack Surface',
    description: 'Gateway-only deployment limits exposure to a single, hardened component'
  }
]

export default function SecurityPage() {
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
              Security
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance"
            >
              Security Architecture
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Multi-layered protection designed for the unique threat landscape of Indian banking infrastructure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How QuantKawach Prevents Attacks */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              How QuantKawach Prevents Attacks
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive protection against current and future cryptographic threats
            </p>
          </FadeIn>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {attacks.map((attack, index) => (
              <motion.div
                key={attack.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-destructive/10 rounded-lg">
                    <attack.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {attack.name}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{attack.threat}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground">{attack.protection}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Security Architecture Layers */}
      <SectionWrapper className="bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Post-Quantum Security Architecture
            </h2>
            <p className="text-lg text-muted-foreground">
              Layered security model protecting every aspect of banking communications
            </p>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-4">
            {securityLayers.map((layer, index) => (
              <motion.div
                key={layer.layer}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-lg font-mono font-bold text-sm">
                      L{index + 1}
                    </span>
                    <h3 className="font-semibold text-lg text-primary mt-2">{layer.layer}</h3>
                  </div>
                  <div className="md:w-1/3">
                    <p className="text-muted-foreground">{layer.description}</p>
                  </div>
                  <div className="md:w-5/12">
                    <div className="flex flex-wrap gap-2">
                      {layer.components.map((component) => (
                        <span
                          key={component}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                        >
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Banking Security Model */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Banking Security Model
            </h2>
            <p className="text-lg text-muted-foreground">
              Principles guiding our security architecture
            </p>
          </FadeIn>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {securityModel.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-border"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
   

      <Footer />
    </div>
  )
}
