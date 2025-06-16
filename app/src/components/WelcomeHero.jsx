export default function WelcomeHero() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center mt-40 sm:mt-56 z-10">
      <h1 className="text-7xl sm:text-8xl font-bold tracking-widest text-[#FFF8F0]">WELCOME</h1>
      <p className="mt-4 max-w-xl text-[#FFF8F0]/60">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non facilisis justo.
      </p>
      <button className="mt-8 px-8 py-3 uppercase tracking-wider rounded-full border border-white text-white hover:shadow-lg transition">
        Read More
      </button>
    </div>
  )
}
