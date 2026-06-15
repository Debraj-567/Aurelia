import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Info, Camera } from 'lucide-react';

const hotspots = [
  { id: 1, x: '25%', y: '40%', name: 'The Imperial Villa', type: 'Villa', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2670&auto=format&fit=crop' },
  { id: 2, x: '55%', y: '30%', name: 'L\'Atelier Restaurant', type: 'Dining', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop' },
  { id: 3, x: '75%', y: '60%', name: 'Royal Emerald Spa', type: 'Wellness', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop' },
  { id: 4, x: '40%', y: '75%', name: 'Private Beach Club', type: 'Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop' },
];

const InteractiveResortMap = () => {
  const [activeHotspot, setActiveHotspot] = useState<typeof hotspots[0] | null>(null);

  return (
    <section className="py-32 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-luxury-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4"
          >
            Property Navigation
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-heading text-white">Interactive Resort Map</h2>
        </div>

        <div className="relative aspect-video rounded-[40px] overflow-hidden bg-[#0a0f1c] border border-white/10 group">
          {/* Schematic Map Background */}
          <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
          
          {/* Background Image Placeholder */}
          <img 
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2568&auto=format&fit=crop" 
            alt="Resort Aerial" 
            className="w-full h-full object-cover opacity-20 grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-40" 
          />

          {/* Hotspots */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="absolute"
              style={{ left: spot.x, top: spot.y }}
            >
              <motion.button
                whileHover={{ scale: 1.2 }}
                onClick={() => setActiveHotspot(spot)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-2xl ${
                  activeHotspot?.id === spot.id ? 'bg-luxury-gold text-primary' : 'bg-white/10 text-white backdrop-blur-md border border-white/20'
                }`}
              >
                <MapPin className="w-4 h-4" />
              </motion.button>
              
              <AnimatePresence>
                {activeHotspot?.id === spot.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 glass-panel rounded-2xl overflow-hidden z-50 shadow-2xl"
                  >
                    <img src={spot.image} alt={spot.name} className="w-full h-32 object-cover" />
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-white font-medium text-sm leading-tight">{spot.name}</h4>
                        <span className="text-[10px] text-luxury-gold uppercase tracking-widest">{spot.type}</span>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <button className="flex-1 bg-white/10 hover:bg-white/20 transition-colors py-2 rounded-lg text-[10px] text-white uppercase tracking-widest flex items-center justify-center gap-2">
                          <Info className="w-3 h-3" /> Details
                        </button>
                        <button className="flex-1 bg-luxury-gold hover:bg-white transition-colors py-2 rounded-lg text-[10px] text-primary uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                          <Camera className="w-3 h-3" /> 360° View
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Map Controls */}
          <div className="absolute bottom-8 left-8 flex flex-col gap-2">
            <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all">+</button>
            <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all">-</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveResortMap;
