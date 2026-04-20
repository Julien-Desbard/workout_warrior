import { Image, Video } from '@phosphor-icons/react/dist/ssr'

type MediaPlaceholderProps = {
  type?: 'image' | 'video'
  className?: string
  initials?: string
  rounded?: boolean
}

export function MediaPlaceholder({
  type = 'image',
  className = '',
  initials,
  rounded = false,
}: MediaPlaceholderProps) {
  const baseClasses = `flex items-center justify-center bg-[#1F1F1F] ${rounded ? 'rounded-full' : ''} ${className}`

  if (initials) {
    return (
      <div className={baseClasses}>
        <span className="text-[#A0A0A0] font-bold text-sm select-none">
          {initials}
        </span>
      </div>
    )
  }

  return (
    <div className={baseClasses}>
      <div className="flex flex-col items-center gap-1.5">
        {type === 'video' ? (
          <Video size={24} className="text-[#A0A0A0]" weight="duotone" />
        ) : (
          <Image size={24} className="text-[#A0A0A0]" weight="duotone" />
        )}
        <span className="text-[#A0A0A0] text-xs select-none">Média à intégrer</span>
      </div>
    </div>
  )
}
