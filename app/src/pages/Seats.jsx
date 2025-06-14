import { useState } from 'react'
import SeatModel from '../components/SeatModel'
import { useNavigate } from 'react-router-dom'

export default function Seats() {
  const [selected, setSelected] = useState([])
  const navigate = useNavigate()

  const toggleSeat = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(s=>s!==id) : [...prev, id])
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-8 space-y-4 bg-white text-black">
      <h2 className="text-xl font-semibold">Choose Your Seat</h2>
      <SeatModel seats={selected} onSelect={toggleSeat} />
      <div>
        <button className="px-4 py-2 bg-gray-200 mr-4" onClick={()=>navigate(-1)}>Back</button>
        <button className="px-4 py-2 bg-purple-600 text-white" onClick={()=>navigate('/booking')}>Continue</button>
      </div>
    </div>
  )
}
