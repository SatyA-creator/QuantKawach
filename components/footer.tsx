'use client'

import Link from 'next/link'
import { Shield, Mail, MapPin } from 'lucide-react'
import { RangoliAnimation } from '@/components/rangoli-animation'

const footerLinks = {
  product: [
    { href: '/product', label: 'Overview' },
    { href: '/technology', label: 'Technology' },
    { href: '/security', label: 'Security' },
    { href: '/deployment', label: 'Deployment' },
  ],
  resources: [
    { href: '/resources', label: 'Documentation' },
    { href: '/resources#faq', label: 'FAQ' },
    { href: '/resources#whitepaper', label: 'Whitepaper' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/about#team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ],
}

export function Footer() {
  return (
    <footer className="relative mt-20 text-primary-foreground">
      <div
        aria-hidden="true"
        className="h-14 bg-primary [clip-path:polygon(0_100%,100%_0,100%_100%,0_100%)] sm:h-16"
      />

      <div className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,153,51,0.2),transparent_42%),radial-gradient(circle_at_50%_72%,rgba(255,240,205,0.16),transparent_45%)]" />
        <RangoliAnimation
          fitParent
          particleCount={120}
          ringCount={6}
          opacity={0.45}
          blendMode="screen"
          className=""
        />

        <div className="relative container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_auto_auto_auto] lg:justify-start lg:gap-x-8 lg:gap-y-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8" />
              <div>
                <span className="font-serif font-bold text-xl">QuantKawach</span>
                <span className="block text-xs text-primary-foreground/70">Post-Quantum Security</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-6 leading-relaxed">
              Securing Indian Banking Infrastructure with Post-Quantum Cryptography
            </p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@quantkawach.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 pt-8 text-center sm:gap-4 md:flex-row md:text-left">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} QuantKawach. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Made in India with quantum-safe security
          </p>
        </div>
      </div>
      </div>
    </footer>
  )
}
