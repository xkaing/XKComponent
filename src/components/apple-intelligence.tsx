import type { HTMLAttributes } from 'react'

type AppleIntelligenceProps = HTMLAttributes<HTMLDivElement> & {
  position?: 'top' | 'bottom'
}

const glowBase = 'absolute rounded-full blur-[20px] motion-reduce:animate-none'

const variants = {
  top: {
    frame: 'top-0',
    yellow:
      'top-[-75px] right-[10vw] h-[50px] w-[40vw] bg-[#fd8c1f] animate-apple-yellow-top',
    pinkOne:
      'top-[-200px] inset-x-0 mx-auto h-[150px] w-[40vw] bg-[#ff3f98] opacity-50 animate-apple-pink-one-top',
    pinkTwo:
      'top-[-200px] right-0 left-[-25%] mx-auto h-[150px] w-[30vw] bg-[#e9a5ff] animate-apple-pink-two-top',
    blue:
      'top-[-100px] left-0 h-[75px] w-[60vw] bg-[#4186fd] opacity-50 animate-apple-blue-top',
  },
  bottom: {
    frame: 'bottom-0',
    yellow:
      'top-[100px] left-[10vw] h-[50px] w-[40vw] bg-[#fd8c1f] animate-apple-yellow-bottom',
    pinkOne:
      'top-[125px] inset-x-0 mx-auto h-[150px] w-[40vw] bg-[#ff3f98] opacity-50 animate-apple-pink-one-bottom',
    pinkTwo:
      'top-[125px] left-0 right-[-25%] mx-auto h-[150px] w-[30vw] bg-[#e9a5ff] animate-apple-pink-two-bottom',
    blue:
      'top-[100px] right-0 h-[75px] w-[60vw] bg-[#4186fd] opacity-50 animate-apple-blue-bottom',
  },
} as const

export function AppleIntelligence({
  position = 'top',
  className = '',
  ...props
}: AppleIntelligenceProps) {
  const variant = variants[position]

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 h-[75px] overflow-hidden ${variant.frame} ${className}`}
      {...props}
    >
      <div className="translate-z-0 opacity-100">
        <div className={`${glowBase} ${variant.yellow}`} />
        <div className={`${glowBase} ${variant.pinkOne}`} />
        <div className={`${glowBase} ${variant.pinkTwo}`} />
        <div className={`${glowBase} ${variant.blue}`} />
      </div>
    </div>
  )
}
