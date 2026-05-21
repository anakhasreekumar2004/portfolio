import React from "react";
function About() {
  return (
<div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white py-24 px-6">
  <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Left Side */}
    <div>
      <span className="text-pink-500 uppercase tracking-[4px] text-sm font-semibold">
        Who I Am
      </span>

      <h2 className="text-5xl font-extrabold mt-4 leading-tight">
        Passionate About
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Modern Web Development
        </span>
      </h2>

      <p className="text-slate-300 text-lg leading-8 mt-6">
        I am a Computer Engineering student passionate about web
        development, programming, and building modern UI applications.
        I enjoy exploring new technologies and continuously improving
        my skills through hands-on projects and learning.
      </p>

      <button className="mt-8 px-6 py-3 bg-pink-500 hover:bg-pink-600 transition rounded-xl font-semibold shadow-lg shadow-pink-500/30">
        Download CV
      </button>
    </div>

    {/* Right Side Card */}
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>

      <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-2xl font-bold">
            👨‍💻
          </div>

          <div>
            <h3 className="text-2xl font-bold">About Me</h3>
            <p className="text-slate-400">Frontend Developer & Student</p>
          </div>
        </div>

        <div className="space-y-4 text-slate-300">
          <div className="flex justify-between border-b border-white/10 pb-3">
            <span>Specialization</span>
            <span className="text-pink-400">Web Development</span>
          </div>

          <div className="flex justify-between border-b border-white/10 pb-3">
            <span>Focus</span>
            <span className="text-pink-400">React & UI Design</span>
          </div>

          <div className="flex justify-between">
            <span>Learning</span>
            <span className="text-pink-400">Full Stack Development</span>
          </div>
        </div>
      </div>
    </div>

  </section>
</div>
  );
}
export default About;