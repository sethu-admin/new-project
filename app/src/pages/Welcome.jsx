import Navbar from '../components/Navbar'
import WelcomeHero from '../components/WelcomeHero'
import BackgroundScene from '../components/BackgroundScene'

export default function Welcome() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <BackgroundScene />
      <Navbar />
      <WelcomeHero />
    </div>
  )
}
