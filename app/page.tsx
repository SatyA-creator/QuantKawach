'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Shield,
  Lock,
  Cpu,
  Zap,
  ArrowRight,
  Server,
  Key,
  Fingerprint,
  AlertTriangle,
  Clock,
  Plug,
  Layers,
  Timer,
  ShieldCheck,
  RefreshCw,
  Gauge,
  Database,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { RangoliAnimation } from '@/components/rangoli-animation'
import { SectionWrapper, FadeIn } from '@/components/section-wrapper'

const problemStatements = [
  {
    icon: Key,
    title: 'JWT Token Theft',
    description: 'Compromised bearer tokens can impersonate users across critical banking sessions.',
  },
  {
    icon: RefreshCw,
    title: 'Replay Attacks',
    description: 'Captured requests can be replayed to trigger unauthorized transactions.',
  },
  {
    icon: Clock,
    title: 'Harvest-Now-Decrypt-Later',
    description: 'Sensitive traffic captured now may be decrypted later by quantum-capable adversaries.',
  },
  {
    icon: AlertTriangle,
    title: 'Weak API-Layer Security',
    description: 'Transport security alone leaves identity and request integrity exposed at the API layer.',
  },
]

const overviewHighlights = [
  {
    icon: Plug,
    title: 'API Gateway Plugin',
    description: 'Deploys into NGINX, Kong, and Envoy with minimal operational friction.',
  },
  {
    icon: Layers,
    title: 'Works Above TLS',
    description: 'Adds request-level trust and signature verification beyond transport encryption.',
  },
  {
    icon: Timer,
    title: '2-5 Day Deployment',
    description: 'Fast implementation timeline for pilot-to-production rollout.',
  },
  {
    icon: Server,
    title: 'No Infra Changes',
    description: 'Integrates with existing backend stacks without API rewrites.',
  },
]

const keyInnovations = [
  {
    icon: Server,
    title: 'Gateway Plugin Architecture',
    description: 'Zero-modification deployment through existing API gateway infrastructure',
  },
  {
    icon: Fingerprint,
    title: 'Device-Bound Signatures',
    description: 'Hardware-anchored signing to bind requests with trusted endpoint identity',
  },
  {
    icon: Lock,
    title: 'HTTP-Layer Encryption',
    description: 'Per-request cryptographic protection above TLS for high-value API operations',
  },
  {
    icon: RefreshCw,
    title: 'Crypto-Agility',
    description: 'Algorithm switching and policy control for evolving cryptographic standards',
  },
  {
    icon: Gauge,
    title: 'Performance Metrics',
    description: 'Optimized validation paths designed for low-latency payment workloads',
  },
]

const flowSteps = [
  { icon: Shield, label: 'Client' },
  { icon: Cpu, label: 'SDK' },
  { icon: Key, label: 'Signed Request' },
  { icon: Plug, label: 'Gateway Plugin' },
  { icon: ShieldCheck, label: 'Verify' },
  { icon: Database, label: 'Banking APIs' },
]

const whyNowReasons = [
  {
    icon: Cpu,
    title: 'Quantum Computing Progress',
    description: 'Capability milestones are accelerating faster than enterprise migration cycles.',
  },
  {
    icon: AlertTriangle,
    title: 'RSA Risk Timeline',
    description: 'Long-lived key material and archived traffic face growing exposure windows.',
  },
  {
    icon: Shield,
    title: 'RBI Warning Signals',
    description: 'Regulatory expectations are moving toward stronger cryptographic postures.',
  },
  {
    icon: Database,
    title: 'Stored Financial Data Threat',
    description: 'Captured payment and identity data remains vulnerable for future decryption attempts.',
  },
]

