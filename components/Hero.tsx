import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-vintage-green"></span>
              <span className="text-vintage-green uppercase text-xs font-bold tracking-widest">Chapter & Verse</span>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] font-medium text-vintage-dark mb-6">
              Where Bitcoin Finds New <span className="italic text-vintage-green">Utility</span> Again
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-md">
              Discover timeless security and literary gems of smart contracts in our carefully curated collection of decentralized apps.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.stacks.co/build/get-started" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-vintage-green text-white px-8 py-4 rounded-full font-medium hover:bg-vintage-green-dark transition-all shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer z-20 relative"
              >
                Explore Docs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://stacks.co/" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-vintage-dark text-vintage-dark px-8 py-4 rounded-full font-medium hover:bg-vintage-dark hover:text-white transition-all cursor-pointer z-20 relative"
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative h-[500px] w-full hidden lg:block">
            {/* Main large image - Classic Library */}
            <div className="absolute left-0 top-10 w-[55%] h-[85%] rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
              <img 
                src="https://images.unsplash.com/photo-1507842217121-ad959dc1f246?auto=format&fit=crop&q=80&w=800" 
                alt="Classic Library with Ladder" 
                className="w-full h-full object-cover"
              />
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold font-serif shadow-sm">
                Est. 2017
              </div>
            </div>

            {/* Top right small image - Abstract Tech/Nodes */}
            <div className="absolute right-4 top-0 w-[40%] h-[45%] rounded-2xl overflow-hidden shadow-xl transform translate-y-4 hover:translate-y-2 transition-transform duration-500 z-0 bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-ad7117a21f78?auto=format&fit=crop&q=80&w=600" 
                alt="Blockchain Abstract" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-vintage-brown text-white px-3 py-1 rounded-lg text-xs font-medium shadow-sm">
                RARE FINDS
              </div>
            </div>

            {/* Bottom right small image - Bitcoin Layers */}
            <div className="absolute right-4 bottom-0 w-[40%] h-[45%] rounded-2xl overflow-hidden shadow-xl transform -translate-y-4 hover:-translate-y-2 transition-transform duration-500 z-20 bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1621504450162-e2bbb0292969?auto=format&fit=crop&q=80&w=600" 
                alt="Digital Network" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-white text-vintage-dark px-3 py-1 rounded-lg text-xs font-medium shadow-sm border border-gray-100">
                NEW ARRIVALS
              </div>
            </div>
          </div>

          {/* Mobile Image Fallback */}
          <div className="lg:hidden w-full h-64 rounded-2xl overflow-hidden shadow-lg relative">
            <img 
              src="https://images.unsplash.com/photo-1507842217121-ad959dc1f246?auto=format&fit=crop&q=80&w=800" 
              alt="Stacks Library" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md font-serif text-sm font-bold">
              Bitcoin L2
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;