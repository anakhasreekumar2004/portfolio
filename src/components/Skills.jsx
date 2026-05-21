import React from "react";

function Education() {
  return (
    <section className="bg-black text-white py-24 px-6 m-0">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-gray-400 uppercase tracking-[0.3em] text-sm mb-3">
            Academic Journey
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Education
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-3xl mx-auto bg-[#111827] border border-gray-800 rounded-2xl p-8">

          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">

            <span className="px-4 py-1 rounded-full text-xs font-semibold uppercase bg-gray-800 text-white">
              Diploma
            </span>

            <span className="text-sm text-gray-400">
              2024 - 2027
            </span>

          </div>

          <h3 className="text-3xl font-bold mb-4">
            Diploma in Computer Engineering
          </h3>

          <p className="text-lg text-gray-300">
            Women’s Polytechnic College
          </p>

        </div>

      </div>
    </section>
  );
}

export default Education;