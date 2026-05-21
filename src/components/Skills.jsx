import React from "react";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "C Programming",
    "C++",
    "Python",
    "Git & GitHub",
    "Responsive Design",
  ];

  return (
    <section className="w-full px-6 py-24 text-white">
      
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-3">
            What I Use
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Skills
          </h2>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-2xl px-6 py-8 text-center bg-black/20 hover:-translate-y-1 hover:border-gray-400 transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold tracking-wide text-white">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;