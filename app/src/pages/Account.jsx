import { Link } from 'react-router-dom'

export default function Account() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h2 className="text-xl">Create Account</h2>
      <input placeholder="Name" className="p-2 bg-black/40 rounded" />
      <input placeholder="Email" className="p-2 bg-black/40 rounded" />
      <Link to="/" className="px-4 py-2 bg-purple-700 rounded">Create</Link>
    </div>
  )
}
