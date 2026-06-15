import { motion } from 'framer-motion';
import { Anchor, Wind, Utensils, Sprout, Compass, Sparkles } from 'lucide-react';
import yacht from '../../assets/experiences/yacht.jpg';
import helicopter from '../../assets/experiences/helicopter.jpg';
import desertDining from '../../assets/experiences/desert-dining.jpg';
import spa from '../../assets/experiences/spa.jpg';

const experiences = [
  {
    title: 'Private Yacht Charter',
    icon: <Anchor />,
    image: yacht,
    price: 'From $5,500'
  },
  {
    title: 'Helicopter Alpine Tour',
    icon: <Wind />,
    image: helicopter,
    price: 'From $3,200'
  },
  {
    title: 'Royal Desert Dining',
    icon: <Utensils />,
    image: desertDining,
    price: 'From $1,800'
  },
  {
    title: 'Holistic Spa Retreat',
    icon: <Sprout />,
    image: spa,
    price: 'From $1,200'
  }
];

const ExperienceMarketplace = () => {
  return (
    <section className="py-32 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-luxury-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4"
            >
              Curated Excellence
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Experience Marketplace</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-luxury-gold uppercase tracking-widest text-xs font-semibold border-b border-luxury-gold pb-1">
            Browse All <Compass className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
              </div>

              <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-luxury-gold border border-white/20">
                  {exp.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-luxury-gold mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span className="text-[10px] uppercase tracking-[0.2em]">Exclusive</span>
                  </div>
                  <h4 className="text-2xl font-heading text-white mb-4">{exp.title}</h4>
                  <div className="flex justify-between items-center pt-6 border-t border-white/10">
                    <span className="text-white/60 text-xs uppercase tracking-widest">{exp.price}</span>
                    <button className="text-luxury-gold text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">Reserve</button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceMarketplace;
