'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  delay?: number
  variant?: 'default' | 'highlighted' | 'glass'
  className?: string
}

export function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  delay = 0,
  variant = 'default',
  className 
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        'group relative p-6 lg:p-8 rounded-xl transition-all duration-300',
        variant === 'default' && 'bg-card border border-border hover:border-accent/50 hover:shadow-lg',
        variant === 'highlighted' && 'bg-primary text-primary-foreground hover:shadow-xl',
        variant === 'glass' && 'bg-white/80 backdrop-blur-sm border border-white/20 hover:bg-white/90',
        className
      )}
    >
      {/* Glow effect */}
      <div className={cn(
        'absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10',
        variant === 'highlighted' ? 'bg-accent/20' : 'bg-accent/10'
      )} />
      
      {/* Icon */}
      <div className={cn(
        'inline-flex p-3 rounded-lg mb-4 transition-colors duration-300',
        variant === 'default' && 'bg-secondary group-hover:bg-accent/10',
        variant === 'highlighted' && 'bg-primary-foreground/10 group-hover:bg-primary-foreground/20',
        variant === 'glass' && 'bg-primary/10 group-hover:bg-primary/20'
      )}>
        <Icon className={cn(
          'w-6 h-6 transition-transform duration-300 group-hover:scale-110',
          variant === 'default' && 'text-primary',
          variant === 'highlighted' && 'text-primary-foreground',
          variant === 'glass' && 'text-primary'
        )} />
      </div>

      {/* Content */}
      <h3 className={cn(
        'font-semibold text-lg mb-2',
        variant === 'highlighted' ? 'text-primary-foreground' : 'text-foreground'
      )}>
        {title}
      </h3>
      <p className={cn(
        'text-sm leading-relaxed',
        variant === 'highlighted' ? 'text-primary-foreground/80' : 'text-muted-foreground'
      )}>
        {description}
      </p>
    </motion.div>
  )
}

interface TechCardProps {
  title: string
  subtitle: string
  description: string
  delay?: number
  className?: string
}

export function TechCard({ 
  title, 
  subtitle,
  description, 
  delay = 0,
  className 
}: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={cn(
        'group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 p-6 lg:p-8 border border-border hover:border-accent/30 transition-all duration-300',
        className
      )}
    >
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id={`grid-${title}`} width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="currentColor" />
          </pattern>
          <rect width="100" height="100" fill={`url(#grid-${title})`} />
        </svg>
      </div>

      <div className="relative z-10">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent-foreground rounded-full mb-4">
          {subtitle}
        </span>
        <h3 className="font-mono font-bold text-xl lg:text-2xl text-primary mb-3">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}
