'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CaretDown, Play } from '@phosphor-icons/react'
import { formatDuration } from '@/lib/utils'
import type { Chapitre } from '@/types'

type ChapitresListProps = {
  chapitres: Chapitre[]
  coursSlug: string
}

function chapitreTotal(chapitre: Chapitre): number {
  return chapitre.lecons.reduce((s, l) => s + l.duree, 0)
}

export function ChapitresList({ chapitres, coursSlug }: ChapitresListProps) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-2">
      {chapitres.map((ch, i) => (
        <div key={i} className="border border-[#1F1F1F] rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#111111] transition-colors"
          >
            <div className="text-left">
              <p className="font-display text-white text-lg tracking-wide leading-tight">
                {ch.titre}
              </p>
              <p className="text-[#A0A0A0] text-xs mt-0.5">
                {ch.lecons.length} leçon{ch.lecons.length > 1 ? 's' : ''} · {formatDuration(chapitreTotal(ch))}
              </p>
            </div>
            <CaretDown
              size={18}
              className={`shrink-0 transition-all duration-300 ${
                open === i ? 'rotate-180 text-[#FF6B1A]' : 'text-[#A0A0A0]'
              }`}
            />
          </button>

          {open === i && (
            <div className="border-t border-[#1F1F1F]">
              {ch.lecons.map((lecon) => (
                <Link
                  key={lecon.slug}
                  href={`/cours/${coursSlug}/lecon/${lecon.slug}`}
                  className="flex items-center gap-4 px-6 py-3.5 hover:bg-[#111111] transition-colors group"
                >
                  <Play
                    size={14}
                    className="text-[#A0A0A0] shrink-0 group-hover:text-[#FF6B1A] transition-colors"
                  />
                  <span className="text-[#F5F5F5] text-sm flex-1 group-hover:text-white transition-colors">
                    {lecon.titre}
                  </span>
                  <span className="text-[#A0A0A0] text-xs shrink-0">
                    {lecon.duree} min
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
