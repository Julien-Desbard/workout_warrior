'use client'

import { useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import { cours } from '@/data/mock'
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'
import type { Cours } from '@/types'
import { formatDuration } from '@/lib/utils'

const CARD_WIDTH = 356
const CARD_GAP = 24
const CARD_STEP = CARD_WIDTH + CARD_GAP
const SPEED = 40 // px/s

function CoursCardCarousel({ c }: { c: Cours }) {
  return (
    <Link
      href={`/cours/${c.slug}`}
      className="shrink-0 relative overflow-hidden rounded-xl group"
      style={{ width: CARD_WIDTH, height: 480 }}
    >
      {/* Image/Placeholder */}
      {c.imageUrl ? (
        <img
          src={c.imageUrl}
          alt={c.titre}
          className="absolute inset-0 w-full h-full object-cover grayscale-[80%] brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
        />
      ) : (
        <MediaPlaceholder className="absolute inset-0 w-full h-full" />
      )}

      {/* Overlay dégradé sombre vers le bas */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Contenu en bas */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-[#FF6B1A] text-xs uppercase tracking-[0.15em] mb-1.5">
          {c.thematique}
        </p>
        <h3 className="font-display text-white text-xl leading-tight tracking-wide">
          {c.titre}
        </h3>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-[#A0A0A0] text-xs">{formatDuration(c.dureeTotal)}</span>
          <span className="text-[#A0A0A0] text-xs">·</span>
          <span className="text-[#A0A0A0] text-xs uppercase tracking-wide">{c.niveau}</span>
        </div>
      </div>
    </Link>
  )
}

export function CoursCarousel() {
  const x = useMotionValue(0)
  const totalWidth = cours.length * CARD_STEP
  const isPaused = useRef(false)

  useAnimationFrame((_, delta) => {
    if (isPaused.current) return
    const current = x.get()
    const next = current - (SPEED * delta) / 1000
    // Réinitialise quand on a scrollé la moitié (données dupliquées)
    x.set(next <= -totalWidth ? 0 : next)
  })

  // Duplication pour le loop infini
  const allCours = [...cours, ...cours]

  return (
    <section className="pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 mb-10">
        <h2
          className="font-display text-white leading-none tracking-tight"
          style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
        >
          NOS COURS
        </h2>
      </div>

      <div
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => { isPaused.current = true }}
        onMouseLeave={() => { isPaused.current = false }}
      >
        <motion.div
          className="flex"
          style={{ x, gap: CARD_GAP, paddingLeft: 32, paddingRight: 32 }}
        >
          {allCours.map((c, i) => (
            <CoursCardCarousel key={`${c.slug}-${i}`} c={c} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
