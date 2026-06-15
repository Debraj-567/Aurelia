import { motion } from 'framer-motion';
import { Cloud, Sun, Sunrise, Sunset, Droplets, Calendar, Music, Wine, Users } from 'lucide-react';

export const WeatherWidget = () => (
  <div className="glass-panel p-8 rounded-[40px] border-white/10 bg-white/5 backdrop-blur-2xl relative overflow-hidden group">
    {/* Animated background glow */}
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-luxury-gold/10 rounded-full blur-3xl group-hover:bg-luxury-gold/20 transition-colors duration-1000"></div>
    
    <div className="flex justify-between items-start mb-12 relative z-10">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <p className="text-luxury-gold uppercase tracking-[0.2em] text-[10px] font-bold">Live Status</p>
        </div>
        <h4 className="text-white font-heading text-3xl">Santorini, Greece</h4>
        <p className="text-white/40 text-xs mt-1">Local Time: 18:12 PM</p>
      </div>
      <div className="text-right">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sun className="text-luxury-gold w-10 h-10 ml-auto mb-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
        </motion.div>
        <span className="text-white text-4xl font-light tracking-tighter">24°C</span>
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-6 relative z-10">
      <div className="bg-white/5 p-5 rounded-[24px] border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-default group/item">
        <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold group-hover/item:bg-luxury-gold group-hover/item:text-primary transition-all duration-500">
          <Sunrise className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Sunrise</p>
          <p className="text-sm text-white font-medium">06:12 AM</p>
        </div>
      </div>
      <div className="bg-white/5 p-5 rounded-[24px] border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-default group/item">
        <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold group-hover/item:bg-luxury-gold group-hover/item:text-primary transition-all duration-500">
          <Sunset className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Sunset</p>
          <p className="text-sm text-white font-medium">08:45 PM</p>
        </div>
      </div>
      <div className="bg-white/5 p-5 rounded-[24px] border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-default group/item">
        <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold group-hover/item:bg-luxury-gold group-hover/item:text-primary transition-all duration-500">
          <Droplets className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Water Temp</p>
          <p className="text-sm text-white font-medium">21°C</p>
        </div>
      </div>
      <div className="bg-white/5 p-5 rounded-[24px] border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-default group/item">
        <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold group-hover/item:bg-luxury-gold group-hover/item:text-primary transition-all duration-500">
          <Cloud className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Conditions</p>
          <p className="text-sm text-white font-medium">Clear Sky</p>
        </div>
      </div>
    </div>
  </div>
);

const events = [
  { title: 'Full Moon Gala', icon: <Music className="w-5 h-5" />, date: 'June 24', location: 'Infinity Pool Terrace', time: '20:00 PM' },
  { title: 'Vintners Reserve Tasting', icon: <Wine className="w-5 h-5" />, date: 'June 26', location: 'The Private Cellar', time: '18:30 PM' },
  { title: 'Solstice Wellness Retreat', icon: <Users className="w-5 h-5" />, date: 'June 28', location: 'Zen Garden Sanctuary', time: '07:00 AM' },
];

export const EventCalendar = () => (
  <div className="glass-panel p-8 rounded-[40px] border-white/10 bg-[#0a0f1c]/60 backdrop-blur-2xl relative overflow-hidden">
    <div className="flex justify-between items-center mb-10">
      <h4 className="text-white font-heading text-3xl">Curated Events</h4>
      <div className="w-12 h-12 rounded-2xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold border border-luxury-gold/20">
        <Calendar className="w-6 h-6" />
      </div>
    </div>
    <div className="space-y-4">
      {events.map((event, i) => (
        <motion.div
          key={i}
          whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
          className="flex items-center gap-6 p-5 rounded-[24px] transition-all cursor-pointer border border-transparent hover:border-white/10 group"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-luxury-gold group-hover:scale-110 transition-transform duration-500 border border-white/5">
            {event.icon}
          </div>
          <div className="flex-grow">
            <h5 className="text-white text-base font-medium mb-1">{event.title}</h5>
            <div className="flex items-center gap-3">
              <p className="text-[10px] text-luxury-gold uppercase tracking-[0.15em] font-bold">{event.date}</p>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">{event.location}</p>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-[10px] text-white/30 uppercase tracking-widest">{event.time}</p>
          </div>
        </motion.div>
      ))}
    </div>
    <button className="w-full mt-8 py-5 bg-white/5 hover:bg-white hover:text-primary transition-all duration-500 rounded-[20px] text-xs text-white uppercase tracking-[0.3em] font-bold border border-white/10">
      Explore All Events
    </button>
  </div>
);

const UtilityWidgets = () => {
  return (
    <section className="py-32 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <WeatherWidget />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <EventCalendar />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UtilityWidgets;
