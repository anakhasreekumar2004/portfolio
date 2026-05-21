import React from "react";
function Skills() {
  return (

<section className="px-6 py-24 bg-gradient-to-b from-[#020617] via-[#0f172a] to-black text-white">

  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="flex items-center justify-between mb-14 flex-wrap gap-4">
      <div>
        <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-2">
          What I Use
        </p>

        <h2 className="text-5xl font-extrabold">
          Skills
        </h2>
      </div>

      <div className="w-32 h-[2px] bg-gradient-to-r from-cyan-400 to-pink-500"></div>
    </div>

    {/* Skills Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

      {/* Skill Card */}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 p-6 text-center backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <h3 className="relative z-10 text-xl font-bold text-cyan-300 group-hover:text-white transition">
          HTML
        </h3>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 p-6 text-center backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:border-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <h3 className="relative z-10 text-xl font-bold text-pink-300 group-hover:text-white transition">
          CSS
        </h3>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 p-6 text-center backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.25)]">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <h3 className="relative z-10 text-xl font-bold text-yellow-300 group-hover:text-white transition">
          JavaScript
        </h3>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 p-6 text-center backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(96,165,250,0.25)]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <h3 className="relative z-10 text-xl font-bold text-blue-300 group-hover:text-white transition">
          React
        </h3>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 p-6 text-center backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:border-green-400 hover:shadow-[0_0_30px_rgba(74,222,128,0.25)]">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <h3 className="relative z-10 text-xl font-bold text-green-300 group-hover:text-white transition">
          C Programming
        </h3>
      </div>

    </div>

  </div>

</section>
  );
}
export default Skills;