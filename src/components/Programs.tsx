import { motion } from 'motion/react';
import { ArrowUpRight, Flame, Clock } from 'lucide-react';
import { programsData } from '../data/gymData';

export default function Programs() {
  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'Extreme': return 'bg-red-500/10 text-red-500 border-red-500/25';
      case 'High': return 'bg-accent/10 text-accent border-accent/25';
      default: return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/25';
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="programs" 
      className="py-24 sm:py-32 bg-[#0E0E0E] text-white relative border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-xs font-mono uppercase tracking-widest block mb-3"
          >
            Elite Workouts
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-heading tracking-tight"
          >
            OUR PREMIUM <span className="text-accent">PROGRAMS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#BDBDBD] text-sm sm:text-base font-light leading-relaxed mt-4"
          >
            Meticulously engineered training pathways and fitness classes in Gurugram designed to spark rapid muscular adaptation, shred excess body fat, and scale physical endurance.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-[#161616] border border-white/5 overflow-hidden flex flex-col justify-between hover:border-accent/40 transition-all duration-300 relative shadow-2xl hover:shadow-accent/5"
            >
              <div>
                {/* Image & Badges Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-90" />
                  
                  {/* Stats Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="flex items-center gap-1 text-[10px] uppercase font-semibold font-mono bg-black/75 px-2.5 py-1 text-white border border-white/10">
                      <Clock className="w-3 h-3 text-accent" />
                      {program.duration}
                    </span>
                    <span className={`flex items-center gap-1 text-[10px] uppercase font-semibold font-mono border px-2.5 py-1 ${getIntensityColor(program.intensity)}`}>
                      <Flame className="w-3 h-3" />
                      {program.intensity}
                    </span>
                  </div>
                </div>

                {/* Content Padding */}
                <div className="p-6">
                  <h3 className="font-heading text-2xl tracking-wider text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {program.name}
                  </h3>
                  <p className="text-xs text-[#BDBDBD] font-light leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={scrollToContact}
                  className="w-full flex items-center justify-between text-xs uppercase font-semibold tracking-widest font-mono text-[#BDBDBD] hover:text-white border-t border-white/5 pt-4 group/btn transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <div className="w-7 h-7 bg-white/5 flex items-center justify-center rounded-none group-hover/btn:bg-accent group-hover/btn:text-white transition-all duration-300 transform group-hover/btn:translate-x-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
