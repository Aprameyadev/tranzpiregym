import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, Sparkles } from 'lucide-react';
import { trainersData } from '../data/gymData';

export default function Trainers() {
  return (
    <section 
      id="trainers" 
      className="py-24 sm:py-32 bg-[#0B0B0B] text-white relative overflow-hidden border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-xs font-mono uppercase tracking-widest block mb-3"
          >
            Elite Coaches
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-heading tracking-tight"
          >
            MEET OUR ELITE <span className="text-accent">TRAINERS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#BDBDBD] text-sm sm:text-base font-light leading-relaxed mt-4"
          >
            Our personal coaches hold premium clinical sports degrees, nutrition certifications, and competitive titles. Train safely under absolute expertise.
          </motion.p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainersData.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#161616] border border-white/5 overflow-hidden group hover:border-accent/30 transition-all duration-300 relative shadow-2xl flex flex-col h-full"
            >
              {/* Photo Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-750 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glow Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                {/* Floating Specialization Badges */}
                <div className="absolute top-4 left-4 bg-accent/95 px-2.5 py-1 text-[9px] uppercase tracking-widest font-mono font-bold text-white shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Certified
                </div>

                {/* Social media popup links */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-3 group-hover:translate-y-0 transition-transform">
                  {trainer.socials.instagram && (
                    <a 
                      href={trainer.socials.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-9 h-9 bg-black/80 hover:bg-accent text-white flex items-center justify-center border border-white/10 hover:border-transparent transition-all hover:scale-110"
                      aria-label={`${trainer.name} Instagram`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {trainer.socials.twitter && (
                    <a 
                      href={trainer.socials.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-9 h-9 bg-black/80 hover:bg-accent text-white flex items-center justify-center border border-white/10 hover:border-transparent transition-all hover:scale-110"
                      aria-label={`${trainer.name} Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {trainer.socials.facebook && (
                    <a 
                      href={trainer.socials.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-9 h-9 bg-black/80 hover:bg-accent text-white flex items-center justify-center border border-white/10 hover:border-transparent transition-all hover:scale-110"
                      aria-label={`${trainer.name} Facebook`}
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Copy Details */}
              <div className="p-6 text-center sm:text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider text-white mb-1 group-hover:text-accent transition-colors duration-300">
                    {trainer.name}
                  </h3>
                  <p className="text-accent text-[11px] font-mono uppercase tracking-widest font-semibold mb-3">
                    {trainer.specialization}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-3 mt-3">
                  <span className="text-[10px] uppercase tracking-wider text-[#BDBDBD] font-mono block">
                    {trainer.experience}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
