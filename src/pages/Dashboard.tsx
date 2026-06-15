import { motion } from 'framer-motion';
import { User, Settings, CreditCard, Heart, Map, Clock, Bell } from 'lucide-react';

const recentlyViewed = [
  { name: 'Aurelia Ocean Reserve', location: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2665&auto=format&fit=crop' },
  { name: 'Santorini Retreat', location: 'Greece', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2670&auto=format&fit=crop' }
];

const recommended = [
  { name: 'Swiss Alpine Chalet', location: 'Switzerland', image: 'https://images.unsplash.com/photo-1531366936337-77ba06d41c9b?q=80&w=2670&auto=format&fit=crop' },
  { name: 'Tuscany Heritage Estate', location: 'Italy', image: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=2670&auto=format&fit=crop' }
];

const Dashboard = () => {
  return (
    <div className="bg-primary min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-8">
            <div className="glass-panel p-8 rounded-[32px] border-white/10 text-center">
              <div className="w-24 h-24 rounded-full border-2 border-luxury-gold p-1 mx-auto mb-6">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop" alt="User" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-white font-heading text-xl mb-1">Alexander Sterling</h3>
              <p className="text-luxury-gold text-[10px] tracking-[0.2em] uppercase font-bold">Elite Member • Founder</p>
            </div>

            <nav className="glass-panel p-4 rounded-[32px] border-white/10 space-y-2">
              {[
                { label: 'Profile', icon: <User className="w-4 h-4" /> },
                { label: 'Bookings', icon: <Clock className="w-4 h-4" /> },
                { label: 'Favorites', icon: <Heart className="w-4 h-4" /> },
                { label: 'Journeys', icon: <Map className="w-4 h-4" /> },
                { label: 'Aurelia Pay', icon: <CreditCard className="w-4 h-4" /> },
                { label: 'Preferences', icon: <Settings className="w-4 h-4" /> },
              ].map((item) => (
                <button key={item.label} className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 text-white/60 hover:text-luxury-gold transition-all group">
                  <div className="group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="text-xs uppercase tracking-widest font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-12">
            {/* Notifications */}
            <div className="glass-panel p-6 rounded-[32px] border-luxury-gold/20 flex items-center justify-between bg-luxury-gold/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-luxury-gold flex items-center justify-center text-primary">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">Your Santorini retreat is approaching.</h4>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">July 12 - July 19 • Private Chauffeur Reserved</p>
                </div>
              </div>
              <button className="text-luxury-gold text-xs uppercase tracking-widest font-bold">Details</button>
            </div>

            {/* Recently Viewed */}
            <div>
              <h3 className="text-white font-heading text-2xl mb-8">Recently Viewed</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentlyViewed.map((item, i) => (
                  <motion.div key={i} whileHover={{ y: -10 }} className="group cursor-pointer">
                    <div className="relative h-64 rounded-[32px] overflow-hidden mb-4">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                    </div>
                    <h4 className="text-white font-medium">{item.name}</h4>
                    <p className="text-luxury-gold text-[10px] uppercase tracking-widest font-bold">{item.location}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div>
              <div className="flex justify-between items-end mb-8">
                <h3 className="text-white font-heading text-2xl">Recommended for You</h3>
                <span className="text-white/40 text-[10px] uppercase tracking-widest">Based on your preferences</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recommended.map((item, i) => (
                  <motion.div key={i} whileHover={{ y: -10 }} className="group cursor-pointer">
                    <div className="relative h-64 rounded-[32px] overflow-hidden mb-4">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                    </div>
                    <h4 className="text-white font-medium">{item.name}</h4>
                    <p className="text-luxury-gold text-[10px] uppercase tracking-widest font-bold">{item.location}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
