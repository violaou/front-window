import React, { useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'study-desk', url: '/study-desk' }
    // 'Link 2',
    // 'Link 3',
    // 'Link 4'
  ]

  return (
    <div className="fixed top-0 left-0 z-50 md:p-8 p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>

      <div
        className={`absolute top-full left-10 mt-2 bg-black border border-white/20 rounded-lg shadow-xl min-w-48 py-2 transition-all duration-200 ease-out origin-top-left ${
          isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  className="block px-4 py-2 hover:bg-white/10 transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
