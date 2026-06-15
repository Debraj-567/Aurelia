import { motion } from 'framer-motion';

const WellnessRetreats = () => {
  return (
    <section className="py-32 bg-[#F8F5F0] text-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-luxury-emerald/5 transform translate-x-4 translate-y-4"></div>
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop"
              alt="Luxury Spa"
              className="w-full h-[600px] md:h-[700px] object-cover relative z-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2 max-w-xl"
          >
            <p className="text-luxury-emerald tracking-[0.2em] uppercase text-sm font-semibold mb-6">
              Serenity & Renewal
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-8 leading-tight">
              Wellness Beyond <br /> Luxury
            </h2>
            <p className="text-primary/70 text-lg leading-relaxed mb-10">
              Immerse yourself in transformative sanctuaries designed to rejuvenate mind, body, and spirit. 
              Our holistic programs combine ancient healing traditions with modern science in the world's most peaceful environments.
            </p>

            <ul className="space-y-6 mb-12">
              {[
                'Award-winning Spa Rituals',
                'Guided Yoga & Meditation',
                'Ancient Ayurvedic Healing',
                'Personalized Wellness Plans'
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-center gap-4 text-primary/80"
                >
                  <span className="w-8 h-[1px] bg-luxury-emerald"></span>
                  <span className="tracking-wide uppercase text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>

            <button className="px-8 py-4 bg-luxury-emerald text-white tracking-widest uppercase text-sm font-semibold hover:bg-primary transition-colors duration-300">
              Explore Wellness
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WellnessRetreats;
