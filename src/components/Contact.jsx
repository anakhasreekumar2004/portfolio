import React from "react";

function Contact() {
  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-6 py-20 text-white">
  <div className="relative max-w-4xl w-full overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/70 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.15)]">

    {/* Glow Effects */}
    <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-pink-500/20 blur-3xl"></div>
    <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

    <div className="relative z-10 grid md:grid-cols-2 gap-10 p-10">

      {/* Left Side */}
      <div className="flex flex-col justify-center">
        <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-3">
  
        </p>

        <h2 className="text-5xl font-extrabold leading-tight mb-6">
          Let’s Build <span className="text-pink-500">Something Amazing</span>
        </h2>

        <p className="text-slate-300 leading-relaxed">
          Have a project idea!
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-6 justify-center">

        <a
          href="mailto:anakha123@gmail.com"
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 hover:bg-cyan-400 transition duration-300"
        >
          <div>
            <p className="text-sm text-slate-400 group-hover:text-black">
              Email Me
            </p>
            <p className="text-lg font-semibold group-hover:text-black">
              anakha123@gmail.com
            </p>
          </div>

          <span className="text-2xl group-hover:text-black">↗</span>
        </a>

        <a
          href="tel:9567922384"
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 hover:bg-pink-500 transition duration-300"
        >
          <div>
            <p className="text-sm text-slate-400 group-hover:text-white">
              Call Me
            </p>
            <p className="text-lg font-semibold group-hover:text-white">
              9567922384
            </p>
          </div>

          <span className="text-2xl group-hover:text-white">↗</span>
        </a>

      </div>
    </div>
  </div>
</div>
  );
}

export default Contact;