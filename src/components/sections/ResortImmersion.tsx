import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Play, Maximize, RotateCcw } from 'lucide-react';

const ResortImmersion = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 bg-[#0a0f1c] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-luxury-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4"
          >
            Virtual Exploration
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-heading text-white">360° Resort Immersion</h2>
        </div>

        <motion.div 
          style={{ scale, opacity }}
          className="relative aspect-video rounded-[60px] overflow-hidden shadow-2xl group cursor-none"
        >
          {/* Main Cinematic Video/Image */}
          <img 
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2670&auto=format&fit=crop" 
            alt="Resort Immersion" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s] ease-linear" 
          />
          
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 rounded-full bg-luxury-gold flex items-center justify-center text-primary shadow-2xl relative"
            >
              <Play className="w-8 h-8 fill-primary ml-1" />
              <div className="absolute inset-0 rounded-full border border-white animate-ping"></div>
            </motion.div>
            <p className="text-white uppercase tracking-[0.4em] text-xs font-bold mt-8">Enter Virtual Reality</p>
          </div>

          {/* UI Overlays */}
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Location Tag */}
          <div className="absolute top-12 left-12 glass-panel px-6 py-3 rounded-full flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-white text-[10px] uppercase tracking-widest font-bold">Live View: Santorini Retreat</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResortImmersion;
