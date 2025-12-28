"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

export function Counter({ end, duration = 2, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(startValue + (end - startValue) * easeOutQuart)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isInView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-primary"
    >
      {count.toLocaleString()}
      {suffix}
    </motion.div>
  )
}
