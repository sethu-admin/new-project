import Navbar from '../components/Navbar'
import WelcomeHero from '../components/WelcomeHero'

export default function Welcome() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#FF9F1C] to-[#FF612F] overflow-hidden">
      <Navbar />
      <WelcomeHero />
    </div>
  )
}
