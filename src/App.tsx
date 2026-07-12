import { useState } from 'react'
import { PreviewCard } from './components/preview-card'

export function App() {
  const [animationKey, setAnimationKey] = useState(0)

  return (
    <main className="min-h-screen bg-[#f5f5f7] px-5 py-8 text-[#1d1d1f] sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-black/45 uppercase">
              XK Component · 001
            </p>
            <h1 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
              Apple Intelligence
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-black/55">
              由四层模糊色块、透明度与关键帧位移叠加而成的纯 Tailwind 流光组件。
            </p>
          </div>

          <button
            type="button"
            onClick={() => setAnimationKey((key) => key + 1)}
            className="w-fit rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            重播动画
          </button>
        </header>

        <section className="grid gap-5 lg:grid-cols-2">
          <PreviewCard
            key={`top-${animationKey}`}
            label="Top"
            position="top"
            description="从视口上方进入，暖色向右扩散。"
          />
          <PreviewCard
            key={`bottom-${animationKey}`}
            label="Bottom · Mirrored"
            position="bottom"
            description="底部镜像版本，冷色从右侧抬升。"
          />
        </section>
      </div>
    </main>
  )
}
