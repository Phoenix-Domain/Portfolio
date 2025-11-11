
import React from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    summary: 'A story of seamless shopping, from browsing to checkout.',
    imageUrl: 'https://picsum.photos/seed/project1/800/600',
    span: 'md:col-span-2',
  },
  {
    title: 'Creative Agency Site',
    summary: 'Crafting a bold online presence for a design-forward brand.',
    imageUrl: 'https://picsum.photos/seed/project2/600/800',
    span: 'md:row-span-2',
  },
  {
    title: 'SaaS Dashboard',
    summary: 'Translating complex data into an intuitive user interface.',
    imageUrl: 'https://picsum.photos/seed/project3/800/600',
    span: '',
  },
  {
    title: 'Portfolio Showcase',
    summary: 'A minimal and elegant platform for artists to display work.',
    imageUrl: 'https://picsum.photos/seed/project4/800/600',
    span: '',
  },
];

const PortfolioCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
  return (
    <div className={`group relative rounded-2xl overflow-hidden ${project.span}`}>
      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <h3 className="font-poppins text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-300 mb-4">{project.summary}</p>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="px-5 py-2 text-sm bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold border border-white/30 hover:bg-white/30">
            View Case Study
          </button>
        </div>
      </div>
    </div>
  );
};


const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24">
      <div className="text-center mb-16">
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white">Work That Speaks Louder Than Words.</h2>
        <p className="max-w-xl mx-auto text-slate-400 mt-4">Each project I build tells a story — of growth, creativity, and results.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         <div className="md:col-span-2 md:row-span-2">
            <PortfolioCard project={projects[0]}/>
         </div>
         <div className="md:row-span-2">
            <PortfolioCard project={projects[1]}/>
         </div>
         <div>
            <PortfolioCard project={projects[2]}/>
         </div>
         <div>
            <PortfolioCard project={projects[3]}/>
         </div>
      </div>
    </section>
  );
};

export default Portfolio;
