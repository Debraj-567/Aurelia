import { motion } from 'framer-motion';

const EliteMembership = () => {
  return (
    <section className="py-32 bg-[#0a0f1c] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c] to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1574087455823-389f417bfdc2?q=80&w=2670&auto=format&fit=crop"
          alt="Luxury Abstract"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block border border-luxury-gold px-4 py-1 mb-8">
              <span className="text-luxury-gold uppercase tracking-widest text-xs font-semibold">Invitation Only</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-8 leading-tight">
              Aurelia Elite
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
              Unlock a world of unparalleled privileges. Aurelia Elite members enjoy priority access, complimentary room upgrades, exclusive private events, and a dedicated personal concierge available 24/7.
            </p>

            <ul className="space-y-6 mb-12">
              {[
                'Guaranteed Suite Upgrades',
                'Priority Booking for Michelin Dining',
                'Private Aviation & Transfers',
                'Exclusive Invitation to Brand Events'
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-4 text-white/90"
                >
                  <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full"></span>
                  <span className="tracking-wide text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>

            <button className="px-8 py-4 bg-luxury-gold text-primary tracking-widest uppercase text-sm font-semibold hover:bg-white transition-colors duration-300">
              Join Aurelia Elite
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-80 h-[450px] bg-gradient-to-br from-gray-800 to-black p-1 rounded-2xl shadow-2xl transform rotate-3">
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 to-transparent rounded-2xl blur-xl -z-10"></div>
              <div className="w-full h-full bg-[#111] rounded-xl p-8 flex flex-col justify-between relative overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/10 rounded-full blur-3xl"></div>
                <div className="flex justify-between items-start">
                  <span className="text-luxury-gold font-heading text-xl">AURELIA</span>
                  <svg className="w-8 h-8 text-white/20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-2">Member Since</p>
                  <p className="text-white font-mono tracking-widest">2026</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-2">Elite Status</p>
                  <p className="text-luxury-gold font-serif text-2xl tracking-widest">FOUNDER</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EliteMembership;
