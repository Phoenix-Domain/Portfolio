
import React from 'react';
import { GithubIcon } from './icons/AllIcons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="text-center">
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white">Let’s Create Something Meaningful.</h2>
        <p className="max-w-2xl mx-auto text-slate-400 mt-4 mb-12">
          Whether you’re a small business, startup, or agency, I’m open to freelance and contract collaborations.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-white/5 p-8 rounded-2xl border border-white/10">
        <div>
          <h3 className="font-poppins text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9B30FF]" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9B30FF]" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9B30FF]"></textarea>
            </div>
            <button type="submit" className="w-full px-8 py-4 bg-[#32E875] text-black rounded-full font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 glow-green">
              Start a Conversation
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center">
           <h3 className="font-poppins text-2xl font-bold text-white mb-6">Find Me Elsewhere</h3>
           <div className="space-y-4">
            <a href="mailto:victory.batubo@example.com" className="flex items-center space-x-4 group">
              {/* <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#9B30FF] transition-colors"><EmailIcon /></div> */}
              <span className="text-slate-300 group-hover:text-white">victory.batubo@example.com</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#9B30FF] transition-colors"><GithubIcon /></div>
              <span className="text-slate-300 group-hover:text-white">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
              {/* <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#9B30FF] transition-colors"><LinkedInIcon /></div> */}
              <span className="text-slate-300 group-hover:text-white">LinkedIn</span>
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
              {/* <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#9B30FF] transition-colors"><DribbbleIcon /></div> */}
              <span className="text-slate-300 group-hover:text-white">Dribbble</span>
            </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
