import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisonData = {
  features: [
    'Private Butler Service',
    'Michelin-Star Dining',
    'Helipad Access',
    'Underwater Spa',
    'Private Beach Access',
    'Chauffeur Transfers',
  ],
  properties: [
    {
      name: 'Maldives Reserve',
      availability: [true, true, false, true, true, true],
    },
    {
      name: 'Santorini Retreat',
      availability: [true, true, true, false, false, true],
    },
    {
      name: 'Tuscany Heritage',
      availability: [true, true, false, false, false, true],
    }
  ]
};

const DestinationComparison = () => {
  return (
    <section className="py-32 bg-[#0a0f1c]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-luxury-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4"
          >
            Refined Selection
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Compare Experiences</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-8 text-left text-white/40 font-heading text-xl font-normal border-b border-white/10">Amenities</th>
                {comparisonData.properties.map((prop) => (
                  <th key={prop.name} className="p-8 text-center text-white font-heading text-2xl font-normal border-b border-white/10">
                    {prop.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.features.map((feature, i) => (
                <tr key={feature} className="group hover:bg-white/5 transition-colors">
                  <td className="p-8 text-white/70 border-b border-white/5 text-sm uppercase tracking-widest">{feature}</td>
                  {comparisonData.properties.map((prop) => (
                    <td key={`${prop.name}-${feature}`} className="p-8 text-center border-b border-white/5">
                      <div className="flex justify-center">
                        {prop.availability[i] ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            className="w-6 h-6 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold"
                          >
                            <Check className="w-4 h-4" />
                          </motion.div>
                        ) : (
                          <X className="w-4 h-4 text-white/10" />
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-16 text-center">
          <button className="text-luxury-gold border-b border-luxury-gold pb-1 uppercase tracking-widest text-xs font-semibold hover:text-white hover:border-white transition-all">
            Download Comparison Report
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationComparison;
