import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css"
function App() {
  return (
    <div className="overflow-x-hidden text-white bg-black">

      <Navbar />
<section id="home" className="min-h-screen bg-red-500">
  <Home />
</section>

<section id="about" className="min-h-screen bg-blue-500">
  <About />
</section>

<section id="education" className="min-h-screen bg-green-500">
  <Education />
</section>

<section id="skills" className="min-h-screen bg-yellow-500">
  <Skills />
</section>

<section id="contact" className="min-h-screen bg-purple-500">
  <Contact />
</section>
<Footer/>
    </div>
  );
}


export default App