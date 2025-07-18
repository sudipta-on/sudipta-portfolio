import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Modal from 'react-modal';

gsap.registerPlugin(ScrollTrigger);

const imageList = [
  'img1.jpg',
  'image2.jpg',
  'image3.png',
  // Add more image filenames here from public/gallery/
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef();

  useEffect(() => {
    // Scroll animation
    gsap.fromTo(
      galleryRef.current.querySelectorAll('.gallery-tile'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section id="photos" className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md p-10 text-white hover:shadow-[0_0_40px_rgba(100,0,255,0.2)]" ref={galleryRef}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-white font-bold text-center mb-10">Gallery</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {imageList.map((filename, index) => (
            <div
              key={index}
              className="gallery-tile cursor-pointer overflow-hidden rounded-xl hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300 bg-white/5"
              onClick={() => setSelectedImage(`../src/assets/photos/${filename}`)}
            >
              <img
                src={`../src/assets/photos/${filename}`}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Modal for fullscreen view */}
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={() => setSelectedImage(null)}
          className="fixed inset-0 flex items-center justify-center bg-black/90 z-50"
          overlayClassName="fixed inset-0 bg-black/70 z-40"
        >
          <div className="relative">
            <img src={selectedImage} alt="Enlarged" className="max-h-[100vh] max-w-full rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-0.5 right-0.5 bg-white text-black rounded-full"
            >
              ✕
            </button>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Gallery;
