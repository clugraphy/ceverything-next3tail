export default function NavBar() {
  return(
    <nav className="flex items-center justify-between py-4">
      <p className="text-2xl font-bold text-white">C Everything Studio</p>
      <div className="flex">
        <a href="/api/logout" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Login</a>
        <a href="/api/logout" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Logout</a>
      </div>
    </nav>
  )
}
