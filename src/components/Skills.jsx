import React from "react";

function Skills() {
  return (
    <section className="w-full min-h-screen px-6 py-24 bg-[#020617] text-white overflow-hidden">
      
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

          <div className="w-32 h-[2px] bg-cyan-400"></div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {/* HTML */}
          <div className="group rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            <h3 className="text-xl font-bold group-hover:text-cyan-400 transition">
              HTML
            </h3>
          </div>

          {/* CSS */}
          <div className="group rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            <h3 className="text-xl font-bold group-hover:text-cyan-400 transition">
              CSS
            </h3>
          </div>

          {/* JavaScript */}
          <div className="group rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            <h3 className="text-xl font-bold group-hover:text-cyan-400 transition">
              JavaScript
            </h3>
          </div>

          {/* React */}
          <div className="group rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            <h3 className="text-xl font-bold group-hover:text-cyan-400 transition">
              React
            </h3>
          </div>

          {/* C Programming */}
          <div className="group rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            <h3 className="text-xl font-bold group-hover:text-cyan-400 transition">
              C Programming
            </h3>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;