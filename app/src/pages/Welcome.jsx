import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedBackground from '../components/AnimatedBackground'

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-8">
      <AnimatedBackground />
      <Motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-4xl font-bold">
        Welcome to RedRoute
      </Motion.h1>
      <div className="space-x-4">
        <Link to="/search" className="px-6 py-2 bg-purple-700 rounded-full hover:bg-purple-600">Start Your Journey</Link>
        <Link to="/account" className="px-6 py-2 bg-white/20 rounded-full hover:bg-white/40">Account</Link>
      </div>
    </div>
  )
}
