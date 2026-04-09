"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Smooth spring for the outer ring (follows with elegant delay)
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
  const ringX = useSpring(cursorX, springConfig)
  const ringY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const checkMouse = () => {
      setIsMobile(window.matchMedia("(hover: none)").matches)
    }
    checkMouse()
    window.addEventListener("resize", checkMouse)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHoverableElement = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.closest("[data-hoverable]")
      
      setIsHovering(!!isHoverableElement)
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousemove", handleElementHover)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousemove", handleElementHover)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("resize", checkMouse)
    }
  }, [cursorX, cursorY])

  if (isMobile) return null

  return (
    <>
      {/* Elegant outer ring - follows smoothly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.8 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ 
            duration: 0.4, 
            ease: [0.23, 1, 0.32, 1] 
          }}
        >
          <div 
            className="w-8 h-8 rounded-full transition-all duration-500 ease-out"
            style={{
              border: isHovering ? '1px solid #D4A24C' : '1px solid rgba(212, 162, 76, 0.5)',
              backgroundColor: isHovering ? 'rgba(212, 162, 76, 0.08)' : 'transparent',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Small elegant dot - instant position */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{
            width: isHovering ? 6 : 4,
            height: isHovering ? 6 : 4,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
          style={{
            backgroundColor: '#D4A24C',
          }}
        />
      </motion.div>
    </>
  )
}
