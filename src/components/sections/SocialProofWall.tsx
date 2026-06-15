import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const socialPosts = [
  { image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670&auto=format&fit=crop', likes: '2.4k', comments: '128' },
  { image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2549&auto=format&fit=crop', likes: '1.8k', comments: '94' },
  { image: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2832&auto=format&fit=crop', likes: '3.1k', comments: '215' },
  { image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2670&auto=format&fit=crop', likes: '1.2k', comments: '45' },
  { image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2670&auto=format&fit=crop', likes: '4.5k', comments: '312' },
  { image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2568&auto=format&fit=crop', likes: '2.9k', comments: '167' },
];

const SocialProofWall = () => {
  return (
    <section className="py-32 bg-[#0a0f1c]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-luxury-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4"
          >
            Guest Moments
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-heading text-white">The Aurelia Society</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {socialPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square group overflow-hidden rounded-2xl md:rounded-[32px] cursor-pointer"
            >
              <img src={post.image} alt="Social Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-8">
                <div className="flex items-center gap-2 text-white">
                  <Heart className="w-5 h-5 fill-white" />
                  <span className="text-sm font-medium">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20">
                <Instagram className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-luxury-gold tracking-widest uppercase text-xs font-bold border-b border-luxury-gold pb-1 hover:text-white hover:border-white transition-all">
            Join the Conversation #AureliaLife
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofWall;
