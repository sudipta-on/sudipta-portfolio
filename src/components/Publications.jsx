import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const publications = [
  {
  title: "Quantum Control of Quantum State Due to Weak Measurement using Deep Reinforcement Learning",
  journal: "M.Sc. Thesis • IIT Kharagpur",
  authors: "Sudipta Majumder • Prof. Sonjoy Majumder • Sabyasachi Mukhapadhayay • Shreya Bhatt", 
  description:
    "Designed a Deep Reinforcement Learning framework to optimize quantum control strategies under weak measurement. Simulated stochastic dynamics to guide quantum state evolution toward desired targets, contributing to the understanding of real-time feedback in open quantum systems.",
  pdfLink: "#",
  bibLink: "#",
  type: "MTP",
},
  {
  title: "Chaos in Skies: A Time Series Analysis of Meteorological Parameters in Top Cities of India",
  journal: "Mini-Project",
  authors: "Sudipta Majumder • Prof. Krishna Kumar • Swarajit Dhar • Jyotinmoy Karmakar", 

  description:
    "Investigated nonlinear dynamics in urban weather patterns using chaos theory and time series techniques. Analyzed parameters like temperature, humidity, and wind speed to identify signatures of chaotic behavior across major Indian cities. Aimed at enhancing the predictability of extreme weather events through mathematical modeling.",
  pdfLink: "#",
  bibLink: "#",
  type: "Mini Project",
},
];

const Publications = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.publication-tile');

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <section id="publications" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Publications
        </h2>

        <div className="grid gap-10">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="publication-tile bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md hover:shadow-[0_0_25px_rgba(180,100,255,0.3)] transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 bg-purple-700 text-xs font-medium text-white rounded-full">
                  {pub.type}
                </span>
                <span className="text-sm text-slate-300 italic">{pub.journal}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{pub.title}</h3>
                <p className="text-sm text-slate-400 mb-2">
                <span className="font-medium text-white">Authors:</span> {pub.authors}
                </p>

              <p className="text-slate-300 mb-4">{pub.description}</p>

              <div className="flex gap-6 text-sm">
                <a href={pub.pdfLink} className="text-blue-400 hover:text-blue-300 transition-colors">
                  PDF
                </a>
                <a href={pub.bibLink} className="text-purple-400 hover:text-purple-300 transition-colors">
                  BibTeX
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-semibold text-base px-6 py-3 rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-300"
          >
            View All Publications
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
