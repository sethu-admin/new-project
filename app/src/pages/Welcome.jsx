import { motion as Motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { Button } from '@heroui/react'
import AnimatedBackground from '../components/AnimatedBackground'

export default function Welcome() {
  return (
    <div className="relative flex items-center justify-center min-h-screen text-white">
      <AnimatedBackground />
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center space-y-6 text-center backdrop-blur-lg bg-black/40 p-10 rounded-2xl"
      >
        <h1 className="text-5xl font-extrabold tracking-tight">Welcome to RedRoute</h1>
        <p className="max-w-xl text-lg opacity-80">
          Plan and book your next trip with ease. Explore routes, pick seats in 3D
          and enjoy seamless ticketing.
        </p>
        <div className="flex space-x-4">
          <Button as={RouterLink} to="/search" color="primary" variant="solid">
            Start Your Journey
          </Button>
          <Button as={RouterLink} to="/account" variant="bordered" color="secondary">
            Account
          </Button>
        </div>
      </Motion.div>
    </div>
  )
}
