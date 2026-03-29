import { useState, useEffect } from 'react'
import type { Page } from '../App'

interface LandingProps {
  onNavigate: (page: Page) => void
}

export const Landing = ({ onNavigate }: LandingProps) => {
  const [nameVisible, setNameVisible] = useState(false)
  const [navVisible, setNavVisible] = useState(false)

  useEffect(() => {
    // Trigger name slide-in on mount
    const nameTimer = setTimeout(() => setNameVisible(true), 100)
    // Fade in nav after name animation completes (~1.2s)
    const navTimer = setTimeout(() => setNavVisible(true), 1500)
    return () => {
      clearTimeout(nameTimer)
      clearTimeout(navTimer)
    }
  }, [])

  const navItems: { label: string; page: Page }[] = [
    { label: 'About', page: 'about' },
    { label: 'Experience', page: 'experience' },
    { label: 'Skills', page: 'skills' },
    { label: 'Contact', page: 'contact' },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Name */}
      <div className="flex items-center gap-4 md:gap-6 mb-12">
        <span
          className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white transition-all duration-1000 ease-out ${
            nameVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-full'
          }`}
        >
          Cecelia
        </span>
        <span
          className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white transition-all duration-1000 ease-out ${
            nameVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-full'
          }`}
        >
          Haase
        </span>
      </div>

      {/* Navigation */}
      <nav
        className={`transition-all duration-700 ease-out ${
          navVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
          {navItems.map((item) => (
            <li key={item.page}>
              <button
                onClick={() => onNavigate(item.page)}
                className="text-lg md:text-xl font-medium text-foreground/70 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Landing