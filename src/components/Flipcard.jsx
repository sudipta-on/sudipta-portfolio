// components/FlipCard.jsx
import React, { useState } from 'react';

const FlipCard = ({ title, subtitle, shortDesc, backDescription, link }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card w-full sm:w-[300px] h-[220px] perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flip-inner ${flipped ? 'flipped' : ''}`}>
        {/* Front Side */}
        <div className="flip-front bg-white/10 backdrop-blur-md rounded-xl p-5 text-white hover:shadow-[0_0_40px_rgba(100,0,255,0.2)] transition-all duration-500 hover:scale-[1.03] transition-all duration-300">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm italic text-cyan-300 mt-1">{subtitle}</p>
            <p className="text-sm text-slate-300 mt-3 line-clamp-4">{shortDesc}</p>
            <div className="flex gap-10 text-sm py-5">
                <a href={link} className="text-blue-400 hover:text-blue-300 transition-colors">
                  PDF
                </a>
            </div>
        </div>

        {/* Back Side */}
        <div className="flip-back bg-black/30 backdrop-blur-md rounded-xl p-5 text-white hover:shadow-[0_0_40px_rgba(100,0,255,0.2)] transition-all duration-500">
          <h4 className="text-lg font-semibold mb-2">Details</h4>
          <p className="text-sm">{backDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
