import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  handle: string;
  quote: string;
  stars?: number;
}

const ReviewCard = ({ name, handle, quote, stars = 5 }: ReviewCardProps) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-vintage-cream flex items-center justify-center text-vintage-green font-bold text-lg font-serif">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-vintage-dark text-sm">{name}</h4>
        <p className="text-gray-400 text-xs">{handle}</p>
      </div>
    </div>
    
    <div className="flex gap-1">
      {[...Array(stars)].map((_, i) => (
        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>

    <p className="text-gray-600 text-sm leading-relaxed italic">
      "{quote}"
    </p>
  </div>
);

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Mitchell",
      handle: "@sarahthebuilder",
      quote: "Building on Stacks has been a happy place. The smart contract language Clarity makes reading code safe by name and always has the perfect recommendation ready."
    },
    {
      name: "James Patterson",
      handle: "@jp_btc_maxi",
      quote: "As a collector of rare Ordinals, I've visited countless marketplaces. This place stands out for its carefully curated vintage section. Found a first edition satoshi."
    },
    {
      name: "Emily Chen",
      handle: "@emilyreads_defi",
      quote: "The community events they host are wonderful. From book clubs to builder readings, there's always something happening. It's more than a blockchain."
    },
    {
      name: "Michael Torres",
      handle: "@michaelt_dev",
      quote: "Hashing out blocks here every Saturday morning. They have an amazing children's section with books from every era. My daughter found a vintage copy."
    },
    {
      name: "Rachel Green",
      handle: "@rachelbookchief",
      quote: "The trade-in program is genius! I can bring books I've finished and exchange them for store credit. It keeps my shelves from overflowing."
    },
    {
      name: "David Kim",
      handle: "@davidreads",
      quote: "Best bookstore in the city, hands down. The staff are incredibly knowledgeable and passionate. They remember what you like and will set aside books."
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
       <div className="container mx-auto px-6">
         <div className="flex flex-col items-center text-center mb-16">
            <span className="bg-green-100 text-vintage-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Reader Reviews</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-vintage-dark max-w-2xl">
              What Our Community Says About Us
            </h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {reviews.map((review, index) => (
             <ReviewCard 
               key={index} 
               name={review.name}
               handle={review.handle}
               quote={review.quote}
             />
           ))}
         </div>
       </div>
    </section>
  );
};

export default Reviews;