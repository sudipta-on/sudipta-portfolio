// src/components/Contact.jsx
import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { SiResearchgate } from 'react-icons/si';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';


gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef();
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setAlertVisible(true);
          setTimeout(() => setAlertVisible(false), 3000); 
          form.current.reset();
        },
        (error) => {
          alert('Failed to send. Try again.');
          console.error(error.text);
          setTimeout(() => setStatus(null), 3000);
        }
      );
  };

  return (
    <section id="contact" className="mt-10 max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md p-10 text-white hover:shadow-[0_0_40px_rgba(100,0,255,0.2)]">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        
        <div>
          <h1 className="text-3xl font-bold text-white text-center mb-4">
             Contact <span className="text-cyan-400">Me </span>
          </h1> 
          {alertVisible && (
          <div className="mb-4 bg-green-500 text-white text-center py-3 rounded-lg shadow-md transition-all duration-500">
            ✅ Message sent successfully!
          </div>
            )}

          <h4 className="font-semibold mb-2 py-5">Let's Work Together</h4>
          <p className="mb-6 text-gray-300">
            Feel free to reach out! Whether it’s a research collaboration, academic query, or a cool project idea — I’m all ears.
          </p>


          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-6 text-lg text-green-400">
  <a
    href="https://wa.me/919883429797"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-green-300 transition-colors"
  >
    <FaWhatsapp className="text-xl" />
    <span className="text-white">+91 98834 29797</span>
  </a>

  <a
    href="mailto:sudiptam.iitkgp.phy@gmail.com"
    className="flex items-center gap-2 hover:text-green-300 transition-colors"
  >
    <FaEnvelope className="text-xl" />
    <span className="text-white">sudiptam.iitkgp.phy@gmail.com</span>
  </a>
</div>



          {/* Social Icons */}
          <div className="flex space-x-4 mt-14">
            <a href="https://github.com/your-username" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/your-id/" target="_blank"><FaLinkedin /></a>
            <a href="https://scholar.google.com/citations?user=XXXX" target="_blank"><FaGoogle /></a>
            <a href="https://www.researchgate.net/profile/Sudipta-Majumder-3" target="_blank"><SiResearchgate /></a>
          </div>
        </div>

        {/* Right Form Section */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4 mb-4">
          <input
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
            required
            className="w-full px-4 py-3 bg-transparent border border-slate-500/30 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
            required
            className="w-full px-4 py-3 bg-transparent border border-slate-500/30 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter Your Subject"
            className="w-full px-4 py-3 bg-transparent border border-slate-500/30 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Enter Your Message"
            className="w-full px-4 py-3 bg-transparent border border-slate-500/30 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium text-white hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.6)]"
          >
            Submit
          </button>
        </form>
      </div>

    
    </section>
  );
};

export default Contact;

