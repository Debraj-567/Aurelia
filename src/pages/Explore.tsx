import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowRight, Thermometer, Wind, Sun } from 'lucide-react';
import ItineraryBuilder from '../components/ui/ItineraryBuilder';
import DestinationComparison from '../components/ui/DestinationComparison';
import maldives from '../assets/destinations/maldives.jpg';
import santorini from '../assets/destinations/santorini.jpg';
import swissAlps from '../assets/destinations/swiss-alps.jpg';
import tuscany from '../assets/destinations/tuscany.jpg';

const destinations = [
  {
    name: 'Maldives',
    region: 'Indian Ocean',
    image: maldives,
    description: 'A sanctuary of crystalline waters and private island isolation.',
    climate: 'Tropical',
    temp: '28°C',
    bestTime: 'Nov - Apr'
  },
  {
    name: 'Santorini',
    region: 'Greece',
    image: santorini,
    description: 'Iconic white-washed architecture overlooking the volcanic caldera.',
    climate: 'Mediterranean',
    temp: '24°C',
    bestTime: 'Apr - Oct'
  },
  {
    name: 'Swiss Alps',
    region: 'Switzerland',
    image: swissAlps,
    description: 'Majestic peaks and alpine luxury retreats.',
    climate: 'Alpine',
    temp: '-2°C',
    bestTime: 'Dec - Mar'
  },
  {
    name: 'Tuscany',
    region: 'Italy',
    image: tuscany,
    description: 'Rolling hills, ancient vineyards, and Renaissance heritage.',
    climate: 'Continental',
    temp: '22°C',
    bestTime: 'May - Sep'
  }
];

const Explore = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div className="bg-primary overflow-x-hidden">
      <div ref={containerRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {destinations.map((dest, i) => (
              <section key={i} className="w-screen h-screen flex-shrink-0 relative flex items-center px-6 md:px-24">
                {/* Background Image with Parallax */}
                <div className="absolute inset-0 z-0">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary/80"></div>
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-2 text-luxury-gold uppercase tracking-[0.3em] text-xs mb-6">
                      <MapPin className="w-4 h-4" />
                      <span>{dest.region}</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-heading text-white mb-8 leading-none">
                      {dest.name}
                    </h2>
                    <p className="text-white/70 text-lg md:text-xl max-w-md mb-12 leading-relaxed">
                      {dest.description}
                    </p>
                    
                    <button className="flex items-center gap-4 text-luxury-gold uppercase tracking-widest text-sm group">
                      Explore Experiences <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col justify-end lg:items-end gap-8"
                  >
                    <div className="glass-panel p-8 rounded-2xl w-full max-w-sm space-y-6">
                      <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <div className="flex items-center gap-3 text-white/60">
                          <Thermometer className="w-5 h-5" />
                          <span className="text-xs uppercase tracking-widest">Temperature</span>
                        </div>
                        <span className="text-white font-medium">{dest.temp}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <div className="flex items-center gap-3 text-white/60">
                          <Wind className="w-5 h-5" />
                          <span className="text-xs uppercase tracking-widest">Climate</span>
                        </div>
                        <span className="text-white font-medium">{dest.climate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 text-white/60">
                          <Sun className="w-5 h-5" />
                          <span className="text-xs uppercase tracking-widest">Best Time</span>
                        </div>
                        <span className="text-white font-medium">{dest.bestTime}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="absolute bottom-12 right-12 text-white/20 font-heading text-[20vh] leading-none pointer-events-none select-none">
                  0{i + 1}
                </div>
              </section>
            ))}
          </motion.div>
        </div>
      </div>
      
      <DestinationComparison />
      <ItineraryBuilder />
    </div>
  );
};

export default Explore;
