import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>About | Sudipta Majumder</title>
  <meta name="description" content="About Sudipta Majumder - Quantum ML, Quantum State Control Quantum Machine Learning IIT Kharagpur Research Scholar Sonjoy Majumder Sudipto KGP Sudipto-Quantum  " />
  <meta property="og:title" content="About Sudipta" />
  <meta property="og:description" content="Quantum computing portfolio and research Quantum machine Learning Quantum State Control IIT KGP" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/og-image.png" />
  <meta name="keywords" content="Quantum Computing, Quantum ML, QML, State Control, Research Portfolio, Sudipta Majumder, Sudipto Majumder, Machine Learning, IIT Kharagpur, Kharagpur, Soudipto, S Majumder, Quantum State Control, Sonjoy Majumder, Sudipta Physics, west Bengal" />
</Helmet>


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section id="about" className="relative z-10 py-6 px-6 bg-transparent">
      <div
        ref={aboutRef}
        className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md p-10 text-white hover:shadow-[0_0_40px_rgba(100,0,255,0.2)]"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="space-y-5 text-base sm:text-lg text-slate-200 leading-relaxed justify-center">
            <p>
            I’m <strong className="text-purple-400">Sudipta Majumder</strong>, a Research Scholar in the Department of Physics at 
            <span className="text-blue-400"> IIT Kharagpur</span>, specializing in <span className="text-cyan-400">Quantum Machine Learning</span>.
            </p>

            <p className="mt-4">
            My research focuses on <span className="text-cyan-300">Quantum Control Theory</span>, 
            <span className="text-pink-400"> Quantum State Preparation</span>, and 
            <span className="text-green-300">Machine Learning Techniques</span> applied to quantum systems — aiming to 
            bridge the gap between abstract theory and computational realization.
            </p>

            <p className="mt-4">
            Under the guidance of <span className="text-cyan-400">Prof. Sonjoy Majumder</span>, I am exploring how 
            data-driven models and optimization frameworks can reveal new insights into 
            the behavior and control of quantum systems.
            </p>

            <p className="mt-4">
            I’m passionate about building interactive simulations and visual tools for quantum behavior, 
            experimenting with hybrid quantum-classical architectures.
            </p>

            <p className="mt-4">
            Always open to <span className="text-purple-300 font-medium">collaborative QML projects</span> and 
            <span className="text-green-300 font-medium">research opportunities</span> at the intersection of 
            physics, coding, and machine intelligence.
            </p>

        </div>

        {/* Skills List - vertical, center-aligned */}
        <div className="max-w-5xl mx-auto px-6">
        <h4 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="text-purple-400">Core</span> Skills
        </h4>

        {/* Skill Category - Quantum Computing */}
        <div data-aos="fade-up" className="mb-10">
          <div className="flex flex-wrap gap-3">
            {[
              "Qiskit",
              "QuTiP",
              "Quantum Circuit Simulation",
              "Reinforcement Learning",
              "Quantum State Optimization",
            ].map((skill, idx) => (
              <span
                key={idx}
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-sm px-4 py-1 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        </div>
        {/* <div className="mt-10">

          <h3 className="text-xl text-cyan-400 font-semibold text-center mb-4">🛠 Core Skills</h3>
          <p className="space-y-3 justify-center text-cyan-300 text-base">
            Python 
            Qiskit
            📊 Nonlinear Time Series Analysis
            🌌 Quantum Harmonic Oscillator Simulation
            🔬 Open Quantum System Modeling (SME/ME)
            🌀 Entanglement & Quantum Tunneling Studies
          </p>
        </div> */}
      </div>
      
    </section>
  );
};

export default About;
