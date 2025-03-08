import { useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Ceramics', url: 'https://pots.violaou.com' },
    { name: 'Study Desk', url: '/study-desk' }
  ]

  return (
    <div
      className="fixed top-0 left-0 z-50 md:p-8 p-4"
      onKeyDown={(e) => {
        if (e.key === 'Escape' && isOpen) setIsOpen(false)
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>

      <div
        role="menu"
        aria-hidden={!isOpen}
        className={`absolute top-full left-10 mt-2 bg-black border border-white/20 rounded-lg shadow-xl min-w-48 py-2 transition-all duration-200 ease-out origin-top-left ${
          isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <nav>
          <ul>
            {links.map((link) => {
              const { name, url } = link
              return (
                <li key={url}>
                  <a
                    href={url}
                    target={url.startsWith('http') ? '_blank' : '_self'}
                    rel={
                      url.startsWith('http') ? 'noopener noreferrer' : undefined
                    }
                    className="block px-4 py-2 hover:bg-white/10 transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                  >
                    {name}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}
