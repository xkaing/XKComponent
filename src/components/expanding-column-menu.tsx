import { useState } from 'react'
import { MotionConfig, motion, useReducedMotion } from 'motion/react'

export type ExpandingColumnMenuItem = {
  id: string
  label: string
  title: string
  eyebrow: string
  description: string
  image: string
  imagePosition?: string
  facts?: Array<{
    label: string
    value: string
  }>
}

type ExpandingColumnMenuProps = {
  items: ExpandingColumnMenuItem[]
  className?: string
  defaultActiveIndex?: number | null
  expandedRatio?: number
  onItemSelect?: (item: ExpandingColumnMenuItem, index: number) => void
}

const smoothEase = [0.32, 0.72, 0, 1] as const

export function ExpandingColumnMenu({
  items,
  className = '',
  defaultActiveIndex = null,
  expandedRatio = 7,
  onItemSelect,
}: ExpandingColumnMenuProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    defaultActiveIndex,
  )
  const reduceMotion = useReducedMotion()

  const panelTransition = reduceMotion
    ? { duration: 0 }
    : {
        type: 'tween' as const,
        duration: 0.48,
        ease: smoothEase,
      }
  const detailEnterTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.28, ease: smoothEase }
  const detailExitTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.1, ease: 'easeOut' as const }
  const railEnterTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.24, ease: smoothEase }
  const railExitTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.1, ease: 'easeOut' as const }

  return (
    <MotionConfig reducedMotion="user">
      <nav
        aria-label="全屏栏目菜单"
        className={`relative isolate overflow-hidden bg-[#101417] text-white ${className}`}
      >
        <div className="flex h-full w-full flex-col md:flex-row">
          {items.map((item, index) => {
            const isActive = activeIndex === index
            const hasActiveItem = activeIndex !== null

            return (
              <motion.button
                key={item.id}
                type="button"
                initial={false}
                animate={{ flexGrow: isActive ? expandedRatio : 1 }}
                transition={panelTransition}
                aria-expanded={isActive}
                aria-label={`${isActive ? '收起' : '展开'} ${item.label}：${item.title}`}
                className="group relative min-h-0 min-w-0 cursor-pointer overflow-hidden border-b border-white/35 text-left outline-none last:border-b-0 focus-visible:z-40 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white md:border-r md:border-b-0 md:last:border-r-0"
                style={{ flexBasis: 0, willChange: 'flex-grow' }}
                onClick={() => {
                  setActiveIndex((currentIndex) =>
                    currentIndex === index ? null : index,
                  )

                  if (!isActive) {
                    onItemSelect?.(item, index)
                  }
                }}
              >
                <motion.img
                  alt=""
                  initial={false}
                  animate={{
                    filter: isActive
                      ? 'saturate(1)'
                      : hasActiveItem
                        ? 'saturate(0.72)'
                        : 'saturate(0.9)',
                    scale: isActive ? 1.01 : hasActiveItem ? 1.055 : 1.03,
                  }}
                  transition={panelTransition}
                  className="absolute inset-0 size-full max-w-none transform-gpu object-cover"
                  draggable="false"
                  src={item.image}
                  style={{ objectPosition: item.imagePosition ?? 'center' }}
                />

                <motion.span
                  aria-hidden="true"
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 0.34, ease: smoothEase }
                  }
                  className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,13,0.92)_0%,rgba(5,10,13,0.58)_38%,rgba(5,10,13,0.06)_76%)]"
                />
                <motion.span
                  aria-hidden="true"
                  initial={false}
                  animate={{
                    opacity: isActive ? 0 : hasActiveItem ? 0.3 : 0.12,
                  }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 0.28, ease: smoothEase }
                  }
                  className="absolute inset-0 bg-black"
                />

                <motion.span
                  aria-hidden={!isActive}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : -24,
                  }}
                  transition={
                    isActive ? detailEnterTransition : detailExitTransition
                  }
                  className="pointer-events-none absolute top-20 left-6 z-20 block max-w-[min(34rem,72%)] sm:left-10 md:top-[25%] md:left-[clamp(3rem,6vw,7rem)]"
                >
                  <span className="block text-[0.65rem] font-semibold tracking-[0.3em] text-white/60 uppercase sm:text-xs">
                    {item.eyebrow}
                  </span>
                  <span className="mt-3 block font-[Impact,'Arial_Narrow',sans-serif] text-[clamp(2.25rem,6vw,6.5rem)] leading-[0.84] tracking-[0.015em] uppercase text-shadow-lg">
                    {item.title}
                  </span>
                  <span className="mt-5 block max-w-md text-xs leading-5 text-white/78 sm:text-sm sm:leading-6">
                    {item.description}
                  </span>

                  {item.facts && item.facts.length > 0 ? (
                    <span className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                      {item.facts.map((fact) => (
                        <span key={fact.label} className="min-w-24">
                          <span className="block text-[0.6rem] tracking-[0.22em] text-white/45 uppercase">
                            {fact.label}
                          </span>
                          <span className="mt-1 block text-sm font-semibold sm:text-base">
                            {fact.value}
                          </span>
                        </span>
                      ))}
                    </span>
                  ) : null}
                </motion.span>

                <motion.span
                  initial={false}
                  animate={{
                    opacity: isActive ? 0 : 1,
                    y: isActive ? 8 : 0,
                  }}
                  transition={
                    isActive ? railExitTransition : railEnterTransition
                  }
                  className="pointer-events-none absolute right-4 bottom-4 z-20 flex items-end gap-2 drop-shadow-lg md:right-5 md:bottom-7 md:block md:[writing-mode:vertical-rl]"
                >
                  <span className="text-[0.58rem] font-semibold tracking-[0.18em] text-white/72 uppercase md:mb-3 md:text-[0.65rem]">
                    {item.eyebrow}
                  </span>
                  <span className="font-[Impact,'Arial_Narrow',sans-serif] text-xl tracking-[0.025em] uppercase sm:text-2xl md:text-[1.75rem]">
                    {item.label}
                  </span>
                </motion.span>
              </motion.button>
            )
          })}
        </div>
      </nav>
    </MotionConfig>
  )
}
