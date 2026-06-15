import { motion } from 'framer-motion';
import BookingWidget from '../BookingWidget';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image / Video with Parallax & Zoom effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670&auto=format&fit=crop"
            alt="Luxury Resort"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-luxury-gold tracking-[0.3em] uppercase text-sm md:text-base font-semibold mb-6"
        >
          Aurelia Hotels & Resorts
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-8 leading-tight"
        >
          Extraordinary Stays. <br />
          <span className="italic font-light">Timeless Experiences.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12"
        >
          Experience handcrafted luxury across the world's most breathtaking destinations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="px-8 py-4 bg-luxury-gold text-primary tracking-widest uppercase text-sm font-semibold hover:bg-white transition-colors duration-300">
            Explore Destinations
          </button>
          <button className="px-8 py-4 border border-white text-white tracking-widest uppercase text-sm font-semibold hover:bg-white hover:text-primary transition-colors duration-300 backdrop-blur-sm">
            Book Your Stay
          </button>
        </motion.div>
      </div>

      <BookingWidget />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
      >
        <span className="text-white/60 text-xs uppercase tracking-[0.2em] mb-4">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
