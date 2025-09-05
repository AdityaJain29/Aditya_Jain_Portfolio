import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from './components/ui/toaster';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Aditya Jain - Frontend & Python Developer</title>
        <meta name="description" content="Aditya Jain's portfolio. A Frontend and Python Developer with experience in React.js, Python, and building responsive user interfaces." />
        <meta property="og:title" content="Aditya Jain - Frontend & Python Developer" />
        <meta property="og:description" content="Aditya Jain's portfolio. A Frontend and Python Developer with experience in React.js, Python, and building responsive user interfaces." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;