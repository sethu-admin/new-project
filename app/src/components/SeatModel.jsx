import { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Seat({ position, selected, onClick }) {
  return (
    <mesh position={position} onClick={onClick}>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshStandardMaterial color={selected ? 'red' : '#2dd4bf'} />
    </mesh>
  )
}

export default function SeatModel({ seats, onSelect }) {
  const seatMeshes = useMemo(() => {
    const arr = []
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 4; c++) {
        const idx = r * 4 + c
        arr.push({
          position: [c - 1.5, 0.2, -r],
          id: idx
        })
      }
    }
    return arr
  }, [])
  return (
    <Canvas camera={{ position: [0, 3, 5] }} style={{ height: 300 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {seatMeshes.map((s) => (
        <Seat
          key={s.id}
          position={s.position}
          selected={seats.includes(s.id)}
          onClick={() => onSelect(s.id)}
        />
      ))}
      <OrbitControls />
    </Canvas>
  )
}
