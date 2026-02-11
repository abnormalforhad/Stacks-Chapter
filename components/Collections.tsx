import React from 'react';
import { ArrowRight } from 'lucide-react';

const CollectionCard = ({ title, count, price, image, link, isLarge = false }: { title: string, count: string, price: string, image: string, link: string, isLarge?: boolean }) => (
  <div className={`group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col ${isLarge ? 'h-full bg-gradient-to-br from-[#4A3228] to-[#2C1810] text-white' : 'h-[300px]'}`}>
    
    {isLarge ? (
      // Large "Vintage Classics" Style Card
      <div className="flex flex-col h-full relative z-10">
        {/* Full Card Link Overlay */}
        <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20 cursor-pointer" aria-label={`Explore ${title}`}></a>
        
        <div className="p-8 flex flex-col h-full pointer-events-none">
          <div className="absolute top-6 left-6 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs font-medium border border-white/20">
            Featured Collection
          </div>
          
          <div className="mt-16">
            <h3 className="font-serif text-4xl mb-4 leading-tight">Vintage<br/>Classics</h3>
            <p className="text-white/80 text-sm mb-8 leading-relaxed max-w-xs">
              Timeless masterpieces from the golden age of literature. First editions, rare prints, and beloved classics.
            </p>
          </div>

          <div className="mt-auto flex items-end justify-between border-t border-white/10 pt-6">
             <div>
               <div className="text-2xl font-serif font-bold">850+</div>
               <div className="text-xs uppercase opacity-70">Rare Titles</div>
             </div>
             <div>
               <div className="text-2xl font-serif font-bold">$12</div>
               <div className="text-xs uppercase opacity-70">Starting From</div>
             </div>
          </div>
          
          {/* Fake Button for visual affordance */}
          <div 
            className="mt-6 w-full py-3 bg-white text-vintage-brown rounded-lg font-medium flex items-center justify-center gap-2 group-hover:bg-vintage-cream transition-colors"
          >
            Explore Classics <ArrowRight size={16} />
          </div>
        </div>

        {/* Background texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
               backgroundSize: '20px 20px' 
             }}>
        </div>
      </div>
    ) : (
      // Standard Card
      <>
        {/* Image Half */}
        <div className="h-1/2 overflow-hidden relative">
          <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer block h-full w-full">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </a>
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold shadow-sm text-vintage-dark pointer-events-none">
            {count} titles
          </div>
        </div>

        {/* Content Half */}
        <div className="h-1/2 p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-xl font-medium text-vintage-dark mb-1">
              <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-vintage-green transition-colors">
                {title}
              </a>
            </h3>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">From {price}</p>
          </div>
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 border border-gray-200 rounded text-sm font-medium text-gray-600 hover:border-vintage-green hover:text-vintage-green hover:bg-green-50 transition-colors flex items-center justify-center gap-1 cursor-pointer"
          >
            Browse <ArrowRight size={14} />
          </a>
        </div>
      </>
    )}
  </div>
);

const Collections = () => {
  return (
    <section id="collections" className="py-20 bg-vintage-cream">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl lg:text-5xl text-vintage-dark mb-6">Discover Collections</h2>
        <p className="text-gray-600 max-w-2xl mb-12">
          Browse through our carefully organized sections, each filled with handpicked titles spanning every genre and interest.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[640px]">
          {/* Large Feature Column */}
          <div className="lg:col-span-1 h-[500px] lg:h-full">
            <CollectionCard 
              title="Vintage Classics" 
              count="850+" 
              price="$12" 
              image="" 
              link="https://stacks.co/explore"
              isLarge={true} 
            />
          </div>

          {/* Grid Columns */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
             <CollectionCard 
               title="Literary Fiction" 
               count="2,500+" 
               price="$8.99" 
               image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80" 
               link="https://stackssnacks.com/"
             />
             <CollectionCard 
               title="History & Biography" 
               count="1,800+" 
               price="$5.99" 
               image="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80" 
               link="https://stacks.co/blog"
             />
             <CollectionCard 
               title="Science & Nature" 
               count="1,200+" 
               price="$7.99" 
               image="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80" 
               link="https://www.stacks.co/build/get-started"
             />
             <CollectionCard 
               title="Mystery & Thriller" 
               count="3,100+" 
               price="$6.99" 
               image="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80" 
               link="https://stacks.co/learn"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;