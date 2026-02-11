import React from 'react';

const Story = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-2 mb-10">
           <span className="text-vintage-brown uppercase text-xs font-bold tracking-widest">Our Story</span>
           <h2 className="font-serif text-4xl lg:text-5xl text-vintage-dark">A Legacy of Digital Love</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Text Content */}
          <div className="lg:col-span-5 space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              <span className="float-left text-6xl font-serif text-vintage-brown pr-3 mt-[-10px] leading-[0.8]">F</span>
              or over a decade, Bitcoin has been the sanctuary for hodlers, collectors, and curious minds. What began as a simple peer-to-peer cash system has blossomed into a beloved foundation for the future of finance.
            </p>
            <p>
              Every block that graces our chain is personally reviewed by our passionate team of validators. We believe that secure transactions carry stories beyond their hash—the marginals, the smart contracts, the inscriptions—each one a testament to the builders who came before.
            </p>
            <p>
              Our mission extends beyond simply settling blocks. We're dedicated to preserving Bitcoin heritage, making reading accessible to all (via Proof of Transfer), and fostering a community where stories connect people across generations.
            </p>
            
            <div className="flex items-center gap-4 pt-6">
               <div className="flex -space-x-3">
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100&q=80" alt="Builder 1" className="w-full h-full object-cover" />
                 </div>
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80" alt="Builder 2" className="w-full h-full object-cover" />
                 </div>
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&h=100&q=80" alt="Builder 3" className="w-full h-full object-cover" />
                 </div>
               </div>
               <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Curated by book lovers, for builders</span>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-7 relative h-[400px] lg:h-[500px]">
             <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
               <img 
                 src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1200" 
                 alt="Library Interior" 
                 className="w-full h-full object-cover"
               />
             </div>
             
             {/* Floating Overlay Card */}
             <div className="absolute -bottom-6 lg:bottom-10 left-6 lg:-left-12 bg-vintage-green text-white p-6 lg:p-8 rounded-xl shadow-2xl max-w-xs z-10">
                <div className="text-4xl lg:text-5xl font-serif font-bold mb-2">300M+</div>
                <p className="text-vintage-cream/90 text-sm leading-relaxed">
                  Carefully curated STX tokens waiting to find their next smart contract.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;