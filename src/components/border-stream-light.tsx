import type { HTMLAttributes } from 'react'

type BorderStreamLightProps = HTMLAttributes<HTMLDivElement>

const lightBase =
  'absolute rounded-full blur-[20px] motion-reduce:animate-none'

export function BorderStreamLight({
  className = '',
  ...props
}: BorderStreamLightProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-0 h-[75px] [container-type:inline-size] ${className}`}
      {...props}
    >
      <div className="[transform:translate3d(0,0,0)] opacity-100">
        <div
          className={`${lightBase} top-[-75px] right-[10cqw] h-[50px] w-[40cqw] animate-border-stream-yellow bg-[#fd8c1f]`}
        />
        <div
          className={`${lightBase} inset-x-0 top-[-200px] mx-auto h-[150px] w-[40cqw] animate-border-stream-pink-one bg-[#ff3f98] opacity-50`}
        />
        <div
          className={`${lightBase} top-[-200px] right-0 left-[-25%] mx-auto h-[150px] w-[30cqw] animate-border-stream-pink-two bg-[#e9a5ff]`}
        />
        <div
          className={`${lightBase} top-[-100px] left-0 h-[75px] w-[60cqw] animate-border-stream-blue bg-[#4186fd] opacity-50`}
        />
      </div>
    </div>
  )
}
