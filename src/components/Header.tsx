
import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
interface HeaderProps {
  openModal: () => void;
}
export const Header: React.FC<HeaderProps> = ({
  openModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // track current hash to mark active link
  const [activeHash, setActiveHash] = useState<string>(() => (typeof window !== 'undefined' ? window.location.hash : ''));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    // ensure initial value is set on mount
    setActiveHash(window.location.hash);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const linkBase = "transition-all duration-300 text-sm xl:text-base transform hover:scale-105";
  const activeClass = "text-[#2E8B8B] font-semibold";
  const inactiveClass = "text-[#333333]";

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-in ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-3 sm:py-4'}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div className="flex items-center animate-fade-in-left">
        <a href="/" className="flex items-center">
          <img
            src="/ooraa-logo.png"
            alt="Ooraa Debt Relief"
            className="h-8 w-auto sm:h-10 md:h-12 transition-all duration-300 hover:scale-110"
          />
        </a>
      </div>
      <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <a href="#how-it-works" onClick={() => setActiveHash('#how-it-works')} className={`${linkBase} ${activeHash === '#how-it-works' ? activeClass : inactiveClass}`}>
          How It Works
        </a>
        <a href="#success-stories" onClick={() => setActiveHash('#success-stories')} className={`${linkBase} ${activeHash === '#success-stories' ? activeClass : inactiveClass}`}>
          Success Stories
        </a>
        <a href="#about" onClick={() => setActiveHash('#about')} className={`${linkBase} ${activeHash === '#about' ? activeClass : inactiveClass}`}>
          About
        </a>
        <a href="#faq" onClick={() => setActiveHash('#faq')} className={`${linkBase} ${activeHash === '#faq' ? activeClass : inactiveClass}`}>
          FAQ
        </a>
        <a href="#contact" onClick={() => setActiveHash('#contact')} className={`${linkBase} ${activeHash === '#contact' ? activeClass : inactiveClass}`}>
          Contact
        </a>
      </nav>
      <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
        <a href="tel:8888889914" className="flex items-center text-[#1B365D] font-medium group text-sm xl:text-base transition-all duration-300 hover:scale-105">
          <Phone className="w-4 h-4 mr-2 animate-pulse" />
          <span className="hidden xl:inline">(888) 888-9914</span>
          <span className="xl:hidden">Call</span>
        </a>
        <button onClick={openModal} className="bg-[#1B365D] text-white px-3 py-2 xl:px-4 xl:py-2 rounded-md hover:bg-[#F4B942] transition-colors duration-300 text-sm xl:text-base whitespace-nowrap">
          Book Consultation
        </button>
      </div>
      <button className="lg:hidden text-[#1B365D] p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
    {/* Mobile menu */}
    {isMobileMenuOpen && <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4 sm:p-6">
      <nav className="flex flex-col space-y-4">
        <a href="#how-it-works" onClick={() => { setIsMobileMenuOpen(false); setActiveHash('#how-it-works'); }} className={`transition-colors py-2 ${activeHash === '#how-it-works' ? activeClass : inactiveClass}`}>
          How It Works
        </a>
        <a href="#success-stories" onClick={() => { setIsMobileMenuOpen(false); setActiveHash('#success-stories'); }} className={`transition-colors py-2 ${activeHash === '#success-stories' ? activeClass : inactiveClass}`}>
          Success Stories
        </a>
        <a href="#about" onClick={() => { setIsMobileMenuOpen(false); setActiveHash('#about'); }} className={`transition-colors py-2 ${activeHash === '#about' ? activeClass : inactiveClass}`}>
          About
        </a>
        <a href="#faq" onClick={() => { setIsMobileMenuOpen(false); setActiveHash('#faq'); }} className={`transition-colors py-2 ${activeHash === '#faq' ? activeClass : inactiveClass}`}>
          FAQ
        </a>
        <a href="#contact" onClick={() => { setIsMobileMenuOpen(false); setActiveHash('#contact'); }} className={`transition-colors py-2 ${activeHash === '#contact' ? activeClass : inactiveClass}`}>
          Contact
        </a>
        <div className="border-t border-gray-200 pt-4 mt-4">
          <a href="tel:8888889914" className="flex items-center text-[#1B365D] font-medium py-2">
            <Phone className="w-4 h-4 mr-2" />
            <span>(888) 888-9914</span>
          </a>
          <button onClick={() => {
            openModal();
            setIsMobileMenuOpen(false);
          }} className="bg-[#1B365D] text-white px-4 py-3 rounded-md hover:bg-[#F4B942] transition-colors w-full text-center mt-2">
            Book a Free Consultation
          </button>
        </div>
      </nav>
    </div>}
  </header>;
}