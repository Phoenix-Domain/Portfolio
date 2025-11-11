
import React from 'react';
import { FigmaIcon, HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, TypescriptIcon, TailwindIcon, GithubIcon, VercelIcon, NetlifyIcon } from './icons/AllIcons';

const tools = [
  { name: 'Figma', icon: <FigmaIcon /> },
  { name: 'HTML', icon: <HtmlIcon /> },
  { name: 'CSS', icon: <CssIcon /> },
  { name: 'JavaScript', icon: <JavascriptIcon /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'TypeScript', icon: <TypescriptIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  { name: 'GitHub', icon: <GithubIcon /> },
  { name: 'Vercel', icon: <VercelIcon /> },
  { name: 'Netlify', icon: <NetlifyIcon /> },
];

const ToolCard: React.FC<{ tool: typeof tools[0] }> = ({ tool }) => {
    return (
        <div className="shrink-0 w-[180px] h-[100px] flex flex-col items-center justify-center bg-white/5 rounded-2xl border border-white/10 p-4 mx-4 hover:bg-white/10 transition-colors duration-300">
            <div className="w-10 h-10 mb-2 text-slate-300">{tool.icon}</div>
            <span className="text-sm">{tool.name}</span>
        </div>
    );
}

const ToolsCarousel: React.FC = () => {
  const extendedTools = [...tools, ...tools]; // Duplicate for seamless loop

  return (
    <section id="tools" className="py-24 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white">My Creative Stack.</h2>
        <p className="max-w-xl mx-auto text-slate-400 mt-4">The blend of tools that bring ideas to life.</p>
      </div>
      <div className="relative w-full">
        <div className="flex animate-[scroll_40s_linear_infinite]">
          {extendedTools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-[#0A0A0A] to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-[#0A0A0A] to-transparent"></div>
      </div>
    </section>
  );
};

export default ToolsCarousel;
