
import React from 'react';

const experiences = [
  {
    date: '2021',
    title: 'First Client Project',
    description: 'Designed and built a responsive landing page for a local startup, turning a vision into a tangible digital product.',
  },
  {
    date: '2022',
    title: 'Diving into Freelance',
    description: 'Began taking on freelance projects, collaborating with entrepreneurs to build their online presence from scratch.',
  },
  {
    date: '2023',
    title: 'Mastering React',
    description: 'Transitioned to component-based architecture with React, enabling more complex and scalable web applications.',
  },
  {
    date: 'Present',
    title: 'Full-Stack Exploration',
    description: 'Expanding my skills into backend technologies to create more robust and complete digital solutions.',
  },
];

const ExperienceItem: React.FC<{ item: typeof experiences[0]; index: number }> = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  return (
    <div className="flex justify-between items-center w-full">
      {isLeft ? (
        <>
          <div className="w-5/12">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 shadow-lg">
              <h3 className="font-poppins text-lg font-bold text-[#9B30FF] mb-1">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </div>
          </div>
          <div className="relative w-2/12 flex justify-center">
            <div className="absolute w-1 h-full bg-white/10"></div>
            <div className="z-10 bg-[#32E875] text-black font-bold text-sm rounded-full w-24 h-10 flex items-center justify-center">{item.date}</div>
          </div>
          <div className="w-5/12"></div>
        </>
      ) : (
        <>
          <div className="w-5/12"></div>
          <div className="relative w-2/12 flex justify-center">
            <div className="absolute w-1 h-full bg-white/10"></div>
            <div className="z-10 bg-[#32E875] text-black font-bold text-sm rounded-full w-24 h-10 flex items-center justify-center">{item.date}</div>
          </div>
          <div className="w-5/12">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 shadow-lg">
              <h3 className="font-poppins text-lg font-bold text-[#9B30FF] mb-1">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};


const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="text-center mb-16">
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white">Experience That Counts.</h2>
        <p className="max-w-2xl mx-auto text-slate-400 mt-4">
          From late-night learning sessions to real-world client launches, every experience has shaped how I design and build — with purpose, precision, and people in mind.
        </p>
      </div>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
        <div className="space-y-16">
          {experiences.map((item, index) => (
             <div key={index} className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse justify-end' : 'justify-end'}`}>
               <div className="w-5/12"></div>
               <div className="w-5/12">
                 <div className={`bg-white/5 p-6 rounded-lg border border-white/10 shadow-lg ${index % 2 === 0 ? 'text-right' : ''}`}>
                   <p className="mb-3 text-sm font-bold text-[#32E875]">{item.date}</p>
                   <h3 className="font-poppins text-lg font-bold text-white mb-1">{item.title}</h3>
                   <p className="text-sm text-slate-400">{item.description}</p>
                 </div>
               </div>
                <div className="rounded-full bg-[#9B30FF] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 -translate-x-1/2"></div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
