function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white border-t border-white/10">

      {/* BLUR LIGHTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-14">

          {/* BRAND */}
          <div>
            <h1 className="text-4xl font-black tracking-[5px] bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              ANAKHA
            </h1>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Creative frontend developer creating futuristic modern websites
              with premium UI design and smooth user experience.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-5 mt-8">

              <a
                href="/"
                className="w-12 h-12 rounded-full border border-cyan-400/30 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-500 hover:scale-110"
              >
                G
              </a>

              <a
                href="/"
                className="w-12 h-12 rounded-full border border-pink-400/30 flex items-center justify-center hover:bg-pink-400 hover:text-black transition duration-500 hover:scale-110"
              >
                I
              </a>

              <a
                href="/"
                className="w-12 h-12 rounded-full border border-purple-400/30 flex items-center justify-center hover:bg-purple-400 hover:text-black transition duration-500 hover:scale-110"
              >
                L
              </a>

            </div>
          </div>

          {/* LINKS */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-cyan-400">
              Quick Links
            </h2>

            <ul className="space-y-5 text-gray-400">

              <li>
                <a
                  href="#home"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-pink-400 transition duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#education"
                  className="hover:text-purple-400 transition duration-300"
                >
                  Education
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-pink-400 transition duration-300"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-pink-400">
              Contact
            </h2>

            <div className="space-y-5 text-gray-400">

              <p>📍 Kerala, India</p>

              <p>📧 anakha@example.com</p>

              <p>📞 +91 98765 43210</p>

            </div>

            {/* TOP BUTTON */}
            <a
              href="#home"
              className="inline-block mt-10 px-7 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold hover:scale-105 transition duration-500 shadow-[0_0_35px_rgba(34,211,238,0.4)]"
            >
              Back To Top ↑
            </a>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm">
            © 2026 ANAKHA. All Rights Reserved.
          </p>

          <p className="text-gray-600 text-sm">
            Designed with futuristic vibes ✨
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;