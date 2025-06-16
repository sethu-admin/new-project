import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 w-full flex justify-end p-6 z-20">
      <ul className="flex space-x-6 font-semibold text-[#FAF3E0] uppercase">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}
