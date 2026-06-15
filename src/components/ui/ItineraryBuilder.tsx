import { useState } from 'react';
import { motion, Reorder } from 'framer-motion';
import { Plane, Hotel, Utensils, Sprout, Car, Trash2, Plus, ArrowRight } from 'lucide-react';

const activityIcons = {
  transport: <Plane className="w-5 h-5" />,
  accommodation: <Hotel className="w-5 h-5" />,
  dining: <Utensils className="w-5 h-5" />,
  wellness: <Sprout className="w-5 h-5" />,
  activity: <Car className="w-5 h-5" />
};

const ItineraryBuilder = () => {
  const [items, setItems] = useState([
    { id: '1', type: 'transport', title: 'Private Jet to Malé', time: '09:00 AM' },
    { id: '2', type: 'accommodation', title: 'Aurelia Ocean Reserve', time: '02:00 PM' },
    { id: '3', type: 'wellness', title: 'Sunset Meditation', time: '05:30 PM' },
    { id: '4', type: 'dining', title: 'Underwater Dining Experience', time: '08:00 PM' },
  ]);

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <section className="py-32 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-luxury-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4"
            >
              Craft Your Journey
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Itinerary Builder</h2>
            <p className="text-white/60">Drag and reorder your bespoke luxury experience.</p>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-3xl border-luxury-gold/20">
            <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-4">
              {items.map((item) => (
                <Reorder.Item
                  key={item.id}
                  value={item}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between group cursor-grab active:cursor-grabbing hover:border-luxury-gold/50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-luxury-gold border border-luxury-gold/30">
                      {activityIcons[item.type as keyof typeof activityIcons]}
                    </div>
                    <div>
                      <span className="text-luxury-gold text-[10px] tracking-widest uppercase mb-1 block">{item.time}</span>
                      <h4 className="text-white font-medium">{item.title}</h4>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="opacity-0 group-hover:opacity-100 p-2 text-white/40 hover:text-red-400 transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </Reorder.Item>
              ))}
            </Reorder.Group>

            <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between pt-8 border-t border-white/10">
              <button className="flex items-center gap-2 text-luxury-gold hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold">
                <Plus className="w-4 h-4" /> Add Experience
              </button>
              <button className="px-8 py-4 bg-luxury-gold text-primary flex items-center gap-3 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors">
                Finalize Itinerary <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItineraryBuilder;
