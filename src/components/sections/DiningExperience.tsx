import { motion } from 'framer-motion';

const DiningExperience = () => {
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
              Culinary Artistry
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading text-white"
            >
              Exceptional Dining
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex gap-8"
          >
            <p className="text-white/60 max-w-sm text-sm">
              Savor Michelin-starred menus crafted by world-renowned chefs. From rare vintage cellars to immersive local gastronomy.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 relative h-[500px] lg:h-[700px] group cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop"
              alt="Fine Dining"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end">
              <span className="text-luxury-gold uppercase tracking-widest text-xs font-semibold mb-3">Signature Restaurant</span>
              <h3 className="text-3xl md:text-5xl font-heading text-white mb-4">L'Atelier Paris</h3>
              <p className="text-white/80 max-w-md mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                A symphony of French culinary technique paired with the rarest global ingredients.
              </p>
            </div>
          </motion.div>

          {/* Secondary Features */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative h-[230px] lg:h-[334px] group cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2670&auto=format&fit=crop"
                alt="Wine Cellar"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <h4 className="text-2xl font-heading text-white">Private Cellars</h4>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative h-[230px] lg:h-[334px] group cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop"
                alt="Chef Experience"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <h4 className="text-2xl font-heading text-white">Chef's Table</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningExperience;
