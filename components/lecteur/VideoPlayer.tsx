import type { Lecon } from '@/types'

type VideoPlayerProps = {
  lecon: Lecon
}

function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : null
}

export function VideoPlayer({ lecon }: VideoPlayerProps) {
  const embedUrl = lecon.videoUrl ? getYouTubeEmbedUrl(lecon.videoUrl) : null

  return (
    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-ww-surface">
      {embedUrl ? (
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title={lecon.titre}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : lecon.videoUrl ? (
        <video
          className="w-full h-full object-cover"
          controls
          poster={lecon.posterUrl || undefined}
          src={lecon.videoUrl}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-ww-text-muted">
          <div className="w-16 h-16 rounded-full border-2 border-ww-border-light flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-sm text-center max-w-xs leading-relaxed">
            Vidéo à intégrer
          </p>
          {lecon.posterUrl && (
            <img
              src={lecon.posterUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
          )}
        </div>
      )}
    </div>
  )
}
