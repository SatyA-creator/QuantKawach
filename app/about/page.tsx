'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Users, 
  ArrowRight,
  Target,
  Award,
  Lightbulb,
  Linkedin,
  Twitter,
  Globe
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SectionWrapper, FadeIn } from '@/components/section-wrapper'

const team = [
  {
    name: 'Ashish Janghel',
    role: 'Founder & CEO',
    description: 'Leading the vision for quantum-safe banking security in India. Expert in cryptographic systems and financial technology infrastructure.',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Dr. Utpal Chakraborty',
    role: 'Chief Scientist',
    description: 'Ph.D. in Quantum Computing and Cryptography. Former researcher at leading institutions with expertise in post-quantum algorithms.',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Lucy Sharma',
    role: 'Head of Engineering',
    description: 'Experienced engineering leader with background in secure systems development for financial services and banking infrastructure.',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  }
]

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Protecting Indian financial infrastructure from emerging quantum threats through cutting-edge cryptography'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Implementing only NIST-standardized algorithms with rigorous security validation and testing'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering practical post-quantum solutions that work with existing banking systems'
  }
]

const milestones = [
  { year: '2023', event: 'Company founded with focus on post-quantum banking security' },
  { year: '2024', event: 'First successful pilot with major Indian private bank' },
  { year: '2024', event: 'NIST algorithm standards finalized and implemented' },
  { year: '2025', event: 'Expanded coverage to UPI, RTGS, and NEFT systems' },
]

export default function AboutPage() {
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
              <Users className="w-4 h-4 text-accent" />
              About Us
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance"
            >
              Securing the Future of Indian Banking
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              QuantKawach is building the foundation for quantum-safe financial infrastructure, protecting RBI-regulated systems from emerging cryptographic threats.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To provide quantum-resistant security solutions that protect Indian banking infrastructure today while preparing for the quantum computing era of tomorrow.
            </p>
          </FadeIn>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-border"
              >
                <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper id="team" className="bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Experts in cryptography, quantum computing, and financial technology
            </p>
          </FadeIn>

          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Avatar placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-serif text-4xl text-primary font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
                  {/* Social links */}
                  <div className="flex gap-3">
                    <a 
                      href={member.social.linkedin}
                      className="p-2 bg-secondary rounded-lg hover:bg-primary/10 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 text-muted-foreground" />
                    </a>
                    <a 
                      href={member.social.twitter}
                      className="p-2 bg-secondary rounded-lg hover:bg-primary/10 transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="w-4 h-4 text-muted-foreground" />
                    </a>
                  </div>
                </div>
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
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in building quantum-safe banking security
            </p>
          </FadeIn>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex gap-6 pl-12"
                  >
                    {/* Dot */}
                    <div className="absolute left-4 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-1.5" />
                    
                    {/* Content */}
                    <div className="flex-1 bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium mb-2">
                        {milestone.year}
                      </span>
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
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
                Join Us in Securing Indian Banking
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Partner with QuantKawach to protect your financial infrastructure
              </p>
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-primary-foreground px-8 text-primary hover:bg-primary-foreground/90 sm:w-auto"
              >
                <Link href="/contact">
                  Get in Touch
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
