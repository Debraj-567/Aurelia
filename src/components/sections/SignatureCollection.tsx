import { motion } from 'framer-motion';

const SignatureCollection = () => {
  return (
    <section className="py-32 bg-luxury-ivory text-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-gold tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-4"
          >
            The Masterpieces
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary"
          >
            Signature Collection
          </motion.h2>
        </div>

        {/* Block 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 h-[600px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop"
              alt="Aurelia Palace"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <p className="text-luxury-gold tracking-widest uppercase text-sm mb-4">Udaipur, India</p>
            <h3 className="text-4xl md:text-5xl font-heading mb-6">Aurelia Royal Palace</h3>
            <p className="text-primary/70 leading-relaxed mb-8">
              A meticulously restored 18th-century palace offering a glimpse into royal heritage. 
              Featuring courtyards, marble pavilions, and unparalleled service tailored to modern royalty.
            </p>
            <ul className="space-y-4 mb-10 border-t border-black/10 pt-8">
              <li className="flex items-center gap-4 text-sm tracking-wide text-primary/80 uppercase">
                <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full"></span> World Travel Awards 2025
              </li>
              <li className="flex items-center gap-4 text-sm tracking-wide text-primary/80 uppercase">
                <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full"></span> Michelin Star Dining
              </li>
              <li className="flex items-center gap-4 text-sm tracking-wide text-primary/80 uppercase">
                <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full"></span> Royal Spa Experiences
              </li>
            </ul>
            <button className="text-primary border-b border-primary pb-1 uppercase tracking-widest text-sm hover:text-luxury-gold hover:border-luxury-gold transition-colors">
              Discover Property
            </button>
          </motion.div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <p className="text-luxury-gold tracking-widest uppercase text-sm mb-4">Malé Atoll, Maldives</p>
            <h3 className="text-4xl md:text-5xl font-heading mb-6">Aurelia Ocean Reserve</h3>
            <p className="text-primary/70 leading-relaxed mb-8">
              Suspended over crystalline waters, this private island sanctuary redefines isolation. 
              Experience glass-bottomed villas, underwater dining, and undisturbed serenity.
            </p>
            <ul className="space-y-4 mb-10 border-t border-black/10 pt-8">
              <li className="flex items-center gap-4 text-sm tracking-wide text-primary/80 uppercase">
                <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full"></span> Best Island Resort
              </li>
              <li className="flex items-center gap-4 text-sm tracking-wide text-primary/80 uppercase">
                <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full"></span> Private Butler Service
              </li>
              <li className="flex items-center gap-4 text-sm tracking-wide text-primary/80 uppercase">
                <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full"></span> Marine Conservation
              </li>
            </ul>
            <button className="text-primary border-b border-primary pb-1 uppercase tracking-widest text-sm hover:text-luxury-gold hover:border-luxury-gold transition-colors">
              Discover Property
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 h-[600px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2682&auto=format&fit=crop"
              alt="Aurelia Ocean Reserve"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SignatureCollection;
