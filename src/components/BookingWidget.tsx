import { useState } from 'react';
import { Calendar, Users, MapPin, Search } from 'lucide-react';

const BookingWidget = () => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [guests] = useState('2 Adults');

  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] max-w-6xl z-40">
      <div className="glass-panel rounded-xl p-2 md:p-3 flex flex-col md:flex-row items-center justify-between gap-2 bg-[#0F172A]/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-2xl">
        
        {/* Destination */}
        <div className="flex-1 w-full px-6 py-4 border-b md:border-b-0 md:border-r border-white/10 flex items-center gap-5 hover:bg-white/5 transition-all duration-300 cursor-pointer group">
          <MapPin className="text-luxury-gold w-6 h-6 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col">
            <span className="text-[10px] text-luxury-gold uppercase tracking-[0.2em] font-bold mb-1">Destination</span>
            <input 
              type="text" 
              placeholder="Where to next?" 
              className="bg-transparent border-none outline-none text-white placeholder-white/40 text-sm md:text-base font-medium"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>

        {/* Dates */}
        <div className="flex-1 w-full px-6 py-4 border-b md:border-b-0 md:border-r border-white/10 flex items-center gap-5 hover:bg-white/5 transition-all duration-300 cursor-pointer group">
          <Calendar className="text-luxury-gold w-6 h-6 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col">
            <span className="text-[10px] text-luxury-gold uppercase tracking-[0.2em] font-bold mb-1">Check In - Out</span>
            <input 
              type="text" 
              placeholder="Add dates" 
              className="bg-transparent border-none outline-none text-white placeholder-white/40 text-sm md:text-base font-medium"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
            />
          </div>
        </div>

        {/* Guests */}
        <div className="flex-1 w-full px-6 py-4 flex items-center gap-5 hover:bg-white/5 transition-all duration-300 cursor-pointer group">
          <Users className="text-luxury-gold w-6 h-6 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col">
            <span className="text-[10px] text-luxury-gold uppercase tracking-[0.2em] font-bold mb-1">Guests & Rooms</span>
            <input 
              type="text" 
              className="bg-transparent border-none outline-none text-white text-sm md:text-base font-medium cursor-pointer"
              value={guests}
              readOnly
            />
          </div>
        </div>

        {/* Search Button */}
        <button className="w-full md:w-auto h-full px-12 py-5 md:py-0 bg-luxury-gold text-primary flex items-center justify-center gap-3 hover:bg-white transition-all duration-500 min-h-[80px] rounded-lg group">
          <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="uppercase tracking-[0.2em] font-bold text-xs">Search</span>
        </button>
      </div>
    </div>
  );
};

export default BookingWidget;
