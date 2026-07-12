import { AppleIntelligence } from './apple-intelligence'

type PreviewCardProps = {
  label: string
  position: 'top' | 'bottom'
  description: string
}

export function PreviewCard({
  label,
  position,
  description,
}: PreviewCardProps) {
  return (
    <article className="relative min-h-[440px] overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
      <AppleIntelligence position={position} />

      <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-9">
        <div className="flex items-center justify-between text-xs font-medium tracking-[0.14em] text-black/35 uppercase">
          <span>{label}</span>
          <span>Tailwind CSS</span>
        </div>

        <div>
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-lg font-semibold tracking-[-0.05em] text-white shadow-lg">
            AI
          </div>
          <h2 className="text-2xl font-semibold tracking-[-0.035em]">
            边界流光
          </h2>
          <p className="mt-2 text-sm leading-6 text-black/50">{description}</p>
        </div>
      </div>
    </article>
  )
}
