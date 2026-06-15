import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const articles = [
  {
    category: 'Culinary Stories',
    title: 'The Art of Underwater Gastronomy',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop',
    excerpt: 'Discover how our chefs are pushing the boundaries of fine dining beneath the waves.'
  },
  {
    category: 'Wellness',
    title: 'Ancient Rituals for the Modern Soul',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop',
    excerpt: 'Exploring the link between ancestral wisdom and contemporary holistic health.'
  },
  {
    category: 'Architecture',
    title: 'Design in Harmony with Nature',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2670&auto=format&fit=crop',
    excerpt: 'A deep dive into the philosophy of sustainable luxury architecture at Aurelia.'
  }
];

const Journal = () => {
  return (
    <div className="bg-luxury-ivory text-primary min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 text-luxury-gold uppercase tracking-[0.4em] text-xs font-bold mb-8"
          >
            <BookOpen className="w-4 h-4" />
            <span>The Aurelia Journal</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-heading mb-12">Stories of <br /> <span className="italic font-light">Elegance & Culture</span></h1>
          <p className="text-primary/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Curated narratives on travel, gastronomy, and the art of living well. 
            Welcome to our digital publication.
          </p>
        </div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[70vh] rounded-[40px] overflow-hidden mb-32 group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop" 
            alt="Featured Article" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
            <span className="text-luxury-gold uppercase tracking-widest text-xs font-bold mb-4">Travel Stories</span>
            <h2 className="text-4xl md:text-6xl font-heading text-white mb-6 max-w-3xl">Across the Silk Road: A Modern Odyssey</h2>
            <button className="flex items-center gap-4 text-white uppercase tracking-widest text-sm font-bold group">
              Read Story <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[32px] mb-8">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <span className="text-luxury-gold uppercase tracking-widest text-[10px] font-bold mb-4">{article.category}</span>
              <h3 className="text-3xl font-heading mb-6 group-hover:text-luxury-gold transition-colors">{article.title}</h3>
              <p className="text-primary/60 text-sm leading-relaxed mb-8">{article.excerpt}</p>
              <button className="flex items-center gap-3 text-primary uppercase tracking-widest text-[10px] font-bold group">
                Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
