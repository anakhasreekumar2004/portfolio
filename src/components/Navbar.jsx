import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-2xl border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-3xl font-black tracking-[4px] bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent cursor-pointer">
          ANAKHA
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-[17px] font-medium">

          {/* HOME */}
          <li className="relative group cursor-pointer">
            <a
              href="#home"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </a>

            <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-full"></div>
          </li>

          {/* ABOUT */}
          <li className="relative group cursor-pointer">
            <a
              href="#about"
              className="hover:text-pink-400 transition duration-300"
            >
              About
            </a>

            <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-pink-400 transition-all duration-500 group-hover:w-full"></div>
          </li>

          {/* EDUCATION */}
          <li className="relative group cursor-pointer">
            <a
              href="#education"
              className="hover:text-purple-400 transition duration-300"
            >
              Education
            </a>

            <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-500 group-hover:w-full"></div>
          </li>

          {/* SKILLS */}
          <li className="relative group cursor-pointer">
            <a
              href="#skills"
              className="hover:text-cyan-400 transition duration-300"
            >
              Skills
            </a>

            <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-500 group-hover:w-full"></div>
          </li>

          {/* CONTACT */}
          <li className="relative group cursor-pointer">
            <a
              href="#contact"
              className="hover:text-pink-400 transition duration-300"
            >
              Contact
            </a>

            <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-pink-400 transition-all duration-500 group-hover:w-full"></div>
          </li>

        </ul>

        {/* BUTTON */}
        <button className="hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-semibold hover:scale-105 transition duration-500 shadow-[0_0_30px_rgba(34,211,238,0.5)]">
          Hire Me
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl cursor-pointer text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-black/90 backdrop-blur-2xl ${
          open ? "max-h-96 py-8" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-xl">

          <li>
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="hover:text-pink-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#education"
              onClick={() => setOpen(false)}
              className="hover:text-purple-400 transition duration-300"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#skills"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="hover:text-pink-400 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>
      </div>

    </nav>
  );
}

export default Navbar;