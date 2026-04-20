'use client'

import { MagnifyingGlass } from '@phosphor-icons/react'
import type { Thematique, Niveau } from '@/types'

const thematiques: Thematique[] = [
  'Rééducation ortho',
  'Neuro',
  'APA',
  'Sport-santé',
  'Gériatrie',
  'Pédiatrie',
]
const niveaux: Niveau[] = ['Débutant', 'Intermédiaire', 'Expert']

type CoursFiltersProps = {
  search: string
  thematique: Thematique | 'Tout'
  niveau: Niveau | 'Tous niveaux'
  onSearch: (v: string) => void
  onThematique: (v: Thematique | 'Tout') => void
  onNiveau: (v: Niveau | 'Tous niveaux') => void
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
        active
          ? 'bg-[#FF6B1A] text-black border-[#FF6B1A]'
          : 'bg-transparent text-[#A0A0A0] border-[#2A2A2A] hover:border-[#FF6B1A] hover:text-[#FF6B1A]'
      }`}
    >
      {label}
    </button>
  )
}

export function CoursFilters({
  search,
  thematique,
  niveau,
  onSearch,
  onThematique,
  onNiveau,
}: CoursFiltersProps) {
  return (
    <div className="flex flex-col gap-4 mb-10">
      {/* Barre de recherche */}
      <div className="relative w-80">
        <MagnifyingGlass
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0A0A0]"
        />
        <input
          type="text"
          placeholder="Rechercher un cours…"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 bg-[#111111] border border-[#2A2A2A] rounded-full text-sm text-white placeholder-[#A0A0A0] outline-none focus:border-white/40 transition-colors"
        />
      </div>

      {/* Chips thématiques */}
      <div className="flex items-center gap-2 flex-wrap">
        <Chip label="Tout" active={thematique === 'Tout'} onClick={() => onThematique('Tout')} />
        {thematiques.map((t) => (
          <Chip key={t} label={t} active={thematique === t} onClick={() => onThematique(t)} />
        ))}
      </div>

      {/* Chips niveaux */}
      <div className="flex items-center gap-2">
        <Chip label="Tous niveaux" active={niveau === 'Tous niveaux'} onClick={() => onNiveau('Tous niveaux')} />
        {niveaux.map((n) => (
          <Chip key={n} label={n} active={niveau === n} onClick={() => onNiveau(n)} />
        ))}
      </div>
    </div>
  )
}
