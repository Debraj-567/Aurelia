import { motion, useScroll, useSpring } from 'framer-motion';
import { Search, Calendar, Package, Plane, Home, Sparkles, RefreshCcw } from 'lucide-react';

const steps = [
  { title: 'Discover', icon: <Search />, description: 'Explore our handpicked collection of global sanctuaries.' },
  { title: 'Book', icon: <Calendar />, description: 'Seamlessly reserve your bespoke experience.' },
  { title: 'Prepare', icon: <Package />, description: 'Personalized concierge assistance for your arrival.' },
  { title: 'Travel', icon: <Plane />, description: 'Chauffeur and private aviation transfers.' },
  { title: 'Stay', icon: <Home />, description: 'Unparalleled luxury and intuitive service.' },
  { title: 'Experience', icon: <Sparkles />, description: 'Curated journeys tailored to your soul.' },
  { title: 'Return', icon: <RefreshCcw />, description: 'Seamless departure and anticipation of your next visit.' },
];

const JourneyTimeline = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-32 bg-primary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-luxury-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4"
          >
            The Aurelia Experience
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-heading text-white">Your Interactive Journey</h2>
        </div>

        <div className="relative mt-20">
          {/* Progress Bar Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 hidden lg:block"></div>
          <motion.div 
            style={{ scaleX }}
            className="absolute top-1/2 left-0 w-full h-[1px] bg-luxury-gold -translate-y-1/2 origin-left hidden lg:block"
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-[#0a0f1c] border border-white/10 flex items-center justify-center text-luxury-gold mb-6 group-hover:border-luxury-gold transition-colors duration-500 shadow-xl group-hover:shadow-luxury-gold/20">
                  {step.icon}
                </div>
                <h4 className="text-white font-heading text-xl mb-3">{step.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed max-w-[150px] mx-auto">{step.description}</p>
                
                {/* Vertical Line for Mobile/Tablet */}
                <div className="w-[1px] h-12 bg-white/10 mt-6 lg:hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
