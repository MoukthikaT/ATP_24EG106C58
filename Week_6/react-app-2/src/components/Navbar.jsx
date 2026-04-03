function Navbar() {
  return (
    <nav className="flex justify-between bg-cyan-200">
      <h2 className="p-6 font-bold text-black ">LOGO</h2>
      <ul className="flex gap-25 p-6 font-bold text-black">
        <li><a href="">Home</a></li>
        <li><a href="">Signup</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
