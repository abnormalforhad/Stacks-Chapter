import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Collections from './components/Collections';
import Reviews from './components/Reviews';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-vintage-dark bg-vintage-cream selection:bg-vintage-green selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Story />
        <Collections />
        <Reviews />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}