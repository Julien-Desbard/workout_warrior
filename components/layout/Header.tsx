'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Cours', href: '/cours' },
  { label: 'Formateurs', href: '#' },
  { label: 'Témoignages', href: '#' },
  { label: 'Contact', href: '#' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1440px] mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-xl text-white tracking-widest hover:text-[#FF6B1A] transition-colors duration-200">
          WORKOUT WARRIOR ACADEMY
        </Link>

        {/* Navigation centrale */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.href !== '#' && pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors duration-200 ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-[#A0A0A0] hover:text-[#FF6B1A]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <Link
          href="#"
          className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium transition-all duration-200 hover:bg-[#F5F5F5] active:scale-[0.98]"
        >
          Essai gratuit
        </Link>
      </div>
    </header>
  )
}
