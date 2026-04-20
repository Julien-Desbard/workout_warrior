'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'

const avatarInitiales = ['MK', 'TR', 'SD', 'JB']

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-16 pb-24 px-8 max-w-[1440px] mx-auto">
      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl"
      >
        <h1
          className="font-display text-white leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(56px, 7vw, 96px)' }}
        >
          FORMEZ-VOUS AU<br />
          <span style={{ color: '#FF6B1A' }}>SPORT-SANTÉ.</span><br />
          N&apos;IMPORTE OÙ.<br />
          N&apos;IMPORTE QUAND.
        </h1>

        <p className="text-[#A0A0A0] text-lg leading-relaxed max-w-[500px] mb-10">
          La plateforme de formation continue pour les kinésithérapeutes et
          professionnels de l&apos;APA qui refusent de stagner.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4 mb-10">
          <Link
            href="/cours"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm transition-all duration-200 hover:bg-[#F5F5F5] active:scale-[0.98]"
          >
            Commencer maintenant
            <ArrowRight size={16} weight="bold" />
          </Link>
          <Link
            href="/cours"
            className="px-6 py-3 rounded-full border border-white text-white font-medium text-sm transition-all duration-200 hover:border-[#FF6B1A] hover:text-[#FF6B1A] active:scale-[0.98]"
          >
            Parcourir les cours
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {avatarInitiales.map((initials, i) => (
              <MediaPlaceholder
                key={i}
                initials={initials}
                rounded
                className="w-9 h-9 border-2 border-[#0A0A0A]"
              />
            ))}
          </div>
          <div>
            <p className="text-white text-sm font-medium">
              Rejoint par plus de 2&nbsp;000 kinés et professionnels de l&apos;APA
            </p>
            <p className="text-[#A0A0A0] text-xs italic">Sans engagement</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
