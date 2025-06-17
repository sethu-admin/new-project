export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-end items-center px-8 py-6 text-[#FAF3E0] font-semibold tracking-wide">
      <ul className="flex space-x-8 uppercase text-sm">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  )
}
