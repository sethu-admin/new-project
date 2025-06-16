import { useMemo } from 'react'

export default function BackgroundScene() {
  const stars = useMemo(
    () =>
      Array.from({ length: 30 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9F1C] to-[#FF612F]" />
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"
          style={{ top: s.top, left: s.left }}
        />
      ))}
      <div className="absolute bottom-20 right-20 bg-yellow-300/80 w-48 h-48 rounded-full" />
      <div className="absolute bottom-0 w-full">
        <svg className="w-full h-40 md:h-60" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0 10 Q25 0 50 10 T100 10 V20 H0Z" fill="#f4a261" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10">
        <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[60px] border-b-[#E0A76E]" />
      </div>
      <div className="absolute bottom-10 left-32">
        <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[45px] border-b-[#D48B3A]" />
      </div>
      <div className="absolute bottom-10 left-52">
        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-[#C2792A]" />
      </div>
      <div className="absolute top-10 left-20 flex space-x-4">
        <div className="w-16 h-6 bg-white/60 rounded-full" />
        <div className="w-10 h-4 bg-white/60 rounded-full translate-y-2" />
      </div>
    </div>
  )
}
