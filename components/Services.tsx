
import React from 'react';

const services = [
  {
    date: 'Phase 1',
    title: 'Discovery & Strategy',
    description:
      'We kick off with a collaborative session to uncover your brand’s story, audience, and goals. Together, we define success and map out a clear roadmap for your project.',
  },
  {
    date: 'Phase 2',
    title: 'Wireframing & Creative Direction',
    description:
      'I structure your story visually using wireframes and moodboards, ensuring the layout flows naturally. This phase sets the foundation for engaging, user-focused experiences.',
  },
  {
    date: 'Phase 3',
    title: 'Story-Driven Web Design (UI/UX)',
    description:
      'I translate your narrative into high-fidelity, visually captivating designs. Using Figma, every color, motion, and interaction is intentional, creating a digital experience that feels alive and memorable.',
  },
  {
    date: 'Phase 4',
    title: 'Frontend Development & No-Code Integration',
    description:
      'I bring your designs to life using a mix of hand-coded solutions (HTML, CSS, JavaScript, TypeScript, React) and modern no-code tools like Webflow for faster, responsive, and high-performance websites.',
  },
  {
    date: 'Phase 5',
    title: 'Launch & Handoff',
    description:
      'Your website goes live! I provide a personalized walkthrough video showing how to manage and update your site, empowering you to maintain your story with confidence.',
  },
  {
    date: 'Phase 6',
    title: 'Maintenance & Support',
    description:
      'I stay on board for a free month of maintenance and small updates, ensuring your website continues running smoothly while keeping your story front and center.',
  },
  {
    date: 'Phase 7',
    title: 'Optimization & Growth',
    description:
      'Beyond launch, I analyze performance and user behavior to find opportunities for improvement. Using data-driven tweaks and UX enhancements, your website grows, converts more, and evolves with your story.',
  },
];




const ServiceItem: React.FC<{ item: typeof services[0]; index: number }> = ({ item, index }) => {
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


const Services: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="text-center mb-16">
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white">How We’ll Build Your Story <br /> <span className="text-[#32E875]">Step by Step.</span></h2>
        <p className="max-w-2xl mx-auto text-slate-400 mt-4">
            Every project starts with understanding your story. From strategy to launch, I craft digital experiences with care, clarity, and a focus on results that truly resonate.
        </p>

      </div>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
        <div className="space-y-16">
          {services.map((item, index) => (
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

export default Services;
