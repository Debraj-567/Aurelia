import { motion } from 'framer-motion';

const PrivateVillas = () => {
  return (
    <section className="py-32 bg-[#0a0f1c] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 md:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-gold tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-4"
          >
            Ultimate Seclusion
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-white"
          >
            Private Villas Collection
          </motion.h2>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full h-[600px] md:h-[800px] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2670&auto=format&fit=crop"
              alt="Luxury Villa"
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-0 left-0 w-full z-20 p-8 md:p-16 flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="max-w-xl">
                <h3 className="text-4xl md:text-6xl font-heading text-white mb-6">The Imperial Villa</h3>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  A multi-level architectural masterpiece offering panoramic ocean views, a private infinity pool, dedicated butler service, and exclusive beach access.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {['3 Bedrooms', 'Private Pool', 'Personal Chef', 'Helipad'].map((amenity) => (
                    <span key={amenity} className="px-4 py-2 border border-white/20 text-white text-xs uppercase tracking-widest backdrop-blur-md bg-white/5">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
              <button className="px-8 py-4 bg-luxury-gold text-primary tracking-widest uppercase text-sm font-semibold hover:bg-white transition-colors duration-300 whitespace-nowrap">
                Reserve Villa
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrivateVillas;
