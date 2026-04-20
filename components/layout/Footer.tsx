import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1F1F1F] mt-24">
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-4 gap-12 mb-12">
          {/* Colonne 1 — Marque */}
          <div>
            <p className="font-display text-lg tracking-widest text-white mb-3">
              WORKOUT WARRIOR ACADEMY
            </p>
            <p className="text-[#A0A0A0] text-sm leading-relaxed">
              La plateforme de formation continue pour les kinés et professionnels de l&apos;APA qui refusent de stagner.
            </p>
          </div>

          {/* Colonne 2 — Plateforme */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Plateforme</p>
            <ul className="space-y-2.5">
              {['Cours', 'Formateurs', 'Tarifs'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#A0A0A0] text-sm hover:text-[#FF6B1A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Entreprise */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Entreprise</p>
            <ul className="space-y-2.5">
              {['À propos', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#A0A0A0] text-sm hover:text-[#FF6B1A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Légal */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Légal</p>
            <ul className="space-y-2.5">
              {['CGU', 'CGV', 'Mentions légales', 'Confidentialité'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#A0A0A0] text-sm hover:text-[#FF6B1A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1F1F1F] pt-8 text-center">
          <p className="text-[#A0A0A0] text-xs">
            © 2025 Workout Warrior Academy. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
