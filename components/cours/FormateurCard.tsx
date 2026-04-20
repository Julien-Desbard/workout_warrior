import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'
import { getInitials } from '@/lib/utils'
import type { Formateur } from '@/types'

type FormateurCardProps = {
  formateur: Formateur
}

export function FormateurCard({ formateur }: FormateurCardProps) {
  return (
    <div className="flex gap-6 p-6 border border-[#1F1F1F] rounded-xl">
      {formateur.avatarUrl ? (
        <img
          src={formateur.avatarUrl}
          alt={formateur.nom}
          className="w-[120px] h-[120px] rounded-full object-cover shrink-0"
        />
      ) : (
        <MediaPlaceholder
          initials={getInitials(formateur.nom)}
          rounded
          className="w-[120px] h-[120px] shrink-0 text-2xl"
        />
      )}
      <div>
        <p className="font-display text-white text-2xl tracking-wide mb-1">
          {formateur.nom.toUpperCase()}
        </p>
        <p className="text-[#A0A0A0] text-sm mb-3">{formateur.titre}</p>
        <p className="text-[#F5F5F5] text-sm leading-relaxed mb-3">
          {formateur.bio}
        </p>
        <p className="text-[#A0A0A0] text-xs">
          {formateur.nbCours} cours publiés
        </p>
      </div>
    </div>
  )
}
