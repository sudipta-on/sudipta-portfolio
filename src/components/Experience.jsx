// Experience.jsx
import React from 'react';
import FlipCard from './Flipcard';
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Experience | Sudipta Majumder</title>
  <meta name="description" content="Experience Sudipta Majumder - Quantum ML, Quantum State Control Quantum Machine Learning IIT Kharagpur Research Scholar Sonjoy Majumder Sudipto KGP Sudipto-Quantum  " />
  <meta property="og:title" content="Experience Sudipta" />
  <meta property="og:description" content="Quantum computing portfolio and research Quantum machine Learning Quantum State Control IIT KGP" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/og-image.png" />
  <meta name="keywords" content="Experience, Expariance, expertise, Sudip Majumder, Quantum Computing, Quantum ML, QML, State Control, Research Portfolio, Sudipta Majumder, Sudipto Majumder, Machine Learning, IIT Kharagpur, Kharagpur, Soudipto, S Majumder, Quantum State Control, Sonjoy Majumder, Sudipta Physics, west Bengal" />
</Helmet>

const experiences = [
  {
  title: 'Research Intern',
  subtitle: 'IISER Bhopal • Summer 2024',
  shortDesc: 'Explored Quantum Many-Body Problems using NetKet',
  backDescription:
    'Worked on simulating and analyzing quantum many-body problems using the NetKet framework. Focused on applying variational Monte Carlo techniques and neural network quantum states (NQS) to study spin models and phase transitions.',
  link: 'https://drive.google.com/file/d/1Kn4iohZ3EIMQp9ydTvgwjcaD8wV-rNM0/view?usp=sharing'
},
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto  text-white ">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experiences</h2>
      <div className="flex flex-wrap justify-center gap-8 ">
        {experiences.map((exp, idx) => (
          <FlipCard key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
