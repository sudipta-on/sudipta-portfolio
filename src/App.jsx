// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Research from './components/ResearchInterests';
import Navbar from './components/Navbar';
import Publications from './components/Publications';
import Layout from './components/Layout';
import Experience from './components/Experience';
// import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Layout>
      <Navbar/>
      <Hero />
      <About />
      <Research />
      <Education />
      <Experience />
      <Publications/>
      {/* <Gallery /> */}
      <Contact />
      <Footer />

      </Layout>
    </div>
  );
}

export default App;
