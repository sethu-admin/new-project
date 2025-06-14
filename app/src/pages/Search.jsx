import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'

const cities = ['Delhi','Mumbai','Bengaluru','Chennai','Kolkata','Hyderabad','Pune','Jaipur']

export default function Search() {
  const [mode, setMode] = useState('bus')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate('/seats')
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-8 space-y-6">
      <div className="flex space-x-4">
        <button onClick={() => setMode('bus')} className={`px-4 py-2 rounded-full ${mode==='bus'?'bg-purple-700':'bg-white/20'}`}>Bus</button>
        <button onClick={() => setMode('train')} className={`px-4 py-2 rounded-full ${mode==='train'?'bg-purple-700':'bg-white/20'}`}>Train</button>
      </div>
      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md space-y-4 w-full max-w-md">
        <div>
          <label className="text-sm">From</label>
          <input list="cities" value={from} onChange={e=>setFrom(e.target.value)} className="w-full p-2 bg-black/40 rounded" />
        </div>
        <div>
          <label className="text-sm">To</label>
          <input list="cities" value={to} onChange={e=>setTo(e.target.value)} className="w-full p-2 bg-black/40 rounded" />
        </div>
        <Motion.button whileHover={{scale:1.05}} className="w-full bg-pink-600 py-2 rounded" onClick={handleSearch}>Search</Motion.button>
      </div>
      <datalist id="cities">
        {cities.map(c=> <option key={c} value={c} />)}
      </datalist>
      <Link to="/" className="text-sm text-purple-300 hover:underline">Back</Link>
    </div>
  )
}
