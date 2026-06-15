import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Romance',
    description: 'Private sunset dinners and secluded villas.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Adventure',
    description: 'Helicopter tours and alpine expeditions.',
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Wellness',
    description: 'Holistic healing and ancient spa rituals.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Fine Dining',
    description: 'Michelin-starred chefs and rare vintages.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Family Escapes',
    description: 'Curated journeys for all generations.',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2638&auto=format&fit=crop',
  },
  {
    title: 'Cultural Journeys',
    description: 'Immersive local heritage tours.',
    image: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?q=80&w=2752&auto=format&fit=crop',
  },
];

const CuratedExperiences = () => {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-gold tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-4"
          >
            Immersive Journeys
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-white"
          >
            Curated Experiences
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative h-[450px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-700 z-10"></div>
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 z-20 p-10 flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-heading text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {exp.title}
                </h3>
                <div className="h-0 overflow-hidden group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <p className="text-white/80 text-sm mb-6 max-w-xs">{exp.description}</p>
                  <span className="text-luxury-gold tracking-widest uppercase text-xs font-semibold border-b border-luxury-gold pb-1">
                    Discover
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedExperiences;
