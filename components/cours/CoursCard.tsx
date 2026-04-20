import Link from 'next/link'
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'
import { formatDuration } from '@/lib/utils'
import type { Cours } from '@/types'

type CoursCardProps = {
  c: Cours
}

export function CoursCard({ c }: CoursCardProps) {
  return (
    <Link
      href={`/cours/${c.slug}`}
      className="relative overflow-hidden rounded-xl group block"
      style={{ height: 480 }}
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

      {/* Scale hover */}
      <div
        className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]"
        style={{ transformOrigin: 'center' }}
      >
        {c.imageUrl && (
          <img
            src={c.imageUrl}
            alt=""
            aria-hidden
            className="w-full h-full object-cover grayscale-[80%] brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
          />
        )}
      </div>

      {/* Overlay dégradé */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

      {/* Ligne orange en bas au hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B1A] z-30 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

      {/* Contenu en bas */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
        <p className="text-[#FF6B1A] text-xs uppercase tracking-[0.15em] mb-1.5">
          {c.thematique}
        </p>
        <h3 className="font-display text-white text-xl leading-tight tracking-wide mb-3">
          {c.titre}
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-[#A0A0A0] text-xs">{formatDuration(c.dureeTotal)}</span>
          <span className="text-[#A0A0A0] text-xs">·</span>
          <span
            className="text-[#A0A0A0] text-xs uppercase tracking-wide px-2 py-0.5 border border-[#2A2A2A] rounded-full"
          >
            {c.niveau}
          </span>
        </div>
      </div>
    </Link>
  )
}
