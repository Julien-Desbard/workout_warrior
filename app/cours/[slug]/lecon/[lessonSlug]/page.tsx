import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCoursParSlug, getLeconParSlug, getLeconSuivante } from '@/data/mock'
import { VideoPlayer } from '@/components/lecteur/VideoPlayer'
import { LeconsSidebar } from '@/components/lecteur/LeconsSidebar'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { formatDuration } from '@/lib/utils'

type Props = {
  params: Promise<{ slug: string; lessonSlug: string }>
}

export default async function LecteurPage({ params }: Props) {
  const { slug, lessonSlug } = await params
  const cours = getCoursParSlug(slug)
  if (!cours) notFound()

  const result = getLeconParSlug(slug, lessonSlug)
  if (!result) notFound()

  const { lecon, indexGlobal, total } = result
  const suivante = getLeconSuivante(slug, lessonSlug)

  return (
    <div className="flex h-screen pt-16 overflow-hidden">
      {/* Colonne principale 70% */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[#A0A0A0] text-xs mb-6">
            <Link href="/cours" className="hover:text-white transition-colors">Cours</Link>
            <span className="text-[#FF6B1A]">›</span>
            <Link href={`/cours/${slug}`} className="hover:text-white transition-colors line-clamp-1 max-w-[240px]">
              {cours.titre}
            </Link>
            <span className="text-[#FF6B1A]">›</span>
            <span className="text-white line-clamp-1 max-w-[200px]">{lecon.titre}</span>
          </nav>

          {/* Lecteur vidéo */}
          <VideoPlayer lecon={lecon} />

          {/* Titre et méta */}
          <div className="mt-6">
            <h1
              className="font-display text-white leading-none tracking-tight mb-3"
              style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}
            >
              {lecon.titre.toUpperCase()}
            </h1>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#A0A0A0] text-sm">{formatDuration(lecon.duree)}</span>
              <span className="text-[#A0A0A0] text-xs">·</span>
              <span className="text-[#A0A0A0] text-sm">
                Leçon {indexGlobal + 1} sur {total}
              </span>
            </div>
            <p className="text-[#A0A0A0] text-sm leading-relaxed max-w-2xl">
              {lecon.description}
            </p>
          </div>

          {/* Leçon suivante */}
          {suivante && (
            <div className="mt-10 flex justify-end">
              <Link
                href={`/cours/${slug}/lecon/${suivante.slug}`}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-[#F5F5F5] active:scale-[0.98] transition-all duration-200"
              >
                Leçon suivante
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar 30% */}
      <div className="w-[30%] min-w-[280px] max-w-[420px] flex-shrink-0 overflow-hidden">
        <LeconsSidebar cours={cours} leconSlugCourante={lessonSlug} />
      </div>
    </div>
  )
}
