import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="nav-main text-2xl flex items-center justify-around  shadow-xl sticky top-0 bg-white">
        <img src="images/logo.png" alt="logo" className="h-16 p-1 mb-2 " />
        <ul className="flex gap-5 mt-2">
          <li>
            <a href="#" className="relative hover:no-underline group">
              Menu
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#" className="relative hover:no-underline group">
              Location
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#" className="relative hover:no-underline group">
              About
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#" className="relative hover:no-underline group">
              Contact
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
        <button className="bg-red-500 p-2 h-1/2 rounded-lg">Login</button>
      </nav>
    </div>
  )
}
export default Navbar