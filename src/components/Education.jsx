import React from "react";
function Education() {
  return (

<div className="px-6 py-24 bg-[#0f172a] text-white">
  <section className="max-w-5xl mx-auto">

    {/* Section Title */}
    <div className="mb-16 text-center">
      <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
        Academic Journey
      </p>

      <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
        Education
      </h2>
    </div>

    {/* Timeline Layout */}
    <div className="relative border-l border-slate-700 ml-4">

      {/* Timeline Item */}
      <div className="relative pl-12 pb-14">

        {/* Dot */}
        <div className="absolute -left-[11px] top-3 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div>

        {/* Card */}
        <div className="group bg-slate-800/60 border border-slate-700 rounded-2xl p-8 transition duration-500 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">

          {/* Top Row */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-5">
            <span className="px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
              Diploma
            </span>

            <span className="text-slate-400 text-sm">
             Batch: 2024 - 2027
            </span>
          </div>

          {/* Title */}
          <h3 className="text-3xl font-bold mb-3 group-hover:text-cyan-300 transition">
            Diploma in Computer Engineering
          </h3>

          {/* College */}
          <p className="text-slate-300 text-lg leading-relaxed">
            Women’s Polytechnic College
          </p>

          {/* Bottom Accent */}
          <div className="mt-6 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </div>

        </div>
      </div>

    </div>

  </section>
</div>
  )
}
export default Education;