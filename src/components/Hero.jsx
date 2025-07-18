import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaGoogle, FaGraduationCap, FaWhatsapp } from 'react-icons/fa';
import { SiResearchgate } from 'react-icons/si';


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 text-white overflow-hidden"
    >
      {/* Stars */}
      <div
        ref={heroRef}
        className="relative z-10 max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10"
      >
        {/* Left - Text */}
        <div className="flex-1 text-white">
          <p className="text-lg mb-2">Hello, It's Me</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Sudipta Majumder
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-cyan-400 mb-4 flex gap-2">
            And I'm a{' '}
            <Typewriter
              options={{
                strings: [
                  'Quantum Developer',
                  'QML Researcher',
                  'QML Enthusiast',
                  'Schödinger Coder',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl">
            A Quantum Computing enthusiast with deep interest in quantum systems, machine learning, and computing. 
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-6 text-cyan-400 text-xl">
            <a href="https://wa.me/919883429797" alt='Whatsapp' target="_blank"><FaWhatsapp/></a>
            <a href="https://github.com/sudipta-on" alt='Github' target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sudipta-majumder/" alt='Linkdin' target="_blank"><FaLinkedin /></a>
            <a href="https://scholar.google.com/citations?user=XXXX" alt='Google Scholar' target="_blank"><FaGraduationCap /></a>
            <a href="https://www.researchgate.net/profile/Sudipta-Majumder-3" target="_blank"><SiResearchgate /></a>
          </div>


          {/* Button */}
          <a
            href="#contact"
            className="inline-block text-white font-semibold text-base px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Right - Image */}
        <div className="flex-1 flex justify-center items-center relative ">
          <div className="w-100 h-100 rounded-full p-1 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 hover:shadow-[0_0_150px_rgba(180,120,255,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-black ">
              <img
                src="./src/assets/picofme.png"
                alt="Sudipta Majumder"
                className="object-cover w-full h-full"
              />
              
            </div>
          </div>
          
        </div>

        {/* 3d Model  */}
        {/* <div className="flex-1 flex justify-center items-center relative">
          <SplineModel />
        </div> */}

      </div>
    </section>
  );
};

export default Hero;
