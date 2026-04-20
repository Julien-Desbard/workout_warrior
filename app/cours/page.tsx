'use client'

import { useState } from 'react'
import { cours } from '@/data/mock'
import { CoursCard } from '@/components/cours/CoursCard'
import { CoursFilters } from '@/components/cours/CoursFilters'
import type { Thematique, Niveau } from '@/types'

export default function CataloguePage() {
  const [search, setSearch] = useState('')
  const [thematique, setThematique] = useState<Thematique | 'Tout'>('Tout')
  const [niveau, setNiveau] = useState<Niveau | 'Tous niveaux'>('Tous niveaux')

  const filtered = cours.filter((c) => {
    const matchSearch =
      search === '' ||
      c.titre.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
    const matchThematique = thematique === 'Tout' || c.thematique === thematique
    const matchNiveau = niveau === 'Tous niveaux' || c.niveau === niveau
    return matchSearch && matchThematique && matchNiveau
  })

  return (
    <div className="pt-32 pb-24 px-8 max-w-[1440px] mx-auto">
      {/* En-tête */}
      <div className="mb-10">
        <h1
          className="font-display text-white leading-none tracking-tight mb-3"
          style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
        >
          CATALOGUE DES COURS
        </h1>
        <p className="text-[#A0A0A0] text-base">
          {cours.length} cours disponibles pour kinés et professionnels de l&apos;APA
        </p>
      </div>

      {/* Filtres */}
      <CoursFilters
        search={search}
        thematique={thematique}
        niveau={niveau}
        onSearch={setSearch}
        onThematique={setThematique}
        onNiveau={setNiveau}
      />

      {/* Grille */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-[#A0A0A0]">
          <p className="text-lg">Aucun cours ne correspond à votre recherche.</p>
          <button
            onClick={() => { setSearch(''); setThematique('Tout'); setNiveau('Tous niveaux') }}
            className="mt-4 text-sm text-white underline underline-offset-4"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {filtered.map((c) => (
            <CoursCard key={c.slug} c={c} />
          ))}
        </div>
      )}
    </div>
  )
}
