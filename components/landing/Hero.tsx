'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'

const avatarInitiales = ['MK', 'TR', 'SD', 'JB']

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-16 pb-24 px-8">

      {/* Image de fond */}
      <Image
        src="https://plus.unsplash.com/premium_photo-1682096753944-875d4f37c8d4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Professionnel du sport-santé en action"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
      />

      {/* Overlay sombre pour garder le texte lisible */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenu au-dessus de l'image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-3xl mx-auto w-full"
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

        <p className="text-ww-text-muted text-lg leading-relaxed max-w-125 mb-10">
          La plateforme de formation continue pour les kinésithérapeutes et
          professionnels de l&apos;APA qui refusent de stagner.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4 mb-10">
          <Link
            href="/cours"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm transition-all duration-200 hover:bg-ww-text-soft active:scale-[0.98]"
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
                className="w-9 h-9 border-2 border-ww-bg"
              />
            ))}
          </div>
          <div>
            <p className="text-white text-sm font-medium">
              Rejoint par plus de 2&nbsp;000 kinés et professionnels de l&apos;APA
            </p>
            <p className="text-ww-text-muted text-xs italic">Sans engagement</p>
          </div>
        </div>
      </motion.div>

    </section>
  )
}
