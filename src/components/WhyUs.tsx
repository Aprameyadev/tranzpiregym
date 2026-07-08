import { motion } from 'motion/react';
import { Clock, Dumbbell, Award, ShieldCheck } from 'lucide-react';
import { featuresData } from '../data/gymData';

export default function WhyUs() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Clock': return <Clock className="w-8 h-8 text-accent" />;
      case 'Dumbbell': return <Dumbbell className="w-8 h-8 text-accent" />;
      case 'Award': return <Award className="w-8 h-8 text-accent" />;
      default: return <ShieldCheck className="w-8 h-8 text-accent" />;
    }
  };

  return (
    <section 
      id="why-us" 
      className="py-24 sm:py-32 bg-[#0B0B0B] text-white relative overflow-hidden border-b border-white/5"
    >
      {/* Background radial highlight for absolute luxury depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-xs font-mono uppercase tracking-widest block mb-3"
          >
            The Tranzpire Standard
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-heading tracking-tight"
          >
            WHY TRAIN WITH <span className="text-accent text-glow">US</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#BDBDBD] text-sm sm:text-base font-light leading-relaxed mt-4"
          >
            We set a higher standard. From custom-sculpted biomechanics to around-the-clock convenience, every detail of our club is curated for performance.
          </motion.p>
        </div>

        {/* Feature Grid with Hover Glows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative p-8 bg-[#161616] border border-white/5 hover:border-accent/40 hover:shadow-neon transition-all duration-300 group overflow-hidden"
            >
              {/* Top gradient glow overlay on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              {/* Interactive glowing background orb inside cards */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-accent/5 group-hover:bg-accent/15 rounded-full blur-xl transition-all duration-500 pointer-events-none" />

              <div className="mb-6 bg-white/5 w-14 h-14 flex items-center justify-center border border-white/5 group-hover:border-accent/20 group-hover:bg-accent/10 transition-all duration-300">
                {getIcon(feature.iconName)}
              </div>

              <h3 className="font-heading text-xl tracking-wider text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-[#BDBDBD] text-xs font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
