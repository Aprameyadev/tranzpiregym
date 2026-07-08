import { motion } from 'motion/react';
import { Check, Dumbbell, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  const benefits = [
    { title: 'Modern Equipment', desc: 'Biomechanical rigs tuned for natural joint range and safety.' },
    { title: 'Personal Coaching', desc: 'Sleek custom periodized physical programs for your biology.' },
    { title: 'Certified Trainers', desc: 'Elite coaches with certified athletic backgrounds and degrees.' },
    { title: 'Nutrition Support', desc: 'Structured diet macros tailored specifically to your metabolic rate.' },
    { title: 'Functional Training', desc: 'Agility, mobility, and kettlebell circuits for kinetic power.' },
    { title: 'Group Classes', desc: 'High-energy community environments, spin, and body combat.' }
  ];

  return (
    <section 
      id="about" 
      className="py-24 sm:py-32 bg-[#0B0B0B] text-white relative overflow-hidden border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image Stack / Premium Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-none overflow-hidden group border border-white/10"
            >
              {/* Gym Image */}
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800" 
                alt="Tranzpire Premium Gym Interior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Luxury dark glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              {/* Float Card on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent rounded-none text-white">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg tracking-wider">PREMIUM MEMBESHIP INCLUDES</h4>
                    <p className="text-xs text-[#BDBDBD]">Locker, assessment & private shower access.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Accent border floating background */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/20 -z-10 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Copy & Checklist Grid */}
          <div className="lg:col-span-7">
            
            {/* Header */}
            <div className="mb-10 text-center md:text-left">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-accent text-xs font-mono uppercase tracking-widest block mb-3"
              >
                About Tranzpire Gym
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-heading tracking-tight text-white"
              >
                WHY CHOOSE <span className="text-accent">TRANZPIRE GYM</span>?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#BDBDBD] text-sm mt-4 font-light leading-relaxed max-w-2xl"
              >
                We provide a luxurious, motivating environment crafted explicitly for high performers. At Tranzpire Gym, you are not just getting a gym membership — you are gaining entry to an elite fitness ecosystem.
              </motion.p>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 bg-gradient-to-br from-[#161616] to-[#121212] border border-white/5 hover:border-accent/30 transition-all duration-300 flex items-start gap-4 hover:shadow-lg hover:shadow-accent/5 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-none bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg tracking-wider text-white group-hover:text-accent transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-[#BDBDBD] text-xs font-light mt-1 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
