import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* ANIMATED GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#06b6d4,transparent_25%),radial-gradient(circle_at_bottom_right,#ec4899,transparent_25%)] opacity-30 animate-pulse"></div>

      {/* MOVING GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid"></div>

      

      {/* HERO SECTION */}
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 pt-32 relative z-10">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 text-center lg:text-left animate-slideUp">

          <p className="text-cyan-400 uppercase tracking-[8px] mb-4">
            Welcome To My World
          </p>

          <h1 className="text-6xl lg:text-8xl font-black leading-tight">

            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-text">
              Anakha
            </span>

            <br />

            <span className="text-white">
              Sreekumar
            </span>

          </h1>

          <h2 className="mt-6 text-2xl lg:text-4xl text-slate-300">
            Creative Frontend Developer ✨
          </h2>

          <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">
            I create futuristic websites with smooth animations,
            modern UI and immersive user experiences.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex gap-6 justify-center lg:justify-start">

            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 font-semibold hover:scale-110 transition duration-500 shadow-[0_0_40px_#06b6d4]">
              Explore
            </button>

            <button className="px-8 py-4 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-500">
              Contact Me
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex justify-center mt-20 lg:mt-0 relative">

          {/* OUTER GLOW */}
          <div className="absolute w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

          {/* ROTATING CIRCLE */}
          <div className="absolute w-[420px] h-[420px] border border-cyan-400 rounded-full animate-spinSlow"></div>

          <div className="absolute w-[320px] h-[320px] border border-pink-500 rounded-full animate-reverseSpin"></div>

          {/* GLASS CARD */}
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-[40px] p-5 animate-float shadow-[0_0_50px_rgba(34,211,238,0.4)]">

           <img src=" ./image/imgsss.jpeg"
  alt="profile"
  className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-slate-700/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
/>


          </div>


        </div>

      </div>

    </div>
  );
}

export default Home;