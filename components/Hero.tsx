
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center py-20">
      <div className="relative">
        <h1 className="font-poppins text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="relative z-10 text-white">Where Your Story Becomes a</span><br />
          <span className="relative z-10 text-white glow-purple">Living Digital Experience</span>
          <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-[#9B30FF]/20 rounded-full filter blur-3xl z-0" />
        </h1>
      </div>
      <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-12">
        I’m a self-taught web designer and frontend developer crafting calm, conversion-driven websites that connect emotion with results. Every design I make has one goal — to help brands be felt, not just seen.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#work" className="px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300">
          View My Work
        </a>
        <a href="#contact" className="px-8 py-4 bg-[#32E875] text-black rounded-full font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 glow-green">
          Let’s Build Something Real
        </a>
      </div>
    </section>
  );
};

export default Hero;
