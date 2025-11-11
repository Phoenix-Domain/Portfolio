
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ToolsCarousel from './components/ToolsCarousel';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import Services from './components/Services';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-slate-300 font-inter relative overflow-x-hidden">
      <CursorGlow />
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-purple-900/30 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-green-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
      </div>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 md:px-10 lg:px-20">
          <Hero />
          <About />
          <Portfolio />
          <Services />
          <ToolsCarousel />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
