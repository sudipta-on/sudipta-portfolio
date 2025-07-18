import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    id: 1,
    title: 'M.Sc. in Physics',
    institute: 'IIT Kharagpur',
    duration: '2023 – 2025',
    description: 'Completed my M.Sc. in Physics with a growing interest in quantum computing — this is where my journey into quantum machine learning truly began. I started exploring the fundamentals of quantum algorithms and their potential synergy with classical machine learning techniques.',
    logo: '/logos/iitkgp.png',
    color: 'bg-blue-600',
  },
  {
    id: 2,
    title: 'B.Sc. in Physics',
    institute: 'Chakdaha College, University of Kalyani',
    duration: '2020 – 2023',
    description: 'Built my core understanding of classical to quantum physics. This phase sparked my curiosity in theoretical frameworks and introduced me to computational tools like Python',
    logo: '/logos/cu.png',
    color: 'bg-purple-600',
  },
  {
    id: 3,
    title: 'Higher Secondary',
    institute: 'Gangnapur High (H.S.) School',
    duration: '2018-2020',
    description: 'Completed my higher secondary education (10+2) with a focus on science and mathematics. These formative years nurtured my logical thinking, problem-solving abilities, and laid the groundwork for my future pursuit in physics',
    logo: '/logos/cu.png',
    color: 'bg-purple-600',
  },
];

const EducationTimeline = () => {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { height: 0 },
      {
        height: '100%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="education" className="relative z-10 py-24 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto relative" ref={containerRef}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Education</h2>

        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 z-0">
          <div ref={lineRef} className="w-[3px] bg-white rounded-full h-0 transition-all duration-500"></div>
        </div>

        {/* Timeline Blocks */}
        <div className="space-y-14 relative z-10 pl-20">
          {educationData.map((edu) => (
            <div key={edu.id} className="group flex gap-6 items-start relative">
              {/* Circle Marker with Logo */}
              {/* <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center bg-slate-800">
                <img
                  src={edu.logo}
                  alt={`${edu.institute} logo`}
                  className="w-4 h-4 object-contain"
                />
              </div> */}

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 w-full transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
                  <span className="text-sm text-purple-300">{edu.duration}</span>
                </div>
                <p className="text-blue-400 font-medium">{edu.institute}</p>
                <p className="text-slate-300 mt-2 text-sm">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
