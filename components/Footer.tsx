import React from 'react';
import { Layers, Twitter, Youtube, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vintage-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
          
          {/* Brand */}
          <div className="lg:w-1/4">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-vintage-brown p-1 rounded">
                <Layers size={20} className="text-white" />
              </div>
              <span className="font-serif font-bold text-xl">Chapter & Verse</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Preserving stories, building community since 1987. A decentralized approach to the literary arts.
            </p>
          </div>

          {/* Links Grid */}
          <div className="lg:w-2/4 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-bold mb-6 tracking-wide text-gray-200">ECOSYSTEM</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="https://stacks.co/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Stacks.co</a></li>
                <li><a href="https://stackssnacks.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Stacks Snacks</a></li>
                <li><a href="https://stacks.co/explore" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Explore Apps</a></li>
                <li><a href="https://stacks.co/learn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Learn Stacks</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 tracking-wide text-gray-200">ABOUT</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="https://stacks.co/blog" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Our Story (Blog)</a></li>
                <li><a href="https://stacks.org/about" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Foundation</a></li>
                <li><a href="https://stacks.co/events" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="https://stacks.co/community" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 tracking-wide text-gray-200">BUILD</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="https://www.stacks.co/build/get-started" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Get Started</a></li>
                <li><a href="https://docs.stacks.co/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="https://github.com/stacks-network" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://hiro.so/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Hiro Tools</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:w-1/4">
             <div className="bg-white/5 p-6 rounded-xl border border-white/10">
               <h4 className="font-serif text-lg mb-2">Join our newsletter</h4>
               <p className="text-gray-400 text-xs mb-4">Get book recommendations and ecosystem updates.</p>
               <div className="flex gap-2">
                 <input 
                   type="email" 
                   placeholder="Your email" 
                   className="bg-transparent border border-white/20 rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-vintage-green text-white placeholder:text-gray-600"
                 />
                 <button className="bg-vintage-green px-4 py-2 rounded text-sm font-bold hover:bg-green-700 transition-colors">
                   Subscribe
                 </button>
               </div>
             </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-serif italic text-gray-500 text-lg text-center md:text-left">
            "A room without books is like a body without a soul."
          </p>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-4">
              <a href="https://x.com/stacks" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="https://www.youtube.com/channel/UC3J2iHnyt2JtOvtGVf_jpHQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Youtube size={18} /></a>
              <a href="https://discord.com/invite/stacks" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Facebook size={18} /></a> {/* Using Facebook Icon for Discord as placeholder or just generic link */}
              <a href="mailto:hello@stacks.org" className="text-gray-400 hover:text-white transition-colors"><Mail size={18} /></a>
            </div>
            <p className="text-xs text-gray-600">
              © Chapter & Verse 2024. All rights reserved. Powered by Stacks.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;