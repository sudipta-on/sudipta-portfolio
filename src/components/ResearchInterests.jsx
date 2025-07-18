import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import QubitPlayground from './QubitPlayground';

gsap.registerPlugin(ScrollTrigger);

const interests = [
  {
    title: 'Quantum Machine Learning',
    icon: '🧠',
    desc: 'Developing algorithms at the intersection of quantum computing and machine learning to extract patterns, classify quantum states, and enhance learning models with quantum advantages.',
  },
  {
    title: 'Quantum Control & Reinforcement Learning',
    icon: '🎯',
    desc: 'Using deep reinforcement learning to optimize control protocols in open quantum systems, focusing on state preparation, error correction, and fidelity maximization.',
  },
  {
    title: 'Quantum Chemistry & Variational Algorithms',
    icon: '⚛️',
    desc: 'Applying VQE and hybrid quantum-classical methods to simulate molecular energies, electronic structures, and chemical dynamics on near-term quantum devices.',
  },
  {
    title: 'Visualization & Interactive Quantum Platforms',
    icon: '🧩',
    desc: 'Building intuitive visual tools for representing quantum behavior, state evolution, and algorithmic flows in interactive environments.',
  },
];


const ResearchInterests = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.interest-card'),
      { opacity: 0, y: 60, rotateY: 15 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 1.2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="research"
      className="relative py-24 overflow-hidden text-white"
    >

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Research Interests
        </h2>
       

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col md:flex-row gap-10 items-center">
        {/* Bloch Sphere */}
        <div className="md:w-1/2">
          <QubitPlayground />
        </div>

        {/* Interest Cards */}
        <div className="md:w-1/2 grid md:grid-cols-1 gap-6 w-full">
          {interests.map((item, idx) => (
            <div
              key={idx}
              className="interest-card relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:shadow-[0_0_20px_rgba(180,100,255,0.3)] transition-all duration-500 transform hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-slate-300 mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;
