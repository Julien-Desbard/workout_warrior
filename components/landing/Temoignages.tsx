import { temoignages } from '@/data/mock'
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'

function getInitials(nom: string): string {
  return nom
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function Temoignages() {
  return (
    <section className="bg-[#111111] py-24 px-8">
      <div className="max-w-[1440px] mx-auto">
        <h2
          className="font-display text-white text-center leading-none tracking-tight mb-16"
          style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
        >
          ILS NOUS FONT CONFIANCE
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {temoignages.map((t) => (
            <div
              key={t.nom}
              className="border border-[#2A2A2A] rounded-xl p-7 flex flex-col gap-5"
            >
              <p className="text-[#F5F5F5] text-sm leading-relaxed italic flex-1">
                {t.citation}
              </p>
              <div className="flex items-center gap-3">
                {t.avatarUrl ? (
                  <img
                    src={t.avatarUrl}
                    alt={t.nom}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <MediaPlaceholder
                    initials={getInitials(t.nom)}
                    rounded
                    className="w-10 h-10 shrink-0"
                  />
                )}
                <div>
                  <p className="text-white text-sm font-medium">{t.nom}</p>
                  <p className="text-[#A0A0A0] text-xs">
                    {t.metier} — {t.ville}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#A0A0A0] text-xs mt-8 italic">
          Témoignages fictifs — maquette de présentation
        </p>
      </div>
    </section>
  )
}
