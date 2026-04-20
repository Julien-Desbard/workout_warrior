import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCoursParSlug, getFormateurParSlug } from '@/data/mock'
import { ChapitresList } from '@/components/cours/ChapitresList'
import { FormateurCard } from '@/components/cours/FormateurCard'
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'
import { formatDuration, getInitials } from '@/lib/utils'
import { Check, Play, CalendarBlank } from '@phosphor-icons/react/dist/ssr'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function DetailCoursPage({ params }: Props) {
  const { slug } = await params
  const c = getCoursParSlug(slug)
  if (!c) notFound()

  const formateur = getFormateurParSlug(c.formateurSlug)
  const premiereLecon = c.chapitres[0]?.lecons[0]

  const presentationEmbedUrl = (() => {
    if (!c.videoUrl) return null
    const match = c.videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
    return match ? `https://www.youtube.com/embed/${match[1]}` : null
  })()

  return (
    <div className="pt-24">
      {/* Hero 2 colonnes */}
      <div className="max-w-[1440px] mx-auto px-8 py-16 grid grid-cols-[60fr_40fr] gap-16 items-start">
        {/* Colonne gauche */}
        <div>
          <p className="text-[#FF6B1A] text-xs uppercase tracking-[0.2em] mb-4">
            {c.thematique}
          </p>
          <h1
            className="font-display text-white leading-none tracking-tight mb-5"
            style={{ fontSize: 'clamp(40px, 4vw, 64px)' }}
          >
            {c.titre.toUpperCase()}
          </h1>
          <p className="text-[#A0A0A0] text-base leading-relaxed mb-6 max-w-xl">
            {c.descriptionCourte}
          </p>

          {/* Métadonnées */}
          <div className="flex items-center gap-6 mb-5">
            <div className="flex items-center gap-1.5">
              <span className="text-[#A0A0A0] text-xs uppercase tracking-wide">Durée</span>
              <span className="text-white text-sm font-medium">{formatDuration(c.dureeTotal)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#A0A0A0] text-xs uppercase tracking-wide">Leçons</span>
              <span className="text-white text-sm font-medium">{c.nbLecons}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#A0A0A0] text-xs uppercase tracking-wide">Niveau</span>
              <span className="text-white text-sm font-medium">{c.niveau}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CalendarBlank size={14} className="text-[#A0A0A0]" />
              <span className="text-[#A0A0A0] text-xs">Mis à jour le {new Date(c.dateMaj).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
          </div>

          {/* Auteur */}
          {formateur && (
            <div className="flex items-center gap-3 mb-8">
              {formateur.avatarUrl ? (
                <img src={formateur.avatarUrl} alt={formateur.nom} className="w-8 h-8 rounded-full object-cover" />
              ) : (
                <MediaPlaceholder initials={getInitials(formateur.nom)} rounded className="w-8 h-8" />
              )}
              <span className="text-[#A0A0A0] text-sm">
                Par <span className="text-white">{formateur.nom}</span>
              </span>
            </div>
          )}

          {/* CTA */}
          {premiereLecon && (
            <Link
              href={`/cours/${c.slug}/lecon/${premiereLecon.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-[#F5F5F5] active:scale-[0.98] transition-all duration-200"
            >
              <Play size={16} weight="fill" />
              Commencer le cours
            </Link>
          )}
        </div>

        {/* Colonne droite — vidéo de présentation ou vignette */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
          {presentationEmbedUrl ? (
            <iframe
              className="w-full h-full"
              src={presentationEmbedUrl}
              title={`Présentation — ${c.titre}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : c.imageUrl ? (
            <>
              <img src={c.imageUrl} alt={c.titre} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play size={24} weight="fill" className="text-white ml-1" />
                </div>
              </div>
            </>
          ) : (
            <MediaPlaceholder type="image" className="w-full h-full" />
          )}
        </div>
      </div>

      {/* Ce que vous allez apprendre */}
      <div className="max-w-[1440px] mx-auto px-8 pb-16">
        <h2 className="font-display text-white text-3xl tracking-wide mb-8">
          CE QUE VOUS ALLEZ APPRENDRE
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {c.objectifs.map((obj, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check size={16} weight="bold" className="text-[#FF6B1A] shrink-0 mt-0.5" />
              <span className="text-[#F5F5F5] text-sm leading-relaxed">{obj}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Programme */}
      <div className="max-w-[1440px] mx-auto px-8 pb-16">
        <h2 className="font-display text-white text-3xl tracking-wide mb-8">
          PROGRAMME DU COURS
        </h2>
        <ChapitresList chapitres={c.chapitres} coursSlug={c.slug} />
      </div>

      {/* Formateur */}
      {formateur && (
        <div className="max-w-[1440px] mx-auto px-8 pb-24">
          <h2 className="font-display text-white text-3xl tracking-wide mb-8">
            VOTRE FORMATEUR
          </h2>
          <FormateurCard formateur={formateur} />
        </div>
      )}
    </div>
  )
}
