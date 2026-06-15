import { motion } from 'framer-motion';

const awards = [
  { title: "World's Best Hotel Brand", organization: "Travel + Leisure", year: "2025" },
  { title: "Five-Star Rating", organization: "Forbes Travel Guide", year: "2025" },
  { title: "Gold List", organization: "Condé Nast Traveler", year: "2024" },
  { title: "Best Luxury Spa Resort", organization: "World Spa Awards", year: "2024" },
];

const AwardsRecognition = () => {
  return (
    <section className="py-24 bg-primary border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading text-white"
          >
            Global Recognition
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center p-6"
            >
              <div className="w-16 h-16 rounded-full border border-luxury-gold/50 flex items-center justify-center mb-6">
                <span className="text-luxury-gold text-2xl font-serif">A</span>
              </div>
              <h3 className="text-lg font-heading text-white mb-2">{award.title}</h3>
              <p className="text-white/60 text-sm tracking-widest uppercase mb-1">{award.organization}</p>
              <span className="text-luxury-gold text-xs font-semibold">{award.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;
