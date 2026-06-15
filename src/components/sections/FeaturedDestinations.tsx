import { motion } from 'framer-motion';
import maldives from '../../assets/destinations/maldives.jpg';
import santorini from '../../assets/destinations/santorini.jpg';
import swissAlps from '../../assets/destinations/swiss-alps.jpg';
import jaipurPalace from '../../assets/destinations/jaipur-palace.jpg';
import bali from '../../assets/destinations/bali.jpg';
import tuscany from '../../assets/destinations/tuscany.jpg';

const destinations = [
  { name: 'Maldives', image: maldives },
  { name: 'Santorini', image: santorini },
  { name: 'Swiss Alps', image: swissAlps },
  { name: 'Jaipur Palace', image: jaipurPalace },
  { name: 'Bali', image: bali },
  { name: 'Tuscany', image: tuscany },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-32 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-luxury-gold tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-4"
            >
              Discover the World
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading text-white"
            >
              Featured Destinations
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block mt-8 md:mt-0 text-luxury-ivory hover:text-luxury-gold transition-colors tracking-widest uppercase text-sm border-b border-luxury-gold pb-1"
          >
            View All Destinations
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-[500px] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-heading text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {dest.name}
                </h3>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <p className="text-white/80 text-sm mb-4">Discover exclusive properties and curated experiences.</p>
                  <span className="text-luxury-gold tracking-widest uppercase text-xs font-semibold">Explore Property</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
