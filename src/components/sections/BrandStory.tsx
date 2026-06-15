import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const BrandStory = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="py-32 bg-luxury-ivory text-primary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div 
              style={{ y }}
              className="w-[80%] md:w-[60%] lg:w-[80%] aspect-[3/4] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop"
                alt="Brand Heritage"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 max-w-xl"
          >
            <p className="text-luxury-gold tracking-[0.2em] uppercase text-sm font-semibold mb-6">
              Our Heritage
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-8 leading-tight">
              A Legacy of <br /> Timeless Elegance
            </h2>
            <p className="text-primary/70 text-lg leading-relaxed mb-8">
              For over half a century, Aurelia has been synonymous with the pinnacle of luxury hospitality. What began as a single historic estate has blossomed into a global collection of extraordinary sanctuaries.
            </p>
            <p className="text-primary/70 text-lg leading-relaxed mb-12">
              We believe that true luxury lies in the unseen details—the anticipation of a guest's need, the perfectly curated environment, and the profound respect for the culture and nature surrounding our properties.
            </p>
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg" alt="Founder Signature" className="w-48 opacity-60 mb-4" style={{ filter: 'invert(1)'}} />
            <p className="tracking-widest uppercase text-xs font-semibold">Founder, Aurelia Hotels</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BrandStory;
