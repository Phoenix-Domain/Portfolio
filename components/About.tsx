
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/headshot/600/700" 
              alt="Batubo Victory" 
              className="rounded-2xl w-full h-auto"
            />
            <div className="absolute -inset-2 border-2 border-[#9B30FF]/50 rounded-2xl -z-10 transform rotate-2"></div>
          </div>
        </div>
        <div className="md:col-span-3">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">A Self-Taught Builder With a Vision Beyond Pixels</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            I didn’t start with a fancy degree or agency title. I started with curiosity — and the belief that design should solve problems and spark emotion.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Over time, I’ve built my own path — blending design, code, and storytelling into digital experiences that look sharp and feel effortless.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            My approach is simple: understand the human behind the brand, then translate their story into a digital space that earns trust, clicks, and loyalty.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            I don’t just <span className='text-[#32E875]'>build websites.</span><br />I <span className='text-[#32E875] font-bold'>build digital experiences</span> people remember.
          </p>
          <a href="#contact" className="px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold hover:bg-[#9B30FF] hover:border-[#9B30FF] transition-all duration-300">
            See What I Can Build for You
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
