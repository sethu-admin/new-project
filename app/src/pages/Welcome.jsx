import { motion as Motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { Button } from '@heroui/react'
import AnimatedBackground from '../components/AnimatedBackground'

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-8">
      <AnimatedBackground />
      <Motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-4xl font-bold">
        Welcome to RedRoute
      </Motion.h1>
      <div className="space-x-4">
        <Button as={RouterLink} to="/search" color="primary" variant="solid">
          Start Your Journey
        </Button>
        <Button as={RouterLink} to="/account" variant="bordered" color="secondary">
          Account
        </Button>
      </div>
    </div>
  )
}
