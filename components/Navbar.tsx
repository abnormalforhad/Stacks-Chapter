import React, { useState, useEffect } from 'react';
import { Layers, Search, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ecosystem', href: '#collections' },
    { name: 'Our Story', href: '#story' },
    { name: 'Community', href: '#reviews' },
    { name: 'Start Building', href: '#visit' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // Height of navbar + padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-vintage-cream/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="https://stacks.co/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-vintage-brown text-white p-1.5 rounded transition-transform group-hover:scale-105">
            <Layers size={20} />
          </div>
          <span className="font-serif font-bold text-xl tracking-tight">Stacks &amp; Bitcoin</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-gray-600 hover:text-vintage-green transition-colors font-sans uppercase tracking-wide cursor-pointer select-none"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 cursor-pointer">
            <Search size={20} />
          </button>
          <a 
            href="https://www.stacks.co/build/get-started"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 cursor-pointer"
          >
            <ShoppingBag size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-vintage-cream border-t border-gray-100 shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-serif font-medium text-gray-800 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;