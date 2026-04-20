export function SideBanner() {
  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
      aria-hidden="true"
    >
      <div className="flex items-center justify-center w-8 h-32">
        <span
          className="font-display text-xs tracking-[0.3em] text-[#2A2A2A] select-none whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          INSCRIPTION
        </span>
      </div>
    </div>
  )
}
