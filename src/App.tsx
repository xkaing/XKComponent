import { useState } from 'react'
import { BorderStreamLight } from './components/border-stream-light'

export function App() {
  const [animationKey, setAnimationKey] = useState(0)

  return (
    <main className="min-h-screen bg-[#f5f5f7] px-5 py-8 text-[#1d1d1f] sm:px-8 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 sm:mb-14">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-black/45 uppercase">
            XK Component · 001
          </p>
          <h1 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
            Border Stream Light
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-black/55">
            四层模糊色块沿容器顶部展开，形成轻盈、连续的彩色边缘流光。
          </p>
        </header>

        <article className="relative min-h-[440px] overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <BorderStreamLight key={animationKey} />

          <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-9">
            <div className="flex items-center justify-between text-xs font-medium tracking-[0.14em] text-black/35 uppercase">
              <span>Top Border</span>
              <span>Tailwind CSS</span>
            </div>

            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-sm font-semibold tracking-[-0.05em] text-white shadow-lg">
                BSL
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                顶部边缘流光
              </h2>
              <p className="mt-2 text-sm leading-6 text-black/50">
                从容器上方进入，由蓝、紫、粉、橙四色交叠展开。
              </p>
            </div>
          </div>
        </article>

        <section
          aria-labelledby="component-settings"
          className="mt-5 flex items-center justify-between rounded-2xl border border-black/[0.06] bg-white p-5 shadow-sm"
        >
          <div>
            <h2
              id="component-settings"
              className="text-sm font-semibold text-black/80"
            >
              组件配置
            </h2>
            <p className="mt-1 text-sm text-black/45">重新播放边缘流光动画</p>
          </div>

          <button
            type="button"
            onClick={() => setAnimationKey((key) => key + 1)}
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium transition hover:border-black/20 hover:bg-black/[0.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            重播
          </button>
        </section>
      </div>
    </main>
  )
}
