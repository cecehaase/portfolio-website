import type { Page } from '../App'

interface NavBarProps {
  onNavigate: (page: Page) => void
}

export const NavBar = ({ onNavigate }: NavBarProps) => {
  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'landing' },
    { label: 'About', page: 'about' },
    { label: 'Experience', page: 'experience' },
    { label: 'Skills', page: 'skills' },
    { label: 'Contact', page: 'contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="glass rounded-full px-6 py-3 flex justify-between items-center max-w-4xl mx-auto">
        <button
          onClick={() => onNavigate('landing')}
          className="font-bold text-lg text-[#003049ff] cursor-pointer"
        >
          CH
        </button>
        <ul className="flex items-center gap-6 font-medium">
          {navItems.map((item) => (
            <li key={item.page}>
              <button
                onClick={() => onNavigate(item.page)}
                className="hover:text-[#003049ff] text-[#003049ff] transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}