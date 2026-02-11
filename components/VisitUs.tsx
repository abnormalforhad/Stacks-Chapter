import React from 'react';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';

const VisitUs = () => {
  return (
    <section id="visit" className="py-20 bg-vintage-cream">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl p-4 lg:p-6 shadow-xl flex flex-col lg:flex-row overflow-hidden min-h-[500px]">
          
          {/* Left Image Side */}
          <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full rounded-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=80" 
              alt="Person reading book in cozy nook" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-8">
              <h3 className="text-white font-serif text-4xl lg:text-5xl leading-tight">
                Step Into <br/> A World Of <br/> Stories
              </h3>
            </div>
            
            {/* Vertical Label */}
            <div className="absolute top-8 left-8 flex items-center gap-3 origin-top-left rotate-90 translate-x-4">
              <span className="h-px w-12 bg-white/60"></span>
              <span className="text-white uppercase text-xs font-bold tracking-widest whitespace-nowrap">Visit Us</span>
            </div>
          </div>

          {/* Right Content Side */}
          <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
            <h2 className="font-serif text-4xl text-vintage-dark mb-6">
              Experience The Magic Of Secondhand Books
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Visit our store and immerse yourself in a world where every book has a story to tell. Browse our extensive collection, enjoy a cup of complimentary coffee, and discover your next favorite read. Our knowledgeable staff is always ready to help you find exactly what you're looking for.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-vintage-green shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                   <h4 className="font-bold text-vintage-dark">Location</h4>
                   <p className="text-gray-600 text-sm">342 Literary Lane, Downtown District</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-vintage-green shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                   <h4 className="font-bold text-vintage-dark">Hours</h4>
                   <p className="text-gray-600 text-sm">Mon-Sat: 9am-8pm | Sun: 10am-6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-vintage-green shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                   <h4 className="font-bold text-vintage-dark">Contact</h4>
                   <p className="text-gray-600 text-sm">(555) 123-4567</p>
                </div>
              </div>
            </div>

            <a 
              href="https://stacks.co/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-vintage-green text-white py-4 rounded-xl font-medium text-lg flex items-center justify-center gap-2 hover:bg-vintage-green-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Plan Your Visit <ArrowRight size={20} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisitUs;