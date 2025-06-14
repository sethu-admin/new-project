import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './index.css'

const modes = ['Bus', 'Train']

function SearchForm({ mode }) {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Searching ${mode} from ${from} to ${to} on ${date}`)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="backdrop-blur-md bg-white/10 p-6 rounded-xl flex flex-col gap-4 w-full max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm uppercase tracking-widest">From</label>
        <input
          type="text"
          className="px-3 py-2 bg-white/20 rounded-md text-black focus:outline-none"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="City"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm uppercase tracking-widest">To</label>
        <input
          type="text"
          className="px-3 py-2 bg-white/20 rounded-md text-black focus:outline-none"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="City"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm uppercase tracking-widest">Date</label>
        <input
          type="date"
          className="px-3 py-2 bg-white/20 rounded-md text-black focus:outline-none"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <motion.button
        type="submit"
        className="py-2 bg-indigo-600 rounded-md hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
      >
        Search
      </motion.button>
    </motion.form>
  )
}

const deals = [
  { id: 1, title: '50% off on first ride' },
  { id: 2, title: 'Weekend special fares' },
  { id: 3, title: 'Refer a friend and earn' },
]

function Deals() {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
      {deals.map((d) => (
        <motion.div
          key={d.id}
          className="p-4 bg-white/10 rounded-lg backdrop-blur-md"
          whileHover={{ scale: 1.05 }}
        >
          {d.title}
        </motion.div>
      ))}
    </div>
  )
}

export default function App() {
  const [mode, setMode] = useState('Bus')

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 p-4">
      <div className="mb-8 flex gap-4">
        {modes.map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 ${
              mode === m ? 'ring-2 ring-indigo-500' : ''
            }`}
          >
            {m}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <SearchForm key={mode} mode={mode} />
      </AnimatePresence>
      <Deals />
    </div>
  )
}
