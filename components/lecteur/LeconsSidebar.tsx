'use client'

import Link from 'next/link'
import { CheckCircle, Play, Lock } from '@phosphor-icons/react'
import type { Cours } from '@/types'

type LeconsSidebarProps = {
  cours: Cours
  leconSlugCourante: string
}

export function LeconsSidebar({ cours, leconSlugCourante }: LeconsSidebarProps) {
  const toutesLecons = cours.chapitres.flatMap((ch) => ch.lecons)
  const indexCourant = toutesLecons.findIndex((l) => l.slug === leconSlugCourante)
  const LECONS_COMPLETEES = Math.floor(toutesLecons.length * 0.23)
  const progression = Math.round((LECONS_COMPLETEES / toutesLecons.length) * 100)

  let leconGlobalIndex = 0

  return (
    <aside className="w-full h-full flex flex-col bg-[#0F0F0F] border-l border-[#1F1F1F]">
      {/* Titre du cours */}
      <div className="p-5 border-b border-[#1F1F1F]">
        <p className="font-display text-white text-lg tracking-wide leading-tight">
          {cours.titre.toUpperCase()}
        </p>

        {/* Barre de progression */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[#A0A0A0] text-xs">Progression</span>
            <span className="text-[#A0A0A0] text-xs">{progression}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-[#1F1F1F] overflow-hidden">
            <div
              className="h-full rounded-full bg-[#FF6B1A]"
              style={{ width: `${progression}%` }}
            />
          </div>
        </div>
      </div>

      {/* Liste des chapitres et leçons */}
      <div className="flex-1 overflow-y-auto">
        {cours.chapitres.map((ch, chIdx) => (
          <div key={chIdx}>
            <p className="px-5 py-3 text-[#A0A0A0] text-xs uppercase tracking-widest border-b border-[#1F1F1F] bg-[#0A0A0A]">
              {ch.titre}
            </p>
            {ch.lecons.map((lecon) => {
              const idx = leconGlobalIndex++
              const isTerminee = idx < LECONS_COMPLETEES
              const isCourante = lecon.slug === leconSlugCourante

              return (
                <Link
                  key={lecon.slug}
                  href={`/cours/${cours.slug}/lecon/${lecon.slug}`}
                  className={`flex items-center gap-3 px-5 py-3.5 border-b border-[#1F1F1F]/50 transition-colors ${
                    isCourante
                      ? 'bg-[#161616] border-l-2 border-l-[var(--accent-color,#FF6B1A)]'
                      : 'hover:bg-[#111111]'
                  }`}
                >
                  {isTerminee ? (
                    <CheckCircle size={16} className="text-[#A0A0A0] shrink-0" weight="fill" />
                  ) : isCourante ? (
                    <Play size={16} className="text-white shrink-0" weight="fill" />
                  ) : (
                    <Play size={16} className="text-[#A0A0A0] shrink-0" />
                  )}
                  <span
                    className={`text-xs flex-1 leading-snug ${
                      isTerminee
                        ? 'text-[#A0A0A0]'
                        : isCourante
                        ? 'text-white font-medium'
                        : 'text-[#F5F5F5]'
                    }`}
                  >
                    {idx + 1}. {lecon.titre}
                  </span>
                  <span className="text-[#A0A0A0] text-xs shrink-0">{lecon.duree} min</span>
                </Link>
              )
            })}
          </div>
        ))}
      </div>
    </aside>
  )
}