const benefitPoints = [
  'Protects API identity and payload integrity beyond TLS.',
  'Reduces fraud surface from token theft and replay scenarios.',
  'Supports RBI-aligned modernization without disruption.',
  'Enables gradual cryptographic upgrades with policy-based controls.',
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative isolate flex min-h-screen items-center overflow-hidden pb-14 pt-24 sm:pb-16 sm:pt-28 lg:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/40 to-background" />
        <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-saffron/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-[30rem] w-[30rem] rounded-full bg-indigo/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,153,51,0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(59,54,108,0.2),transparent_48%)]" />

        <RangoliAnimation />
        <div className="absolute inset-0 bg-background/45 backdrop-blur-[1.5px]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-foreground shadow-sm">
                  <Shield className="h-4 w-4 text-accent" />
                  Quantum-Safe Banking Security
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-6 bg-gradient-to-r bg-gradient-to-br from-primary to-[#f98f3a] bg-clip-text font-serif text-3xl font-bold leading-[1.08] text-transparent sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                Protect Every Banking API
                <span className="block bg-gradient-to-br from-primary via-primary to-[#f98f3a] bg-clip-text text-transparent">
                  Before Quantum Threats Arrive
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg lg:mx-0 lg:text-xl"
              >
                HTTP-layer post-quantum cryptography for RBI-regulated systems like UPI, RTGS, and NEFT with deployment that fits your existing gateway stack.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
              >
                <Button asChild size="lg" className="w-full bg-primary px-8 py-6 sm:w-auto">
                  <Link href="/product">
                    View Product <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full px-8 py-6 sm:w-auto">
                  <Link href="/resources#whitepaper">Read Whitepaper</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative mx-auto w-full max-w-lg -mt-10 lg:-mt-16"
            >
              <div className="relative rounded-3xl border border-primary/20 bg-card/70 p-7 shadow-lg backdrop-blur-md">
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between rounded-xl border border-primary/15 bg-background/70 px-4 py-3">
                    <span className="text-sm text-muted-foreground">Cryptographic Mode</span>
                    <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold">Hybrid PQC</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-primary/15 bg-background/70 p-3 text-center">
                      <p className="text-[10px] uppercase text-muted-foreground">Latency</p>
                      <p className="text-sm font-semibold text-primary">Sub-15ms</p>
                    </div>
                    <div className="rounded-xl border border-primary/15 bg-background/70 p-3 text-center">
                      <p className="text-[10px] uppercase text-muted-foreground">Migration</p>
                      <p className="text-sm font-semibold text-primary">Zero Rewrite</p>
                    </div>
                    <div className="rounded-xl border border-primary/15 bg-background/70 p-3 text-center">
                      <p className="text-[10px] uppercase text-muted-foreground">Compliance</p>
                      <p className="text-sm font-semibold text-primary">RBI + NIST</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-primary to-indigo p-5 text-white">
                    <p className="text-xs uppercase opacity-70">Gateway Status</p>
                    <p className="mt-2 text-2xl font-semibold">Protected</p>
                    <p className="mt-2 text-sm opacity-80">
                      Traffic is secured with quantum-resistant key exchange and device-bound identity.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-xl border border-primary/15 bg-background/70 px-4 py-3">
                      <Lock className="h-4 w-4 text-saffron" />
                      <span className="text-sm">Key exchange hardened</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-primary/15 bg-background/70 px-4 py-3">
                      <Fingerprint className="h-4 w-4 text-saffron" />
                      <span className="text-sm">Device-bound identity</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-primary/15 bg-background/70 px-4 py-3">
                      <Zap className="h-4 w-4 text-saffron" />
                      <span className="text-sm">Optimized for payments</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Section 2</p>
            <h2 className="mb-6 mt-3 bg-gradient-to-r from-[#000FFF] via-primary to-[#f98f3a] bg-clip-text font-serif text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
              Problem Statement
            </h2>
            <p className="text-base text-muted-foreground md:text-lg">Why QuantZen</p>
            <p className="mt-4 text-xl font-semibold text-primary md:text-2xl">TLS secures transport. QuantZen secures identity.</p>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-2">
            {problemStatements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-primary/15 bg-card/80 p-6 shadow-[0_16px_45px_-25px_rgba(0,15,255,0.4)] backdrop-blur-sm"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-[#000FFF]/20 to-[#f98f3a]/25 p-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="bg-gradient-to-br from-primary via-primary to-[#f98f3a] bg-clip-text text-xl font-semibold text-transparent">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

     <SectionWrapper>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    
    <FadeIn className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
        Section 3
      </p>

      <h2 className="mb-6 mt-3 bg-gradient-to-r from-[#000FFF] via-primary to-[#f98f3a] bg-clip-text font-serif text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
        Product Overview
      </h2>

      <p className="text-lg text-muted-foreground">
        QuantKawach is an HTTP-layer security solution that wraps existing banking APIs with post-quantum cryptographic protection, requiring zero changes to current infrastructure.
      </p>
    </FadeIn>

    {/* NEW DESIGN */}
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-center">
      {overviewHighlights.map((item, index) => (
        <div key={item.title} className="flex flex-col items-center">
          
          {/* ICON CIRCLE */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <item.icon className="h-10 w-10 text-primary" />
          </div>

          {/* TITLE */}
          <h3 className="mt-6 text-xl font-semibold text-foreground">
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            {item.description}
          </p>

        </div>
      ))}
    </div>

  </div>
</SectionWrapper>

     <SectionWrapper className="bg-secondary/30">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    
    <FadeIn className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
        Section 4
      </p>

      <h2 className="mb-6 mt-3 bg-gradient-to-r from-[#000FFF] via-primary to-[#f98f3a] bg-clip-text font-serif text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
        Key Innovations
      </h2>

      <p className="text-lg text-muted-foreground">
        Built for API-scale security with modern cryptographic flexibility.
      </p>
    </FadeIn>

    <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 md:gap-y-10 xl:grid-cols-6 xl:gap-y-14">
      {keyInnovations.map((innovation, index) => (
        
        <div
          key={innovation.title}
          className={`relative border border-gray-200 bg-white p-6 pt-16 shadow-[6px_6px_0px_#1e293b] xl:col-span-2 ${
            index === 3 ? 'xl:col-start-2' : index === 4 ? 'xl:col-start-4' : ''
          }`}
        >
          
          {/* TOP FLOATING ICON */}
          <div className="absolute -top-10 left-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-lg">
            <innovation.icon className="h-10 w-10" />
          </div>

          {/* CONTENT */}
          <h3 className="text-lg font-semibold text-foreground">
            {innovation.title}
          </h3>

          <p className="mt-3 text-sm text-muted-foreground">
            {innovation.description}
          </p>

        </div>

      ))}
    </div>

  </div>
</SectionWrapper>
<SectionWrapper>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    
    <FadeIn className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
        Section 5
      </p>

      <h2 className="mb-6 mt-3 bg-gradient-to-r from-[#000FFF] via-primary to-[#f98f3a] bg-clip-text font-serif text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
        How It Works
      </h2>
    </FadeIn>

    {/* MOBILE FLOW */}
    <div className="space-y-4 md:hidden">
      {flowSteps.map((step, index) => (
        <motion.div
          key={step.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="flex flex-col items-center"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute h-24 w-24 rounded-full bg-gradient-to-br from-primary/25 to-[#f98f3a]/35" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-background shadow-md">
              <step.icon className="h-7 w-7 text-primary" />
            </div>
          </div>
          <p className="mt-3 text-sm font-semibold text-foreground">{step.label}</p>

          {index < flowSteps.length - 1 && (
            <ChevronRight className="mt-2 h-5 w-5 rotate-90 text-primary/70" />
          )}
        </motion.div>
      ))}
    </div>

    {/* DESKTOP/TABLET FLOW */}
    <div className="hidden md:flex md:items-start md:justify-center">
      {flowSteps.map((step, index) => (
        <motion.div
          key={step.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="flex items-start"
        >
          <div className="relative w-24 flex-none pb-12">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-24 w-24 rounded-full bg-gradient-to-br from-primary/25 to-[#f98f3a]/35" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-background shadow-md">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
            </div>
            <p className="absolute top-full left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-foreground">
              {step.label}
            </p>
          </div>

          {index < flowSteps.length - 1 && (
            <div className="relative flex h-24 w-16 flex-none items-center">
              <div className="h-[2px] w-full bg-gradient-to-r from-primary to-[#f98f3a]" />
              <div className="absolute top-1/2 left-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-background text-xs font-bold text-primary shadow">
                {index + 1}
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>

    {/* FULL FLOW TEXT */}
   

  </div>
</SectionWrapper>

      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">Section 6</p>
            <h2 className="mb-6 mt-3 bg-gradient-to-r from-[#000FFF] via-primary-foreground to-[#f98f3a] bg-clip-text font-serif text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
              Why Now
            </h2>
            <p className="text-lg text-primary-foreground/80">The quantum threat is accelerating, and financial data has a long exposure lifecycle.</p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyNowReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/8 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary-foreground/12 p-3">
                  <reason.icon className="h-5 w-5" />
                </div>
                <h3 className="bg-gradient-to-r from-[#000FFF] via-primary-foreground to-[#f98f3a] bg-clip-text text-lg font-semibold text-transparent">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Section 7</p>
            <h2 className="mb-6 mt-3 bg-gradient-to-r from-[#000FFF] via-primary to-[#f98f3a] bg-clip-text font-serif text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
              Benefits
            </h2>
            <p className="text-lg text-muted-foreground">Quick advantages aligned with RBI-grade API security expectations.</p>
          </FadeIn>

          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-8">
            <div className="order-2 grid gap-3 lg:order-1 lg:justify-items-end">
              {benefitPoints.slice(0, 2).map((point) => (
                <div key={point} className="flex w-full max-w-sm items-start gap-2 rounded-xl border border-primary/15 bg-card/80 px-4 py-3 backdrop-blur-sm">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  <p className="text-sm text-foreground/90">{point}</p>
                </div>
              ))}
            </div>

            <div className="order-1 mx-auto w-full max-w-[220px] lg:order-2 lg:max-w-[300px]">
              <Image
                src="/benefits.png"
                alt="Benefits illustration"
                width={320}
                height={320}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            <div className="order-3 grid gap-3 lg:justify-items-start">
              {benefitPoints.slice(2).map((point) => (
                <div key={point} className="flex w-full max-w-sm items-start gap-2 rounded-xl border border-primary/15 bg-card/80 px-4 py-3 backdrop-blur-sm">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  <p className="text-sm text-foreground/90">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Section 8</p>
            <h2 className="mb-6 mt-3 bg-gradient-to-r from-[#000FFF] via-primary to-[#f98f3a] bg-clip-text font-serif text-3xl font-bold text-transparent md:text-4xl">
              Secure Your Banking APIs Today
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">Move from transport-only security to request-level trust with rapid deployment.</p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full bg-primary px-8 py-6 text-primary-foreground hover:bg-primary/90 sm:w-auto">
                <Link href="/contact">
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-primary/30 bg-background/70 px-8 py-6 hover:bg-primary/5 sm:w-auto">
                <Link href="/contact">Contact Team</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  )
}
