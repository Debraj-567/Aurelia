import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2549&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2832&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2832&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542314831-c6a4d142104d?q=80&w=2670&auto=format&fit=crop",
];

const LuxuryGallery = () => {
  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-luxury-gold tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-4"
        >
          Visual Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-heading text-white"
        >
          Moments of Perfection
        </motion.h2>
      </div>

      <div className="flex gap-4 px-4 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="flex-none w-[80vw] md:w-[400px] h-[500px] md:h-[600px] snap-center relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
            <img 
              src={src} 
              alt="Gallery" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default LuxuryGallery;
