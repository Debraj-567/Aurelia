import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Eleanor & James Sterling",
    role: "Aurelia Elite Members",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2680&auto=format&fit=crop",
    quote: "Our stay at the Aurelia Ocean Reserve was nothing short of magical. The attention to detail, from the personalized welcome to the intuitive service of our private butler, exceeded every expectation. Truly a masterclass in luxury hospitality."
  },
  {
    name: "Alexander Rothschild",
    role: "Global Traveler",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
    quote: "The culinary experience at L'Atelier Paris within the Royal Palace property was a revelation. It is rare to find a hotel that not only provides exceptional comfort but also curates such profound gastronomic journeys."
  },
  {
    name: "Isabella DuBois",
    role: "Design Architect",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2664&auto=format&fit=crop",
    quote: "As an architect, I am captivated by the aesthetic brilliance of Aurelia properties. They seamlessly blend into their natural environments while maintaining an unmistakable air of contemporary opulence. The spaces feel alive."
  }
];

const GuestTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="py-32 bg-luxury-ivory text-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-gold tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-4"
          >
            Voices of Elegance
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading"
          >
            Guest Perspectives
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto relative h-[600px] md:h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                <p className="text-2xl md:text-3xl font-heading leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-primary/60 text-sm uppercase tracking-widest mt-1">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute -bottom-4 md:bottom-0 right-0 flex gap-4">
            <button 
              onClick={prev}
              className="w-12 h-12 border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestTestimonials;
