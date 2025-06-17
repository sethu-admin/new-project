export default function WelcomeHero() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen text-[#FFF8F0] px-4">
      {/* Stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-70 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Sun */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FFD29D] rounded-full opacity-80 z-0 translate-x-1/3 translate-y-1/3"></div>

      {/* Pyramids */}
      <div className="absolute bottom-0 left-10 w-0 h-0 border-l-[80px] border-r-[80px] border-b-[140px] border-transparent border-b-[#B84A00] z-10"></div>
      <div className="absolute bottom-0 left-40 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[180px] border-transparent border-b-[#DA6B00] z-20"></div>
      <div className="absolute bottom-0 left-80 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[120px] border-transparent border-b-[#A14200] z-10"></div>

      {/* Sand Dune */}
      <div className="absolute bottom-0 w-full h-[150px] bg-[#FF964F] rounded-t-[50%] z-30"></div>

      {/* Clouds */}
      <div className="absolute top-20 left-10 w-40 h-10 bg-[#FAF3E0] rounded-full opacity-20"></div>
      <div className="absolute top-32 right-10 w-60 h-12 bg-[#FAF3E0] rounded-full opacity-20"></div>

      {/* Title */}
      <div className="z-40">
        <h1 className="text-[70px] md:text-[90px] font-bold uppercase tracking-widest mb-4">Welcome</h1>
        <p className="max-w-lg text-sm md:text-base opacity-60 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet convallis erat.
        </p>
        <button className="mt-8 px-6 py-2 border border-white text-white rounded-full tracking-wide hover:shadow-md hover:bg-white hover:text-[#FF612F] transition-all">
          READ MORE
        </button>
      </div>
    </div>
  )
}
