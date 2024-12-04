import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' }, // Aggiunto link alla home
    { id: 'menu', label: 'Menù', path: '/menu' },
    { id: 'reservations', label: 'Prenotazioni', path: '/reservations' },
    { id: 'events', label: 'Eventi', path: '/events' },
    { id: 'about', label: 'Chi Siamo', path: '/about' },
    { id: 'contact', label: 'Contatti', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-5xl font-bold text-white">
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-2xl">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="text-white hover:text-amber-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/reservations"
            className="hidden md:block px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
          >
            Prenota un Tavolo
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 absolute w-full"
          >
            <nav className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="block py-3 text-white hover:text-amber-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/reservations"
                className="block mt-4 px-6 py-2 bg-amber-500 text-white text-center rounded-full hover:bg-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Prenota un Tavolo
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
