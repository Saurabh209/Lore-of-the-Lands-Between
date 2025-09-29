import React, { useState, useEffect } from 'react';
import { Crown, Sword, Shield, Menu, X, Flame, Star } from 'lucide-react';

import NavbarLogo from '/img/navbarLogo.png'
import NavbarLogoText from '/img/eldenRingLogo.png'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const HandleLogoClick = ()=>{
    navigate("/"),
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Show navbar after scrolling down 100px
      if (currentScrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding navbar
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'The Lands Between', href: '#lands', icon: Star },
    { name: 'Demigods', href: '#demigods', icon: Crown },
    { name: 'Great Runes', href: '#runes', icon: Flame },
    { name: 'Arsenal', href: '#arsenal', icon: Sword },
    { name: 'Covenant', href: '#covenant', icon: Shield }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
        ${isVisible
          ? 'translate-y-0  '
          : '-translate-y-full  '
        }
      `}>
        {/* Background with blur and gradient */}
        <div className="absolute inset-0 
        //bg-gradient-to-r from-black/90 via-gray-900/95 to-black/90 
        backdrop-blur-[90px] border-b border-amber-400/20">
          {/* Subtle glow effect */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
          {/* Floating particles */}
          <div className="absolute top-2 left-1/4 w-1 h-1 bg-amber-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-3 right-1/3 w-0.5 h-0.5 bg-yellow-300 rounded-full animate-pulse opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img src={NavbarLogo} alt="Logo" className="w-12 h-12 drop-shadow-lg" />
                <div className="  absolute left-[13px] top-[16px] inset-0 w-5 h-5 bg-amber-400 opacity-1 blur-sm rounded-full animate-pulse"></div>
              </div>
              <div className="relative" onClick={() =>HandleLogoClick() }   >
                <img src={NavbarLogoText} alt="Logo" className="w-auto h-12 drop-shadow-lg" />
                <div className="  absolute left-[13px] top-[16px] inset-0 w-5 h-5 bg-amber-400 opacity-1 blur-sm rounded-full animate-pulse"></div>
              </div>
              {/* <span className="text-xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                ELDEN RING
              </span> */}
            </div>

            {/* Desktop Navigation */}
            {/* <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center space-x-2 text-gray-300 hover:text-amber-300 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-amber-400/10"
                  >
                    <IconComponent className="w-4 h-4 group-hover:text-amber-400 transition-colors duration-300" />
                    <span className="font-medium">{item.name}</span>
                    <div className="w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></div>
                  </a>
                );
              })}
            </div> */}

            {/* Call to Action Button */}
            <div className="hidden md:block">
              <button className="relative px-6 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-black font-semibold rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/25">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center space-x-2">
                  <Flame className="w-4 h-4" />
                  <span>Begin Journey</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-amber-400 hover:text-amber-300 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 z-40 transition-all duration-300 ease-in-out md:hidden
        ${isMobileMenuOpen && isVisible
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
        }
      `}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className={`
          absolute top-16 left-0 right-0 bg-gradient-to-b from-gray-900/98 to-black/98 border-b border-amber-400/20 transition-transform duration-300
          ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}>
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 text-gray-300 hover:text-amber-300 transition-colors duration-300 px-4 py-3 rounded-lg hover:bg-amber-400/10 border border-transparent hover:border-amber-400/20"
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium text-lg">{item.name}</span>
                </a>
              );
            })}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-amber-400/20">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-black font-semibold rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-amber-400/25 transition-all duration-300">
                <Flame className="w-5 h-5" />
                <span>Begin Journey</span>
              </button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}