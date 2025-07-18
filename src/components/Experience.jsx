// Experience.jsx
import React from 'react';
import FlipCard from './Flipcard';

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
