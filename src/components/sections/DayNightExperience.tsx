import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const DayNightExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const morningOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const afternoonOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const nightOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  return (
    <section ref={containerRef} className="h-[200vh] relative bg-primary">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Morning */}
        <motion.div style={{ opacity: morningOpacity }} className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop" alt="Morning" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h3 className="text-white font-heading text-6xl md:text-8xl italic">Golden Hour Serenity</h3>
          </div>
        </motion.div>

        {/* Afternoon */}
        <motion.div style={{ opacity: afternoonOpacity }} className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2573&auto=format&fit=crop" alt="Afternoon" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h3 className="text-white font-heading text-6xl md:text-8xl italic">Azure Midday Bliss</h3>
          </div>
        </motion.div>

        {/* Night */}
        <motion.div style={{ opacity: nightOpacity }} className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1532767153582-b1a0e5145009?q=80&w=2574&auto=format&fit=crop" alt="Night" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white font-heading text-6xl md:text-8xl italic">Celestial Midnight</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DayNightExperience;
