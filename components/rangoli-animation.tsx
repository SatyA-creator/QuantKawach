'use client'

import { useEffect, useRef } from 'react'

type RangoliAnimationProps = {
  particleCount?: number
  ringCount?: number
  className?: string
  opacity?: number
  blendMode?: React.CSSProperties['mixBlendMode']
  fitParent?: boolean
}

export function RangoliAnimation({
  particleCount = 260,
  ringCount = 8,
  className = '',
  opacity = 0.9,
  blendMode = 'multiply',
  fitParent = false,
}: RangoliAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId = 0
    let resizeObserver: ResizeObserver | null = null
    let rotation = 0
    let particles: Array<{
      x: number
      y: number
      size: number
      speed: number
      angle: number
      opacity: number
      color: string
    }> = []

    const colors = [
      'rgba(255, 153, 51, 0.85)',  // Saffron
      'rgba(59, 54, 108, 0.7)',    // Deep indigo
      'rgba(255, 200, 100, 0.8)',  // Gold
      'rgba(100, 80, 180, 0.65)',  // Purple
    ]

    const resize = () => {
      if (fitParent && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth
        canvas.height = canvas.parentElement.clientHeight
      } else {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }

      // Avoid rendering work when container has no measurable area.
      if (canvas.width === 0 || canvas.height === 0) return
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.5

      // Create particles along rangoli pattern paths
      for (let i = 0; i < particleCount; i++) {
        const ring = Math.floor(Math.random() * ringCount)
        const radius = (maxRadius / ringCount) * (ring + 1)
        const angle = (Math.PI * 2 * i) / 25 + ring * 0.1
        
        particles.push({
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          size: Math.random() * 3.8 + 1.2,
          speed: 0.001 + Math.random() * 0.002,
          angle: angle,
          opacity: 0.5 + Math.random() * 0.4,
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
    }

    const drawRangoli = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.45

      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Draw multiple concentric rangoli patterns
      for (let ring = 1; ring <= ringCount; ring++) {
        const radius = (maxRadius / ringCount) * ring
        const petals = 8 + ring * 2
        
        ctx.beginPath()
        for (let i = 0; i <= petals * 2; i++) {
          const angle = (Math.PI * 2 * i) / (petals * 2)
          const r = radius + Math.sin(i * 4 + rotation * 2) * (radius * 0.1)
          const x = Math.cos(angle) * r
          const y = Math.sin(angle) * r
          
          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()
        
        // Gradient stroke
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, maxRadius)
        gradient.addColorStop(0, 'rgba(255, 153, 51, 0.6)')
        gradient.addColorStop(0.5, 'rgba(59, 54, 108, 0.5)')
        gradient.addColorStop(1, 'rgba(255, 153, 51, 0.2)')

        ctx.shadowBlur = 8
        ctx.shadowColor = ring % 2 === 0 ? 'rgba(255, 153, 51, 0.45)' : 'rgba(59, 54, 108, 0.35)'
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.8
        ctx.stroke()
        ctx.shadowBlur = 0
      }

      // Draw lotus petals at center
      for (let i = 0; i < 16; i++) {
        const angle = (Math.PI * 2 * i) / 16
        ctx.save()
        ctx.rotate(angle)
        
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.quadraticCurveTo(maxRadius * 0.15, -maxRadius * 0.08, maxRadius * 0.25, 0)
        ctx.quadraticCurveTo(maxRadius * 0.15, maxRadius * 0.08, 0, 0)
        ctx.fillStyle = `rgba(255, 153, 51, ${0.12 + Math.sin(rotation * 2 + i) * 0.05})`
        ctx.fill()
        
        ctx.restore()
      }

      // Draw decorative dots
      const maxDecorativeRing = Math.max(3, ringCount - 2)
      for (let ring = 2; ring <= maxDecorativeRing; ring++) {
        const radius = (maxRadius / ringCount) * ring
        const dots = 8 * ring
        
        for (let i = 0; i < dots; i++) {
          const angle = (Math.PI * 2 * i) / dots
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          
          ctx.beginPath()
          ctx.arc(x, y, 2.4, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 153, 51, ${0.35 + Math.sin(rotation + i * 0.5) * 0.12})`
          ctx.fill()
        }
      }

      ctx.restore()
    }

    const drawParticles = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.5

      particles.forEach((particle, index) => {
        particle.angle += particle.speed
        const ring = Math.floor(index / 25)
        const radius = (maxRadius / ringCount) * ((ring % ringCount) + 1)
        
        particle.x = centerX + Math.cos(particle.angle) * radius
        particle.y = centerY + Math.sin(particle.angle) * radius
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.shadowBlur = 6
        ctx.shadowColor = particle.color.replace(/[\d.]+\)$/, '0.6)')
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/, `${particle.opacity * (0.65 + Math.sin(rotation * 3 + index) * 0.35)})`)
        ctx.fill()
        ctx.shadowBlur = 0
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      if (canvas.width > 0 && canvas.height > 0) {
        drawRangoli()
        drawParticles()
      }
      
      rotation += 0.002
      animationId = requestAnimationFrame(animate)
    }

    resize()
    if (fitParent && canvas.parentElement && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(canvas.parentElement)
    }
    window.addEventListener('resize', resize)
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      if (resizeObserver) resizeObserver.disconnect()
      cancelAnimationFrame(animationId)
    }
  }, [blendMode, fitParent, opacity, particleCount, ringCount])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity, mixBlendMode: blendMode }}
    />
  )
}
