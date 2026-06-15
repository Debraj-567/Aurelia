import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-32 bg-luxury-ivory text-primary relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
              Exclusive Invitations
            </h2>
            <p className="text-primary/70 text-lg leading-relaxed max-w-xl mx-auto">
              Subscribe to the Aurelia journal to receive curated travel inspiration, exclusive offers, and invitations to private events.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative w-full md:w-96">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent border-b border-primary/30 py-4 px-2 outline-none focus:border-primary transition-colors text-primary placeholder-primary/50"
                required
              />
            </div>
            <button 
              type="submit"
              className="group flex items-center justify-center gap-4 px-8 py-4 bg-primary text-white tracking-widest uppercase text-sm font-semibold hover:bg-luxury-gold hover:text-primary transition-colors duration-300 mt-4 md:mt-0"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-primary/40 text-xs mt-8"
          >
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
