'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Shield, 
  ArrowRight,
  Server,
  Cloud,
  Key,
  Code,
  Check,
  Box,
  Settings,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SectionWrapper, FadeIn } from '@/components/section-wrapper'

const deploymentSteps = [
  {
    step: 1,
    title: 'API Gateway Integration',
    icon: Server,
    description: 'Install QuantKawach plugin on your existing API gateway infrastructure',
    details: [
      'Kong Gateway plugin',
      'NGINX module',
      'AWS API Gateway extension',
      'Azure API Management integration'
    ]
  },
  {
    step: 2,
    title: 'Cloud / On-Premises Setup',
    icon: Cloud,
    description: 'Deploy on your preferred infrastructure with flexible hosting options',
    details: [
      'AWS deployment support',
      'Azure integration',
      'On-premises installation',
      'Hybrid cloud configurations'
    ]
  },
  {
    step: 3,
    title: 'HSM / KMS Configuration',
    icon: Key,
    description: 'Configure hardware security modules for key management',
    details: [
      'AWS CloudHSM integration',
      'Azure Dedicated HSM',
      'Thales Luna HSM',
      'AWS KMS / Azure Key Vault'
    ]
  },
  {
    step: 4,
    title: 'SDK Integration',
    icon: Code,
    description: 'Integrate client SDKs for seamless application connectivity',
    details: [
      'Java SDK',
      'Python SDK',
      '.NET SDK',
      'Node.js SDK'
    ]
  }
]

const requirements = [
  {
    category: 'Infrastructure',
    items: [
      'API Gateway (Kong, NGINX, or cloud-native)',
      'Linux-based server environment',
      'Minimum 4 CPU cores, 8GB RAM',
      'Network connectivity to banking endpoints'
    ]
  },
  {
    category: 'Security',
    items: [
      'HSM or cloud KMS service',
      'TLS 1.3 capable infrastructure',
      'Secure network segmentation',
      'Audit logging capability'
    ]
  },
  {
    category: 'Operations',
    items: [
      'Monitoring and alerting system',
      'Log aggregation infrastructure',
      'Backup and recovery procedures',
      'Incident response team'
    ]
  }
]

const timeline = [
  { phase: 'Assessment', duration: '1-2 weeks', description: 'Infrastructure review and planning' },
  { phase: 'Setup', duration: '2-3 weeks', description: 'Gateway and HSM configuration' },
  { phase: 'Integration', duration: '2-4 weeks', description: 'SDK deployment and testing' },
  { phase: 'Go-Live', duration: '1 week', description: 'Production deployment and monitoring' },
]

export default function DeploymentPage() {
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
              <Box className="w-4 h-4 text-accent" />
              Deployment
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance"
            >
              Deployment Requirements
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Step-by-step deployment process designed for minimal disruption to existing banking operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Deployment Steps */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Deployment Steps
            </h2>
            <p className="text-lg text-muted-foreground">
              Four-step process to quantum-secure your banking infrastructure
            </p>
          </FadeIn>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 sm:grid-cols-2">
              {deploymentSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-card border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-mono font-bold shadow-lg">
                    {step.step}
                  </div>
                  
                  {/* Content */}
                  <div className="pt-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-secondary rounded-lg">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    
                    <div className="grid gap-2 sm:grid-cols-2">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Requirements */}
      <SectionWrapper className="bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              System Requirements
            </h2>
            <p className="text-lg text-muted-foreground">
              Prerequisites for QuantKawach deployment
            </p>
          </FadeIn>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {requirements.map((req, index) => (
              <motion.div
                key={req.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-semibold text-lg text-primary mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  {req.category}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Implementation Timeline
            </h2>
            <p className="text-lg text-muted-foreground">
              Typical deployment timeline for enterprise implementations
            </p>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
              
              <div className="space-y-8">
                {timeline.map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10" />
                    
                    {/* Content */}
                    <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <div className="mb-2 flex items-center gap-3 md:justify-start">
                          <Zap className="w-5 h-5 text-accent" />
                          <h3 className="font-semibold text-lg text-foreground">{phase.phase}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{phase.description}</p>
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium">
                          {phase.duration}
                        </span>
                      </div>
                    </div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Start Your Deployment
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Contact our team to begin the assessment phase for your infrastructure
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-primary-foreground px-8 text-primary hover:bg-primary-foreground/90 sm:w-auto"
                >
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="w-full border-primary-foreground/20 px-8 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                >
                  <Link href="/resources">
                    View Resources
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
