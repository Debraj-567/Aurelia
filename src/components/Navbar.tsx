import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from './ui/MagneticButton';

const navLinks = [
  { name: 'Destinations', path: '/destinations' },
  { name: 'Hotels', path: '/hotels' },
  { name: 'Villas', path: '/villas' },
  { name: 'Experiences', path: '/experiences' },
  { name: 'Dining', path: '/dining' },
  { name: 'Wellness', path: '/wellness' },
  { name: 'Offers', path: '/offers' },
  { name: 'Membership', path: '/membership' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'bg-primary/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-heading font-semibold text-luxury-gold tracking-widest z-50">
          AURELIA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm uppercase tracking-widest text-luxury-ivory hover:text-luxury-gold transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right Icons & CTA */}
        <div className="hidden xl:flex items-center space-x-6">
          <button className="text-luxury-ivory hover:text-luxury-gold transition-colors duration-300">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-luxury-ivory hover:text-luxury-gold transition-colors duration-300">
            <User className="w-5 h-5" />
          </button>
          <MagneticButton>
            <button className="px-6 py-2 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-primary transition-all duration-300 text-sm tracking-widest uppercase">
              Book Now
            </button>
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-luxury-ivory z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.5 }}
            className="fixed inset-0 bg-primary/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-heading text-luxury-ivory hover:text-luxury-gold transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <button className="mt-8 px-8 py-3 bg-luxury-gold text-primary tracking-widest uppercase text-sm font-semibold">
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
